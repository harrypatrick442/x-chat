
const MultimediaHandler = require('./multimedia/MultimediaHandler');


'use strict';
require('./CaseSensitiveRequire');
const Configuration = require('./Configuration');
const ShutdownManager = require('./shutdown/ShutdownManager');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const servlet = require('./servlet');
const endpoint = require('./endpoint');
const endpointLongpoll = require('./EndpoingLongpoll');
const cors = require('cors');
const FilePaths = require('./FilePaths');
const dalNotifications = require('./DAL/DalNotifications');
const dalRooms = require('./DAL/DalRooms');
const dalMessages = require('./DAL/DalMessages');
const dalUsers = require('./DAL/DalUsers');
const dalPms = require('./DAL/DalPms');

//const whitelist = ['https://spaz.chat', 'http://spaz.chat', 'http://127.0.0.1', 'http://localhost', 'https://localhost' ]
/*const corsOptions = {
  origin: function (origin, callback) {
	if (whitelist.indexOf(origin) !== -1) {
	  callback(null, true)
	} else {
	  callback(new Error('Not allowed by CORS'))
	}
  }
}*/
var corsFunction;// = cors(corsOptions);
const app = express();
function setupAppForMainBackend(){
	const SIZE_LIMIT_MB=0.5;
	return new Promise((resolve, reject)=>{
		//var imageUploader = new (require('./ImageUploader'))();
		app.use(bodyParser.json({ limit: String(SIZE_LIMIT_MB)+'mb' }));
		app.use(bodyParser.urlencoded({ limit: String(SIZE_LIMIT_MB)+'mb', extended: true, parameterLimit: 50000 }));
		servlet(app);
		endpointLongpoll.load(app, corsFunction);
		if(Configuration.getUsePrecompiledFrontend()){
			app.use(express.static(path.join(__dirname, '../precompiled')));
			app.use('/images',express.static(path.join(__dirname, '../public/images/')));
			app.use('/emoji',express.static(path.join(__dirname, '../public/emoji/')));
		}
		else{
			app.use(express.static(path.join(__dirname, '../public')));
		}
		resolve();
	});
}
function setupAppForMultimediaBackend(){
	const SIZE_LIMIT_MB=3;
	return new Promise((resolve, reject)=>{
		//var imageUploader = new (require('./ImageUploader'))();
		app.use(bodyParser.text({ type: 'text/*' }))
		app.use(bodyParser.json({ limit: String(SIZE_LIMIT_MB)+'mb' }));
		app.use(bodyParser.urlencoded({ limit: String(SIZE_LIMIT_MB)+'mb', extended: true, parameterLimit: 50000 }));
		MultimediaHandler.initialize().then(()=>{
			app.use('/'+FilePaths.getUploadedImagesFolderName(),express.static(FilePaths.getUploadedImagesDirectory()));
			app.post('/request_upload_image', MultimediaHandler.handleRequestUploadImage);
			app.post('/upload_image', MultimediaHandler.handleUploadImage);
			app.get('/user_images_for_moderation', MultimediaHandler.handleGetUserImagesForModerator);
			app.get('/moderation', MultimediaHandler.handleModeration);
			resolve();
		}).catch(reject);
	});
}

const setupAppPromises=[];
if(Configuration.isMultimediaBackend())
	setupAppPromises.push(setupAppForMultimediaBackend());
if(Configuration.isMainBackend())
	setupAppPromises.push(setupAppForMainBackend());
Promise.allSettled(setupAppPromises).then((results)=>{
	let hadError = false;
	results.forEach(result=>{
		if(result.status!=='rejected')return;
		console.error(result.reason);
		hadError=true;
	});
	if(hadError)return;
	afterSetupApp();
}).catch(console.error);

function afterSetupApp(){
	const server = Configuration.getUseHttps()?useHttps(app):useHttp(app);
	endpoint(app, server);
	server.setTimeout(5000, function(r){
		console.log('timed out a connectionq');
	});
	registerShutdowns(server);
}
function useHttp(app){
	return app.listen(80, function () {
		const withStr = Configuration.isMultimediaBackend()?' as multimedia server':' as main backend';
		console.log('Server is running'+withStr+'...');
	});
}
function useHttps(app){
	var Greenlock = require('greenlock-express');
	var greenlock = Greenlock.create({
	  version: 'draft-11'
	, server: 'https://acme-v02.api.letsencrypt.org/directory'
	, email: 'awonderfulmachine@gmail.com'     // The email address of the ACME user / hosting provider
	, agreeTos: true                    // You must accept the ToS as the host which handles the certs
	, configDir: '~/.config/acme/'      // Writable directory where certs will be saved
	, communityMember: true             // Join the community to get notified of important updates
	,approvedDomains: [ 'backend.spaz.chat']
	  // Using your express app:
	  // simply export it as-is, then include it here
	,app: app,
	debug:true
	});
	return greenlock.listen(80, 443, 8080, 8443);//adding the last two ports fixed issue with wss. Probably used 8443.
}
function registerShutdowns(server){
	const shutdownMethods = [
		get_shutdownServer(server),
		dalUsers.save,
		dalRooms.save,
		dalMessages.save,
		dalPms.save,
		dalNotifications.save
	];
	const shutdownManager = ShutdownManager.getInstance();
	shutdownMethods.forEach(
		shutdownMethod=>shutdownManager.register(shutdownMethod)
	);
}
function get_shutdownServer(server){
	
	return ()=>{
		return new Promise((resolve, reject)=>{
			server.close();
			resolve();
		});
	};
}