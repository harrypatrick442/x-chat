




'use strict';
(function(){
	require('./CaseSensitiveRequire');
	const config = require('./Configuration');
	const ShutdownManager = require('./shutdown/ShutdownManager');
	const express = require('express');
	const bodyParser = require('body-parser');
	const path = require('path');
	const servlet = require('./servlet');
	const endpoint = require('./endpoint');
	const  endpointLongpoll = require('./EndpoingLongpoll');
	const cors = require('cors');
	
	const whitelist = ['https://spaz.chat', 'http://spaz.chat', 'http://127.0.0.1', 'http://localhost', 'https://localhost' ]
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
	var app = (function(){
		const SIZE_LIMIT_MB=1.5;
		const app = express();
		var imageUploader = new (require('./ImageUploader'))();
		app.use(bodyParser.json({ limit: String(SIZE_LIMIT_MB)+'mb' }));
		app.use(bodyParser.urlencoded({ limit: String(SIZE_LIMIT_MB)+'mb', extended: true, parameterLimit: 50000 }));
		servlet(app);
		app.post('/image_uploader', function(req, res){
			res.send(imageUploader.process(req));
		});
		endpointLongpoll.load(app, corsFunction);
		if(config.getUsePrecompiledFrontend()){
			app.use(express.static(path.join(__dirname, '../precompiled')));
			app.use('/images',express.static(path.join(__dirname, '../public/images/')));
			app.use('/emoji',express.static(path.join(__dirname, '../public/emoji/')));
		}
		else{
			app.use(express.static(path.join(__dirname, '../public')));
		}
		return app;
	})();
	const server = config.getUseHttps()?useHttps(app):useHttp(app);
	endpoint(app, server);
	server.setTimeout(5000, function(r){
		console.log('timed out a connection');
	});
	ShutdownManager.initialize({
		server
	});
	function useHttp(app){
		return app.listen(80, function () {
			console.log('Server is running...');
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
		, telemetry: true                   // Contribute telemetry data to the project
		,approvedDomains: [ 'backend.spaz.chat']
		  // Using your express app:
		  // simply export it as-is, then include it here
		,app: app,
		debug:true
		});
		return greenlock.listen(80, 443, 8080, 8443);//adding the last two ports fixed issue with wss. Probably used 8443.
	}
})();
