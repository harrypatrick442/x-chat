var uuid = require('uuid');
const ShutdownManager = require('../shutdown/ShutdownManager');
const FilePaths = require('../FilePaths');
const UserImages = require('./UserImages');
module.exports = function UploadedFilesWaitingForModeration_Queue({
}){
	const userImages= new UserImages({
		filePath:FilePaths.getUploadedFilesWaitingForModerationJSON(),
		throwErrorLoadingSaving:false
	});
	this.queue=function(userImage){
		addUserImage(userImage);
	};
	this.getUserImagesJsonForClientModerator=function(){
		return userImages.getEntries()
				.map(userImage=>userImage.toJSONForModeration());
	};
	this.save=userImages.save;
	this.load=userImages.load;
	ShutdownManager.getInstance().register(this.save);
	
	function addUserImage(userImage){
		return new Promise((resolve, reject)=>{
			const userId=userImage.getUserId();
			const existingUserImagesForUser = userImages
				.getForUserId(userId);
			const afterDeletedExistingImage=()=>{
				userImages.add(userImage);
				resolve();
			};
			if(existingUserImagesForUser.length<1)
				afterDeletedExistingImage();
			else{
				userImages.removeAll(existingUserImagesForUser);
				const deletePromises = existingUserImagesForUser
					.map(existingUserImageForUser=>
						existingUserImageForUser.delete());
				
				Promise.allSettled(deletePromises)
				.then(afterDeletedExistingImage).catch(reject);
			}
		});
	}
};;