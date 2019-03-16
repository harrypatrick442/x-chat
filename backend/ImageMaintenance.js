module.exports = new (function(){const fs = require('fs');
	const fsExtra = require('fs-extra');
	const path = require('path');
	const dalUsers = require('./DAL/DalUsers').dalUsers;
	const ImageSizes = require('./ImageSizes');
	const uploaded = path.join(__dirname, '../public/images/uploaded');
	const JPEG='.jpeg';
	this.deleteUserImageFiles = function(userId){
		dalUsers.getImage(userId, function(image){
			console.log('image is: ');	
			console.log(image);
			var smallImage=image+'_'+ImageSizes.SMALL+JPEG;
			var largeImage = image+'_'+ImageSizes.LARGE+JPEG;
			var pathSmallImage = path.join(uploaded, smallImage);
			var pathLargeImage = path.join(uploaded, largeImage);
			console.log(pathLargeImage);
			deleteIfExists(pathSmallImage);
			deleteIfExists(pathLargeImage);
			
		});
	};
	function deleteIfExists(path){
		if(fs.existsSync(path))
			fs.unlinkSync(path);
	}
})();