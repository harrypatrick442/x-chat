exports.User = (function(){
	var EventEnabledBuilder = require('./EventEnabledBuilder').EventEnabledBuilder;
	var Collection = require('./../public/Collection').Collection;
	var _User = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var mysocket;
		var roomsCollection = new Collection({getEntryId:getEntryId});
		this.getId = function(){return params.id;};
		this.getUsername = function(){return params.username;};
		this.getEmail = function(){return params.email;};
		this.isGuest= function(){return params.isGuest;};
		this.getGender = function(){return params.gender;};
		this.getBirthday = function(){return params.birthday;};
		this.toJSON = function(){return params;};
		this.joinedRoom = function(room){
			roomsCollection.add(room);
			room.addEventListener('dispose', roomDisposed);
		};
		this.leftRoom = function(room){
			roomsCollection.remove(room);
			room.removeEventListener('dispose', roomDisposed);
		};
		function roomDisposed(){
			roomsCollection.remove(room);
		}
		this.dispose = function(){
			dispatchDispose();
		};
		this.sendMessage = function(msg){
			mysocket.send(msg);
		};
		this.setMysocket =function(mysocket){
			mysocket = mysocket;
		};
		function dispatchDispose(){
			self.dispatchEvent({type:'dispose', user:self});
		}
		function getEntryId(room){
			return room.getId();
		}
	};
	_User.fromSqlRow = function(row){
		return new _User(row);
	};
	_User.fromJSON= function(jObject){
		return new _User(jObject);
	};
	return _User;
})();