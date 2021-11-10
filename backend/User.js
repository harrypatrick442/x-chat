const DISPOSE='dispose';
	const EventEnabledBuilder = require('./EventEnabledBuilder');
	const Devices = require('./Devices').Devices;
	const SpamFilter = require('./SpamFilter');
	const Set = require('./Set');
	const set = new Set({getEntryId:getEntryId});
function User(params){
	console.log(params);
	EventEnabledBuilder(this);
	var self = this;
	var spamFilter = new SpamFilter();
	var devices = new Devices();
	//var roomsSet = new Set({getEntryId:getEntryId});
	this.getDevices = function(){ return devices;};
	this.getId = function(){return params.id;};
	this.setId = function(value){params.id = value;};
	this.getUsername = function(){return params.username;};
	this.getImage = function(){return params.image;};
	this.setImage = function(value){params.image=value;};
	this.getEmail = function(){return params.email;};
	this.isGuest= function(){return params.isGuest;};
	this.getGender = function(){return params.gender;};
	this.getBirthday = function(){return params.birthday;};
	this.getSpamFilter = function(){return spamFilter;};
	this.getToken = function(){
		return params.token;
	};
	this.setToken = function(value){
		params.token=value;
	};
	this.toJSON = function(){return params;};
	var session;
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
	row.id = String(row.id);
	var user = getExisting(row.id);
	if(user)return user;
	user = new __User(row);
	set.add(user);
	return user;
};
User.fromJSON= function(jObject){
	var user = getExiting(jObject.id);
	if(user)return user;
	user = new __User(jObject);
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