




'use strict';
(function(){
	var config = require('./configuration');
	const dal = require('./dal');
	const express = require('express');
	const bodyParser = require('body-parser');
	const path = require('path');
	const servlet = require('./servlet').servlet;
	const endpoint = require('./endpoint').endpoint;
	const  endpointLongpoll = require('./EndpoingLongpoll');
	var app = (function(){
		const SIZE_LIMIT_MB=1.5;
		const app = express();
		var imageUploader = new (require('./ImageUploader').ImageUploader)();
		app.use(bodyParser.json({ limit: String(SIZE_LIMIT_MB)+'mb' }));
		app.use(bodyParser.urlencoded({ limit: String(SIZE_LIMIT_MB)+'mb', extended: true, parameterLimit: 50000 }));
		servlet(app);
		app.post('/image_uploader', function(req, res){
			res.send(imageUploader.process(req));
		});
		endpointLongpoll.load(app);
		app.use(express.static(path.join(__dirname, '../public')));
		return app;
	})();
	var server = config.useHttps?useHttps(app):useHttp(app);
	endpoint(app, server);
	server.setTimeout(5000, function(r){
		console.log('timed out');
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
		,approvedDomains: [ 'x-chat.co' ]
		  // Using your express app:
		  // simply export it as-is, then include it here
		,app: app,
		debug:true
		});
		return greenlock.listen(80, 443);
	}
})();
