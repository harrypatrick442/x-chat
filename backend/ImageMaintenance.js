module.exports = new (function(){const fs = require('fs');
	const fsExtra = require('fs-extra');
	const path = require('path');
	const dalUsers = require('./DAL/DalUsers').dalUsers;
	const ImageSizes = require('./ImageSizes');
	const uploaded = path.join(__dirname, '../public/images/uploaded');
	const JPEG='.jpeg';
	this.deleteUserImageFiles = function(userId, callback){
		dalUsers.getImage(userId, function(image){
			var smallImage=image+'_'+ImageSizes.SMALL+JPEG;
			var largeImage = image+'_'+ImageSizes.LARGE+JPEG;
			var pathSmallImage = path.join(uploaded, smallImage);
			var pathLargeImage = path.join(uploaded, largeImage);
			deleteIfExists(pathSmallImage);
			deleteIfExists(pathLargeImage);
			callback&&callback();
			
		});
	};
	function deleteIfExists(path){
		if(fs.existsSync(path))
			fs.unlinkSync(path);
	}
})();