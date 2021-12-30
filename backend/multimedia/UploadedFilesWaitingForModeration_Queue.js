var uuid = require('uuid');
const FilePaths = require('../FilePaths');
module.exports = function UploadedFilesWaitingForModeration_Queue({
}){
	const mapUserIdToUserImage= new Map();
	this.queue=function(userImage){
		return addUserImage(userImage);
	};
	this.getUserImagesJsonForClientModerator=function(){
		return Array.from(mapUserIdToUserImage.values())
				.map(userImage=>userImage.toJSONForModeration());
	};
	this.save=function(){
		return new Promise((resolve, reject)=>{
			const jArrayUserImages=
				Array.from(mapUserIdToUserImage.values())
				.map(userImage=>userImage.toJSON());
				fs.writeFile(FilePaths
					.getUploadedFilesWattingForModerationJSON(),
					JSON.stringify(jArrayUserImages), (err)=>{
						if(err){
							reject(err);
							return;
						}
						resolve();
				});
		});
	};
	this.load=function(){
		return new Promise((resolve, reject)=>{
			fs.readFile(FilePaths
				.getUploadedFilesWattingForModerationJSON(), (content, err)=>{
						const jArrayUserImages=JSON.parse(content);
						jArrayUserImages.forEach(jObjectUserImage=>{
							const userImage = UserImage.fromJSON(jObjectUserImage);
							addUserImage(userImage);
				});
			});
		});
	};
	function addUserImage(userImage){
		return new Promise((resolve, reject)=>{
			const userId=userImage.getUserId();
			const existingUserImageForUser = mapUserIdToUserImage
				.get(userId);
			const afterDeletedExistingImage=()=>{
				mapUserIdToUserImage.set(userId, userImage);
				resolve();
			};
			if(!existingUserImageForUser)
				afterDeletedExistingImage();
			else{
				existingUserImageForUser.delete()
				.then(afterDeletedExistingImage).catch(reject);
			}
		});
	}
};;