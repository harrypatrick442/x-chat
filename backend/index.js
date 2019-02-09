const SIZE_LIMIT_MB=1.5;
var dal = require('./dal');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var servlet = require('./servlet').servlet;
var endpoint = require('./endpoint').endpoint;
var imageUploader = new (require('./ImageUploader').ImageUploader)();
app.use(bodyParser.json({ limit: String(SIZE_LIMIT_MB)+'mb' }));
app.use(bodyParser.urlencoded({ limit: String(SIZE_LIMIT_MB)+'mb', extended: true, parameterLimit: 50000 }));
servlet(app);
endpoint(app);
app.use(express.static(path.join(__dirname, '../public')));
var server = app.listen(80, function () {
    console.log('Server is running..');
});
app.post('/image_uploader', function(req, res){
	console.log(req);
	
	res.send(imageUploader.process(req));
});

