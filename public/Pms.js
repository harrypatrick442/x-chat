var Pms=  (function(){
	var _Pms= function(params){
		EventEnabledBuilder(this);
		var self = this;
		var rooms = params.rooms;
		var getUserMe = params.getUserMe;
		var getUserById= params.getUserById;
		var openHistory;
		var tabPortal;
		this.showPmWithUser = function(user){
			showPmWithUser(user);
			sendAddToOtherTabs(user);
		};
		this.closePmWithUser=function(user){
			closePmWithUser(user);
			sendRemoveToOtherTabs(user);
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
		this.videoOfferFail = function(msg){
			var room = rooms.getById(getRoomId(msg.userToId));
			if(!room){return;}
			room.videoOfferFail(msg);
		};
		this.videoOffer = function(msg){
			var room = rooms.getById(getRoomId(msg.userFromId));
			if(!room)return;
			msg.userFrom = getUserById(msg.userFromId);
			room.videoOffer(msg);
		};
		this.videoAcceptFail = function(msg){
			var room = rooms.getById(getRoomId(msg.userToId));
			if(!room)return;
			room.videoAcceptFail(msg);
		};
		this.videoAccept = function(msg){
			var room = rooms.getById(getRoomId(msg.userFromId));
			if(!room)return;
			room.videoAccept(msg.accept);
		};
		this.videoIceCandidate = function(msg){
			console.log('video ice candidate');
			console.log(msg);
			var room = rooms.getById(getRoomId(msg.userFromId));
			console.log('roomId is: ');
			console.log(getRoomId(msg.userFromId));
			console.log(room);
			if(!room)return;
			console.log('video ice candidate b');
			room.videoIceCandidate(msg.candidate);
		};
		this.load = function(userMeId){
			openHistory = new PmsOpenHistory({userMeId:userMeId});
			tabPortal = new TabPortal({id:'PmsMenu_'+userMeId});
			tabPortal.addEventListener('message', messageFromAnotherTab);
			var userTos = openHistory.getUsers();
			each(userTos, dispatchAddClosed);
		};
		rooms.addEventListener('showpm', showPm);
		rooms.addEventListener('sendpm', function(e){ return self.dispatchEvent(e);});
		rooms.addEventListener('getpms', function(e){ return self.dispatchEvent(e);});
		rooms.addEventListener('createdroom', createdRoom);
		rooms.addEventListener('destroyedroom', destroyedRoom);
		function showPmWithUser(user){
			var roomId = getRoomId(user.getId());
			rooms.showRoom({id:roomId, name:'PM with '+user.getUsername(), isPm:true, userTo:user});
			dispatchShowingPm(user);
		}
		function closePmWithUser(user){
			openHistory.remove(user);
			var roomId = getRoomId(user.getId());
			var room = rooms.getById(roomId);
			if(!room) return;
			room.close();
		}
		function messageFromAnotherTab(e){
			var message = e.message;
			console.log(e);
			switch(message.type){
				case 'add':
					addFromAnotherTab(User.fromJSON(message.userTo));
				break;
				case 'remove':
					removeFromAnotherTab(User.fromJSON(message.userTo));
				break;
			}
			
		}
		function addFromAnotherTab(userTo){
			showPmWithUser(userTo);
		}
		function removeFromAnotherTab(userTo){
			closePmWithUser(userTo);
		}
		function sendAddToOtherTabs(user){
			if(tabPortal)
				tabPortal.sendMessage({type:'add', userTo: user.toJSON()});
		}
		function sendRemoveToOtherTabs(user){
			if(tabPortal)
				tabPortal.sendMessage({type:'remove', userTo: user.toJSON()});
		}
		function showPm(e){
			console.log('called');
			self.showPmWithUser(e.user);
		}
		function getRoomId(userId){
			return 'pm_'+String(userId);
		}
		function notify(msg){
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
			openHistory.remove(userTo);
			sendRemoveToOtherTabs(userTo);//The other tabs will echo back but this time closePmWithUser will exit when the room is not returned from rooms.getById() call...
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