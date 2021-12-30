const DISPOSE='dispose';
var EventEnabledBuilder = require('./EventEnabledBuilder');
var Devices = require('./Devices');
var SpamFilter = require('./SpamFilter');
var Set = require('./Set');
var set = new Set({getEntryId:getEntryId});
const User = function(params){
	EventEnabledBuilder(this);
	var self = this;
	let {id, hash, username, image, email, isGuest,
		gender, birthday, token, moderator}=params;
		
	let session = null;
	const spamFilter = new SpamFilter();
	const devices = new Devices();
	//var roomsSet = new Set({getEntryId:getEntryId});
	this.getId = function(){return id;};
	this.setId = function(value){id = value;};
	this.getHash=function(){return hash;};
	this.setHash=function(value){ hash=value;}
	this.getUsername = function(){return username;};
	this.getImage = function(){return image;};
	this.setImage = function(value){image=value;};
	this.getEmail = function(){return email;};
	this.isGuest= function(){return isGuest;};
	this.getGender = function(){return gender;};
	this.getBirthday = function(){return birthday;};
	this.getModerator=function(){return moderator;};
	this.getToken = function(){ return token;};
	this.setToken = function(value){token=value;};
	
	
	this.getSpamFilter = function(){return spamFilter;};
	this.getDevices = function(){ return devices;};
	
	this.toJSON = function(){
		return {id, hash, username, image, email, isGuest,
			gender, birthday, token, moderator};
	};
	this.getSession = function(){return session;};
	this.setSession=function(value){session = value;};
	/*this.joinedRoom = function(room){
		roomsSet.add(room);
		room.addEventListener(DISPOSE, roomDisposed);
	};
	this.leftRoom = function(room){
		roomsSet.remove(room);
		room.removeEventListener(DISPOSE, roomDisposed);
	};*/
	this.dispose = function(){
		devices.closeAll();
		dispose();
	};
	/*this.getRoomIdsIsIn= function(){
		return roomsSet.getEntryIds();
	};*/
	devices.addEventListener('allclosed', dispose);
	this.addDevice = devices.add;
	this.sendMessage = devices.sendMessage;
	function dispose(){
		dispatchDispose();
	}
	function roomDisposed(e){
		roomsSet.remove(e.room);
	}
	function dispatchDispose(){
		self.dispatchEvent({type:DISPOSE, user:self});
	}
	function getEntryId(room){
		return room.getId();
	}
};
User.fromSqlRow = function(row){
	var user = getExisting(row.id);
	if(user)return user;
	user = new User(row);
	set.add(user);
	return user;
};
User.fromJSON= function(jObject){
	var user = getExisting(jObject.id);
	if(user)return user;
	user = new User(jObject);
	set.add(user);
	return user;
};
module.exports = User;
function getEntryId(user){
	return user.getId();
}
function getExisting(id){
	return set.getById(id);
}