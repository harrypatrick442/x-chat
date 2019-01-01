exports.handler = new (function(){
		var lobby = new (require('./Lobby').Lobby)();
		console.log(require('./Lobby'));
		this.process = function(req, callback){
			var res = {};
			try{
				var sessions = lobby.getSessions();
				console.log('doing');
				console.log(req);
				switch(req.type){
					case 'test':
					console.log('was test');
						callback(test(req));
					break;
					case 'register':
						lobby.register(req, callback);
						break;
					case 'authenticate':
						lobby.authenticate(req, callback);
					break;
					case 'rooms_get':
						rooms:lobby.getRooms().getInfos(function(infos){
							callback({type:'rooms', rooms:infos});
						});
					break;
					case 'room_join':
						var room = getRoom(req);
						var user = getUser(req);
						if(room.isPm()&&!room.userAllowed(user))return;
						room.join(user);
						callback({});
					break;
					case 'room_send_message':
						var room = getRoom(req);
						if(room.isPm()&&!room.userAllowed(getUser(req)))return;
						room.sendMessage(req.message);
					break;
					case 'room_get_users':
						callback({type:'users', users:getRoom(req).getUsers()});
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