exports.User = (function(){
	const DISPOSE='dispose';
	var EventEnabledBuilder = require('./EventEnabledBuilder');
	var Devices = require('./Devices').Devices;
	var Set = require('./Set');
	var set = new Set({getEntryId:getEntryId});
	var __User = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var devices = new Devices();
		//var roomsSet = new Set({getEntryId:getEntryId});
		this.getDevices = function(){ return devices;};
		this.getId = function(){return params.id;};
		this.getUsername = function(){return params.username;};
		this.getImage = function(){return params.image;};
		this.setImage = function(value){params.image=value;};
		this.getEmail = function(){return params.email;};
		this.isGuest= function(){return params.isGuest;};
		this.getGender = function(){return params.gender;};
		this.getBirthday = function(){return params.birthday;};
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
	var _User={};
	_User.fromSqlRow = function(row){
		row.id = String(row.id);
		var user = getExisting(row.id);
		if(user)return user;
		user = new __User(row);
		set.add(user);
		return user;
	};
	_User.fromJSON= function(jObject){
		var user = getExiting(jObject.id);
		if(user)return user;
		user = new __User(jObject);
		set.add(user);
		return user;
	};
	return _User;
	function getEntryId(user){
		return user.getId();
	}
	function getExisting(id){
		return set.getById(id);
	}
})();