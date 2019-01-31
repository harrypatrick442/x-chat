exports.User = (function(){
	var EventEnabledBuilder = require('./EventEnabledBuilder').EventEnabledBuilder;
	var Mysockets = require('./Mysockets').Mysockets;
	var Set = require('./Set').Set;
	var set = new Set({getEntryId:getEntryId});
	var _User = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var mysockets = new Mysockets();
		var roomsSet = new Set({getEntryId:getEntryId});
		this.getId = function(){return params.id;};
		this.getUsername = function(){return params.username;};
		this.getEmail = function(){return params.email;};
		this.isGuest= function(){return params.isGuest;};
		this.getGender = function(){return params.gender;};
		this.getBirthday = function(){return params.birthday;};
		this.toJSON = function(){return params;};
		var session;
		this.getSession = function(){return session;};
		this.setSession=function(value){session = value;};
		this.joinedRoom = function(room){
			roomsSet.add(room);
			room.addEventListener('dispose', roomDisposed);
		};
		this.leftRoom = function(room){
			roomsSet.remove(room);
			room.removeEventListener('dispose', roomDisposed);
		};
		this.dispose = function(){
			mysockets.closeAll();
			dispose();
		};
		this.getRoomIdsIsIn= function(){
			return roomsSet.getEntryIds();
		};
		mysockets.addEventListener('allclosed', dispose);
		this.addMysocket = mysockets.add;
		this.sendMessage = mysockets.sendMessage;
		function dispose(){
			dispatchDispose();
		}
		function roomDisposed(){
			roomsSet.remove(room);
		}
		function dispatchDispose(){
			self.dispatchEvent({type:'dispose', user:self});
		}
		function getEntryId(room){
			return room.getId();
		}
	};
	_User.fromSqlRow = function(row){
		row.id = String(row.id);
		var user = getExisting(row.id);
		if(user)return user;
		return new _User(row);
	};
	_User.fromJSON= function(jObject){
		var user = getExiting(jObject.id);
		if(user)return user;
		return new _User(jObject);
	};
	return _User;
	function getEntryId(user){
		return user.getId();
	}
	function getExisting(id){
		return set.getById(id);
	}
})();