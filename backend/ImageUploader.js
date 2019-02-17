exports.ImageUploader = (function(){
	const SMALL='32_32';
	const LARGE='128_128';
	var lobby = require('./lobby').lobby;
	var each = require('./each');
	var path = require('path');
	var imageDataURI = require('image-data-uri');
	var count=0;
	console.log(imageDataURI);
	var _ImageUploader = function(){
		this.process=function(req, res){
			var params = req.body;
			var images = params.images;
			var sessionId = params.sessionId;
			var fileName = getNextFileName();
			each(images, function(image){
				var name = image.profile.name;
				if(name!=SMALL&&name!=LARGE)return;
				var filePath = path.join(__dirname, '..', 'public/images/uploaded/',fileName+'_'+name);
				console.log(filePath);
				imageDataURI.outputFile(image.dataUrl, filePath)
				.then(res => console.log(res));
			});
			lobby.setImageForUser(sessionId, fileName);
			return {};
		};
	};
	return _ImageUploader;
	function getNextFileName(){
		return String(new Date().getTime())+String(count);
	}
})();