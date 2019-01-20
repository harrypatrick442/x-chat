var Pms=  (function(){
	var _Pms= function(params){
		EventEnabledBuilder(this);
		var self = this;
		var rooms = params.rooms;
		var getUserMe = params.getUserMe;
		this.showPmWithUser = function(user){
			console.log(user.getId());
			var roomId = getRoomId(user.getId());
			console.log(roomId);
			rooms.showRoom({roomId:roomId, name:'PM with '+user.getUsername(), isPm:true, userTo:user});
		};
		this.incomingMessage = function(msg){
			var roomId = getRoomId(msg.userId);
			var room = rooms.getById(roomId);
			console.log(roomId);
			if(!room){notify(msg);return;}
			console.log(msg);
			room.incomingMessage(msg.message);
		};
		rooms.addEventListener('sendpm', e=>self.dispatchEvent(e));
		rooms.addEventListener('getpms', e=>self.dispatchEvent(e));
		function getRoomId(userId){
			return 'pm_'+String(userId);
		}
		function notify(msg){
			
		}
	};
	return _Pms;
})();