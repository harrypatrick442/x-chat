const path = require('path');
const PathHelper = require('./PathHelper');
const DirectoryHelper = require('./DirectoryHelper');
module.exports = new (function FilePaths(){
	const self = this;
	DirectoryHelper.makeDirectoryIfDoesntExist(getDataDirectoryPath());
	this.getConfiguration= function(){
		return getDataDirectoryPath()+'configuration.json';
	};
	this.getUsers= function(){
		return getDataDirectoryPath()+'users.json';
	};
	this.getRooms = function(){
		return getDataDirectoryPath()+'rooms.json';
	};
	this.getNotifications = function(){
		return getDataDirectoryPath()+'notifications.json';
	};
	this.getPmsRoot = function(){
		return getDataDirectoryPath()+'pms';
	};
	this.getMessages = function(){
		return getDataDirectoryPath()+'messages.json';
	};
	this.getUploadedImagesFolderName=function(){
		return 'uploaded_images';
	};
	this.getUploadedImagesDirectory = function(){
		return getDataDirectoryPath()+self.getUploadedImagesFolderName()+'/';
	};
	this.getImagesWaitingToBePushedIntoCloudJSON = function(){
		return getDataDirectoryPath()+'images_waiting_to_be_pushed_into_cloud.json';
	};
	this.getUploadedFilesWaitingForModerationJSON = function(){
		return getDataDirectoryPath()+'uploaded_images_waiting_for_moderation.json';
	};
	function getDataDirectoryPath(){
		const splits = PathHelper.split(path.resolve("./"));
		return `${splits[0]}${path.sep}data${path.sep}`;
	}
})();