const throwArgumentError = require('../errors/throwArgumentError');
const path = require('path');
const FilePaths = require('../FilePaths');
const Configuration=require('../Configuration');
const UserImage = function({
	userId, cropValues, rawFilePath
}){
	const self = this;
	if(userId===undefined||userId===null)
		throwArgumentError('userId', userId);
	if(cropValues===undefined||cropValues===null)
		throwArgumentError('cropValues', cropValues);
	if(rawFilePath===undefined||rawFilePath===null)
		throwArgumentError('rawFilePath', rawFilePath);
	this.getUserId=function(){
		return userId;
	};
	this.getCropValues=function(){
		return cropValues;
	};
	this.getRawFilePath=function(){
		return rawFilePath;
	};
	this.getRawFileName=function(){
		return path.basename(rawFilePath);
	};
	this.toJSON=function(){
		return {userId, cropValues, rawFilePath};
	};
	this.toJSONForModeration=function(){
		return {userId, cropValues, url:getUploadedImagesUrlPath()};
	};
	this.delete=function(){
		return Promise.all(self.deleteRawFile());
	};
	this.deleteRawFile=function(){
		if(!rawFilePath){
			return Promise.resolve();
		}
		return new Promise((resolve, reject)=>{	
			fs.unlink(rawFilePath, (err)=>{
				resolve();
			});
		});
	};
	function getUploadedImagesUrlPath(){
		return `${Configuration.getMultimediaBackendUrl()}/${FilePaths.getUploadedImagesFolderName()}/${self.getRawFileName()}`;
	}
}
UserImage.fromJSON=function(jObject){ 
	return new UserImage(jObject);
};
module.exports = UserImage;