var dal = require('./dal');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var servlet = require('./servlet').servlet;
var endpoint = require('./endpoint').endpoint;
var imageUploader = require('./ImageUploader').ImageUploader;
app.use(bodyParser.json());
servlet(app);
endpoint(app);
app.use(express.static(path.join(__dirname, '../public')));
var server = app.listen(80, function () {
    console.log('Server is running..');
});
app.get('/image_uploader', function(req, res){
	console.log(req);
	imageUploader.process(req, res);
});

