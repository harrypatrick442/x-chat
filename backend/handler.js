exports.handler = new (function(){
		var lobby = new (require('./Lobby').Lobby)();
		console.log(require('./Lobby'));
		this.process = function(req){
			var res = {};
			try{
				var sessions = lobby.getSessions();
				console.log('doing');
				console.log(req);
				switch(req.type){
					case 'test':
					console.log('was test');
						res = test(req);
					break;
					case 'register':
						res = lobby.register(req);
						break;
					case 'authenticate':
						res = lobby.authenticate(req);
					break;
					case 'room_join':
						var room = getRoom(req);
						var user = getUser(req);
						if(room.isPm()&&!room.userAllowed(user))return;
						room.join(user);
					break;
					case 'room_send_message':
						var room = getRoom(req);
						if(room.isPm()&&!room.userAllowed(getUser(req)))return;
						room.sendMessage(req.message);
					break;
					case 'room_get_users':
						res = getRoom(req).getUsers();
					break;
				}
			}
			catch(ex){console.log(ex);}
			return JSON.stringify(res);
		};
		function getUser(req){return sessions.getById(req.sessionId).getUser();}
		function getRoom(){return lobby.getRooms().getRoom(req.roomId);}
		function test(jObject){ return {type:'response',received:jObject};}
})();