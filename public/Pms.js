var Pms=  (function(){
	var _Pms= function(){
		EventEnabledBuilder(this);
		var self = this;
		this.showPmWithUser = function(user){
			var roomId = getRoomId(user.getId());
			rooms.showRoom({roomId:roomId, name:'PM with '+user.getUsername(), isPm:true});
		};
		this.incomingMessage = function(msg){
			var roomId = getRoomId(msg.fromUserId);
			var room = getRoom(roomId);
			if(!room){notify(msg);return;}
			room.incomingMessage(msg.message);
		};
		function getRoomId(userId){
			return 'pm_'+String(userId);
		}
		function notify(msg){
			
		}
	};
	return _Pms;
})();