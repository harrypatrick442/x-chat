exports.Room = (function(){
	var dalRooms = require('./DAL/DalRooms').dalRooms;
	var Messages = new require('./Messages').Messages;
	var Users = new require('./Users').Users;
	var _Room = function(params){
		console.log('room params are: ');
		console.log(params);
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
		this.join = function(user){
			if(users.contains(user))return;
			users.add(user);
			users.sendMessage({type:'room_join', roomId:self.getId(), userIds:users.getIds()});
		};
		this.leave = function(user){
			if(!users.contains(user))return;
			users.remove(user);
			user.removeEventListener('dispose', userDispose);
		};
		this.getInfo = function(){
			return {id:String(params.id), name:params.name};
		};
		this.getSqlParameters= function(){
		   return {name:params.name, id:params.id};
		};
		this.sendMessage = function(message){
			getMessages(function(messages){messages.add(message);});
			console.log('returning message');
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
		return new _Room({name:row.name, id:row.id, isPm:row.isPm});
	};
	return _Room;
})();