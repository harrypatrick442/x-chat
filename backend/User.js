exports.User = (function(){
	var EventEnabledBuilder = require('./EventEnabledBuilder').EventEnabledBuilder;
	var Set = require('./Set').Set;
	var _User = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var mysocket;
		var roomsSet = new Set({getEntryId:getEntryId});
		this.getId = function(){return params.id;};
		this.getUsername = function(){return params.username;};
		this.getEmail = function(){return params.email;};
		this.isGuest= function(){return params.isGuest;};
		this.getGender = function(){return params.gender;};
		this.getBirthday = function(){return params.birthday;};
		this.toJSON = function(){return params;};
		this.joinedRoom = function(room){
			roomsSet.add(room);
			room.addEventListener('dispose', roomDisposed);
		};
		this.leftRoom = function(room){
			roomsSet.remove(room);
			room.removeEventListener('dispose', roomDisposed);
		};
		this.dispose = function(){
			dispatchDispose();
		};
		this.sendMessage = function(msg){
			mysocket.sendMessage(msg);
		};
		this.setMysocket =function(mysocketIn){
			mysocket = mysocketIn;
			mysocket.addEventListener('close', self.dispose);
		};
		this.getRoomIdsIsIn= function(){
			return roomsSet.getEntryIds();
		};
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
		return new _User(row);
	};
	_User.fromJSON= function(jObject){
		return new _User(jObject);
	};
	return _User;
})();