const uuid = require('uuid');
const ShutdownManager = require('../shutdown/ShutdownManager');
const FilePaths = require('../FilePaths');
const UserImages = require('./UserImages');
module.exports = function ImagesWaitingToBePushedIntoCloud_Queue({
	
}){
	const userImages= new UserImages({
		filePath:FilePaths.getImagesWaitingToBePushedIntoCloudJSON(),
		throwErrorLoadingSaving:false
	});
	this.queue=function(userImage){
		userImages.add(userImage);
	};
	this.load= userImages.load;
	this.save=userImages.save;
	ShutdownManager.getInstance().register(this.save);
}