exports.Room = (function(){
	var dalRooms = require('./DAL/DalRooms').dalRooms;
	var Messages = 	require('./Messages').Messages;
	var Users = require('./Users').Users;
	var EventEnabledBuilder = require('./EventEnabledBuilder').EventEnabledBuilder;
	var _Room = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var messages;
		var users = new Users();
		var id = params.id;
		this.getId= function(){return params.id;};
		this.getName = function(){ return params.name;};
		this.getMessages = function(callback){
			getMessages(callback);
		};
		this.getUsers=function(){return users;};
		this.isPm=function(){return params.isPm;};
		this.getUserTo= function(){ return params.userTo;};
		this.join = function(user){
			if(users.contains(user))return;
			users.add(user);
			user.joinedRoom(self);
			self.sendUserIds();
		};
		this.leave = function(user){
			if(!users.contains(user))return;
			users.remove(user);
			user.leftRoom(self);
			self.sendUserIds();
		};
		this.sendUserIds=function(){
			users.sendMessage({type:'room_userids', roomId:self.getId(), userIds:users.getIds()});
		};
		this.getInfo = function(){
			return {id:String(params.id), name:params.name};
		};
		this.sendMessage = function(message){
			getMessages(function(messages){messages.add(message);});
			users.sendMessage({type:'message', roomId:id, message:message.toJSON()});
		};
		initialize();
		function initialize(){
		}
		function getMessages(callback){
			if(!messages){
				messages = new Messages({roomId:id}, callback);
				return;
			}
			callback(messages);
		}
		function dispatchDispose(){
			self.dispatchEvent({type:'dispose', room:room});
		}
	};
	_Room.fromSqlRow = function(row){
		return new _Room({name:row.name, id:String(row.id), isPm:row.isPm});
	};
	return _Room;
})();