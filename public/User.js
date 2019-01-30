var User = (function(){//Two kinds of users information from server. 1) a comprehensive list of all users and what room they are in.
//This is periodically sent out. 2) a single message to a room when a user enters.
//problem is no way to know for sure if a users message has been dropped.
//one solution is to retrieve a users list when mysocket opens again.
//better still it could be sent automatically upon reconnection.
//This could be a comprehensive dictionary for the entire site and mapping individual rooms.
//one issue is showing an entire user list for pms while at the same time showing which users are in a single room.
//however echat offer no improvement on this.
//single user entered user left mesage.
//this message could contain a list of ids only. and upon there being one missing, a request to server made for entire list.
//upon user joining a message is sent to lobby. jut like other rooms.

//single message with id when user leaves or joins any room.
//single mesage with all info when uer join lobby. this contains map of all rooms user is in.
//if us
	const TYPE = 'user';
	var set = new Set({getEntryId:getEntryId});
	function _User(params){
		EventEnabledBuilder(this);
		var referenceCounter = new ReferenceCounter();
		var self = this;
		this.getId = function(){return params.id;};
		this.getUsername = function(){return String(params.username);};
		this.getEmail = function(){return params.email;};
		this.isGuest= function(){return params.isGuest;};
		this.getGender = function(){return params.gender;};
		this.getBirthday = function(){return params.birthday;};
		this.toJSON = function(){return params;};
		this.left = function(){
			dispatchLeft();
		};
		function dispatchLeft(){
			self.dispatchEvent({type:'left', user:self});
		}
	};
	var ret={};
	ret.fromJSON = function(params){
		var user = getExisting(params.id);
		if(user) return user;
		user = new _User(params);
		set.add(user);
		return user;
	};
	ret.fromMessage = function(message){
		var user = getExisting(message.getUserId());
		if(user) return user;
		var user = new _User({id:message.getUserId(), username:message.getUsername()});
		set.add(user);
		return user;
	};
	ret.fromPmNotification = function(pmNotification){
		var user = getExisting(pmNotification.getId());
		if(user) return user;
		user = new _User({id:pmNotification.getId(), username:pmNotification.getUsername()});
		set.add(user);
		return user;
	};
	ret.TYPE=TYPE;
	return ret;
	function getEntryId(user){
		return user.getId();
	}
	function getExisting(id){
		return set.getById(id);
	}
})();