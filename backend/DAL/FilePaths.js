const path = require('path');
module.exports = new (function FilePaths(){
	this.getUsers= function(){
		console.log(getRootDirectory());
		return getRootDirectory()+'users.json';
	};
	this.getRooms = function(){
		return getRootDirectory()+'rooms.json';
		
	};
	this.getNotifications = function(){
		return getRootDirectory()+'notifications.json';
	};
	this.getPms = function(){
		return getRootDirectory()+'pms.json';
	};
	this.getMessages = function(){
		return getRootDirectory()+'messages.json';
	};
	function getRootDirectory(){
		return path.resolve("./");
	}
})();
