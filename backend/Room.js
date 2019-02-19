exports.Room = (function(){
	var dalRooms = require('./DAL/DalRooms').dalRooms;
	var Messages = 	require('./Messages').Messages;
	var Users = require('./Users').Users;
	var Devices = require('./Devices').Devices;
	var EventEnabledBuilder = require('./EventEnabledBuilder');
	var _Room = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var messages;
		var devices = new Devices();
		var id = params.id;
		this.getId= function(){return params.id;};
		this.getName = function(){ return params.name;};
		this.getMessages = function(callback){
			getMessages(callback);
		};
		this.getUsers=function(){return devices.getUsers();};
		this.isPm=function(){return params.isPm;};
		this.getUserTo= function(){ return params.userTo;};
		this.join = function(device){
			if(!devices.add(device))return;
			device.joinedRoom(self);
			self.sendUserIds();
		};
		this.leave = function(device){
			if(!devices.remove(device))return;
			device.leftRoom(self);
			self.sendUserIds();
		};
		this.sendUserIds=function(){
			devices.sendMessage({type:'room_userids', roomId:self.getId(), userIds:devices.getUserIds()});
		};
		this.getInfo = function(){
			return {id:String(params.id), name:params.name};
		};
		this.sendMessage = function(message){
			getMessages(function(messages){messages.add(message);});
			devices.sendMessage({type:'message', roomId:id, message:message.toJSON()});
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