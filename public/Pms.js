var Pms=  (function(){
	var _Pms= function(params){
		EventEnabledBuilder(this);
		var self = this;
		var rooms = params.rooms;
		var getUserMe = params.getUserMe;
		var openHistory;
		this.showPmWithUser = function(user){
			var roomId = getRoomId(user.getId());
			rooms.showRoom({id:roomId, name:'PM with '+user.getUsername(), isPm:true, userTo:user});
			dispatchShowingPm(user);
		};
		this.closePmWithUser=function(user){
			openHistory.remove(user);
			var roomId = getRoomId(user.getId());
			var room = rooms.getById(roomId);
			if(!room) return;
			room.close();
		};
		this.incomingMessage = function(msg){
			var roomId = getRoomId(msg.userId);
			var room = rooms.getById(roomId);
			if(!room){notify(msg);return;}
			room.incomingMessage(msg.message);
		};
		this.incomingMessages = function(msg){
			var room = rooms.getById(getRoomId(msg.userId));
			if(!room){notify(msg);return;}
			room.incomingMessages(msg.messages);
		};
		this.load = function(userMeId){
			openHistory = new PmsOpenHistory({userMeId:userMeId});
			var userTos = openHistory.getUsers();
			each(userTos, dispatchAddClosed);
		};
		rooms.addEventListener('showpm', showPm);
		rooms.addEventListener('sendpm', e=>self.dispatchEvent(e));
		rooms.addEventListener('getpms', e=>self.dispatchEvent(e));
		rooms.addEventListener('createdroom', createdRoom);
		rooms.addEventListener('destroyedroom', destroyedRoom);
		
		function showPm(e){
			console.log('called');
			self.showPmWithUser(e.user);
		}
		function getRoomId(userId){
			return 'pm_'+String(userId);
		}
		function notify(msg){
			console.log(msg);
			dispatchAddNotification(Notification.pmNotificationFromJSON(msg.message));
		}
		function dispatchAddNotification(notification){
			self.dispatchEvent({type:'addnotification', notification:notification});
		}
		function getEntryId(room){
			return room.getId();
		}
		function createdRoom(e){
			var room = e.room;
			if(!room.isPm())return;
			var userTo = room.getUserTo();
			if(!userTo)return;
			dispatchAdd(userTo);
			openHistory.add(userTo);
		}
		function dispatchShowingPm(user){
			self.dispatchEvent({type:'showingpm', user:user});
		}
		function destroyedRoom(e){
			var room = e.room;
			if(!room.isPm())return;
			var userTo = room.getUserTo();
			if(!userTo)return;
			dispatchRemove(userTo);
		}
		function dispatchAdd(userTo){
			self.dispatchEvent({type:'add', userTo:userTo});
		}
		function dispatchAddClosed(userTo){
			self.dispatchEvent({type:'addclosed', userTo:userTo});
		}
		function dispatchRemove(userTo){
			self.dispatchEvent({type:'remove', userTo:userTo});
		}
	};
	return _Pms;
})();