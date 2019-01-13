exports.handler = new (function(){
		var lobby = new (require('./Lobby').Lobby)();
		var Message = require('./Message').Message;
		var sessions = lobby.getSessions();
		this.process = function(req, mysocket, callback){
			var res = {};
			try{
				console.log(req);
				switch(req.type){
					case 'test':
					console.log('was test');
						callback(test(req));
					break;
					case 'register':
						lobby.register(req, mysocket, callback);
						break;
					case 'authenticate':
						lobby.authenticate(req, mysocket, callback);
					break;
					case 'rooms_get':
						lobby.getRooms().getInfos(function(infos){
							callback({type:'rooms', rooms:infos});
						});
					break;
					case 'room_join':
						var room = getRoom(req);
						var user = getUser(req);
						if(room.isPm()&&!room.userAllowed(user))return;
						room.join(user);
					break;
					case 'room_message_send':
						var room = getRoom(req);
						if(room.isPm()&&!room.userAllowed(getUser(req)))return;
						room.sendMessage(Message.fromRequest(req, getUser(req)));
					break;
					case 'room_messages_get':
						var room = getRoom(req);
						if(room.isPm()&&!room.userAllowed(getUser(req)))return;
						room.getMessages(function(messages){
							callback({type:'messages', roomId:room.getId(), messages:messages.toJSON()});
						});	
					break;
					case 'room_users_get':
						callback({type:'users', users:getRoom(req).getUsers()});
					break;
				}
			}
			catch(ex){console.log(ex);}
			return JSON.stringify(res);
		};
		function getUser(req){return sessions.getById(req.sessionId).getUser();}
		function getRoom(req){return lobby.getRooms().getRoom(req.roomId);}
		function test(jObject){ return {type:'response',received:jObject};}
})();