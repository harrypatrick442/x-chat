exports.Room = new (function(){
	var dalRooms = require('./DAL/DalRooms').dalRooms;
	var Messages = new require('./Messages').Messages;
	var Users = new require('./Users').Users;
	var _Room = function(params){
		var self = this;
		var messages;
		var users = new Users();
		this.getId= function(){return params.id;};
		this.getName = function(){ return params.name;};
		this.getMessages = function(){
			return getMessages();
		};
		this.isPm=function(){return params.isPm;};
		this.join = function(user){
			if(!users.contains(user))
				users.add(user);
		};
		this.getSqlParameters= function(){
		   return {name:params.name, id:params.id};
		};
		this.sendMessage = function(user, message){
			messages.add(message);
		};
		initialize();
		function initialize(){
		}
		function getMessages(){
			if(!messages)messages = new Messages(params.roomId);
			return messages;
		}
	};
	_Room.fromSqlRow = function(row){
		return new _Room({name:row.name, id:row.id, isPm:row.isPm});
	};
	return _Room;
})();