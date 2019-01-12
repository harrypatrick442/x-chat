exports.Room = (function(){
	var dalRooms = require('./DAL/DalRooms').dalRooms;
	var Messages = new require('./Messages').Messages;
	var Users = new require('./Users').Users;
	var _Room = function(params){
		var self = this;
		var messages;
		var users = new Users();
		var id = params.id;
		this.getId= function(){return params.id;};
		this.getName = function(){ return params.name;};
		this.getMessages = function(callback){
			getMessages(callback);
		};
		this.isPm=function(){return params.isPm;};
		this.join = function(user){
			if(users.contains(user))return;
			users.add(user);
			user.addEventLitener('dispose', userDispose);
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
		function userDispose(e){
			users.remove(e.user);
		}
	};
	_Room.fromSqlRow = function(row){
		return new _Room({name:row.name, id:row.id, isPm:row.isPm});
	};
	return _Room;
})();