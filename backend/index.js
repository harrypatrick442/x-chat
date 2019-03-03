




'use strict';

require('greenlock-express').create({
  email: 'awonderfulmachine@gmail.com'     // The email address of the ACME user / hosting provider
, agreeTos: true                    // You must accept the ToS as the host which handles the certs
, configDir: '~/.config/acme/'      // Writable directory where certs will be saved
, communityMember: true             // Join the community to get notified of important updates
, telemetry: true                   // Contribute telemetry data to the project

  // Using your express app:
  // simply export it as-is, then include it here
, app: function(){
		const SIZE_LIMIT_MB=1.5;
		var dal = require('./dal');
		var express = require('express');
		var bodyParser = require('body-parser');
		var app = express();
		var path = require('path');
		var servlet = require('./servlet').servlet;
		var endpoint = require('./endpoint').endpoint;
		var endpointLongpoll = require('./EndpoingLongpoll');
		var imageUploader = new (require('./ImageUploader').ImageUploader)();
		app.use(bodyParser.json({ limit: String(SIZE_LIMIT_MB)+'mb' }));
		app.use(bodyParser.urlencoded({ limit: String(SIZE_LIMIT_MB)+'mb', extended: true, parameterLimit: 50000 }));
		servlet(app);
		endpoint(app);
		app.use(express.static(path.join(__dirname, '../public')));
		var server = app.listen(80, function () {
			console.log('Server is running..');
		});
		server.setTimeout(5000, function(r){console.log('timed out'); //console.log(r);
		});
		app.post('/image_uploader', function(req, res){
			console.log(req);
			res.send(imageUploader.process(req));
		});
		endpointLongpoll.load(app);
	}
 debug: true
}).listen(80, 443);