
var Messages = 	require('./Messages');
var Users = require('./Users');
var Devices = require('./Devices');
var EventEnabledBuilder = require('./EventEnabledBuilder');
const Room = function(params){
	EventEnabledBuilder(this);
	var self = this;
	var messages;
	var devices = new Devices();
	var id = params.id;
	var keepListed=false;
	this.getId= function(){return params.id;};
	this.getName = function(){ return params.name;};
	this.getMessages = getMessages;
	this.getNUsers=function(){return devices.getUserIds().length;};
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
		return {id:params.id, name:params.name, nUsers:self.getNUsers()};
	};
	//set when a request to get the new list of rooms to show returns this room.
	//if a subsequent return does not include this room, this property is set
	//to false allowing the room to be disposed of if and when the last user leaves.
	this.setKeepListed = function(value){
		keepListed=value;
	};
	this.getKeepListed = function(){
		return keepListed;
	};
	this.sendMessage = function(message){
		message.setSentAt(new Date().toISOString());
		getMessages(function(messages){messages.add(message);});
		devices.sendMessage({type:'message', roomId:id, message:message.toJSON()});
	};
	this.toJSON = function(){
		return params;
	};
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
Room.fromJSON = function(jObject){
	return new Room({name:jObject.name, id:jObject.id,
		isPm:jObject.isPm});
};
Room.fromSqlRow = function(row){
	return new Room({name:row.name, id:row.id, isPm:row.isPm});
};
module.exports = Room;