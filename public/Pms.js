var Pms=  (function(){
	var _Pms= function(params){
		EventEnabledBuilder(this);
		var self = this;
		var rooms = params.rooms;
		var getUserMe = params.getUserMe;
		var collectionRoom = new Collection({getEntryId:getEntryId});
		this.showPmWithUser = function(user){
			var roomId = getRoomId(user.getId());
			rooms.showRoom({id:roomId, name:'PM with '+user.getUsername(), isPm:true, userTo:user});
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
		rooms.addEventListener('sendpm', e=>self.dispatchEvent(e));
		rooms.addEventListener('getpms', e=>self.dispatchEvent(e));
		rooms.addEventListener('createdroom', createdRoom);
		rooms.addEventListener('destroyedroom', destroyedRoom);
		function getRoomId(userId){
			return 'pm_'+String(userId);
		}
		function notify(msg){
			
		}
		function getEntryId(room){
			return room.getId();
		}
		function createdRoom(e){
			var room = e.room;
			if(!room.isPm())return;
			dispatchAdd(room);
		}
		function destroyedRoom(e){
			var room = e.room;
			if(!room.isPm())return;
			dispatchRemove(room);
		}
		function dispatchAdd(room){
			self.dispatchEvent({type:'add', room:room});
		}
		function dispatchRemove(room){
			self.dispatchEvent({type:'remove', room:room});
		}
	};
	return _Pms;
})();