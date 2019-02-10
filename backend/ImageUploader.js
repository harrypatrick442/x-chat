exports.ImageUploader = (function(){
	var path = require('path');
	var imageDataURI = require('image-data-uri');
	console.log(imageDataURI);
	var _ImageUploader = function(){
		this.process=function(req, res){
			console.log(typeof req);
			for(var i in req){console.log(i);}
			var dataUrl = req.body.dataUrl;
 
			// It will create the full path in case it doesn't exist
			// If the extension is defined (e.g. fileName.png), it will be preserved, otherwise the lib will try to guess from the Data URI
			var fileName = 'testfdfssdf';
			var filePath = path.join(__dirname, '..', 'public/images/uploaded/',fileName);
			console.log(filePath);
			imageDataURI.outputFile(dataUrl, filePath)
			.then(res => console.log(res));
			return {};
		};
	};
	return _ImageUploader;
})();