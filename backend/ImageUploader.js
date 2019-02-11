exports.ImageUploader = (function(){
	var each = require('./each').each;
	var path = require('path');
	var imageDataURI = require('image-data-uri');
	var count=0;
	console.log(imageDataURI);
	var _ImageUploader = function(){
		this.process=function(req, res){
			var images = req.body.images;
			var fileName = getNextFileName();
			each(images, function(image){
				var filePath = path.join(__dirname, '..', 'public/images/uploaded/',fileName+image.profile.name);
				console.log(filePath);
				imageDataURI.outputFile(image.dataUrl, filePath)
				.then(res => console.log(res));
			});
			return {};
		};
	};
	return _ImageUploader;
	function getNextFileName(){
		return String(new Date().getTime())+String(count)+'_';
	}
})();