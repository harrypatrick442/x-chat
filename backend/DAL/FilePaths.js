const path = require('path');
const PathHelper = require('../PathHelper');
const DirectoryHelper = require('../DirectoryHelper');
module.exports = new (function FilePaths(){
	DirectoryHelper.makeDirectoryIfDoesntExist(getDataDirectoryPath());;
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
	function getDataDirectoryPath(){
		const splits = PathHelper.split(path.resolve("./"));
		return `${splits[0]}${path.sep}data${path.sep}`;
	}
})();
