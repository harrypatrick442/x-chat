exports.handler = new (function(){
		var lobby =require('./lobby').lobby;
		var Message = require('./Message');
		var sessions = lobby.getSessions();
		this.process = function(req, mysocket, callback){
			var res = {};
			console.log(req.type);
			try{
				switch(req.type){
					case 'register':
						lobby.register(req, mysocket, callback);
						break;
					case 'authenticate':
						lobby.authenticate(req, mysocket, callback);
					break;
					case 'automatic_authenticate':
						lobby.automaticAuthenticate(req, mysocket, callback);
					break;
					case 'rooms_get':
						lobby.getRooms().getInfos(function(infos){
							callback({type:'rooms', rooms:infos});
						});
					break;
					case 'rooms_in_changed':
						var user = getUser(req);
						if(!user)return;
						var device = user.getDevices().getById(mysocket.getId());
						if(!device)return;
						lobby.getRooms().setRoomsDeviceIsIn(device, req.roomIds);
						break;
					case 'room_message_send':
						var room = getRoom(req);
						if(room.isPm()&&!room.userAllowed(getUser(req)))return;
						room.sendMessage(Message.fromRequest(req, getUser(req)));
					break;
					case 'room_pm_send':
						var userMe = getUser(req);
						if(!userMe)return;
						lobby.getPms().sendMessage(userMe.getId(), req.userToId, Message.fromRequest(req, getUser(req)));
					break;
					case 'room_messages_get':
						var room = getRoom(req);
						if(room.isPm()&&!room.userAllowed(getUser(req)))return;
						room.getMessages(function(messages){
							callback({type:'messages', roomId:room.getId(), messages:messages.toJSON()});
						});	
					break;
					case 'pm_messages_get':
						var userMe = getUser(req);
						if(!userMe)return;
						lobby.getPms().getMessages(userMe.getId(), req.userToId, function(messages){
							callback({type:'pm_messages', userId:req.userToId, messages:messages.select(x=>x.toJSON()).toList()});
						});
					break;
					case 'pm_notifications_get':
						var userMe = getUser(req);
						if(!userMe)return;
						lobby.getNotifications().getPmNotificationsForUser(userMe.getId(), req.userToId, function(pmNotifications){
							callback({type:'pm_notifications_get', pmNotifications:pmNotifications.select(x=>x.toJSON()).toList()});
							
						});
					break;
					case 'pm_video_offer':
						lobby.pmVideoOffer(req, callback);
					break;
					case 'pm_video_accept':
						lobby.pmVideoAccept(req, callback);
					break;
					case 'pm_video_ice_candidate':
						lobby.pmVideoIceCandidate(req, callback);
					break;
					case 'room_join':
						var user = getUser(req);
						if(!user)return;
						var room = getRoom(req);
						if(!room)return;
						var device = user.getDevices().getById(mysocket.getId());
						if(!device)return;
						room.join(device);
					break;
					case 'room_leave':
						var user = getUser(req);
						if(!user)return;
						var room = getRoom(req);
						if(!room)return;
						var device = user.getDevices().getById(mysocket.getId());
						if(!device)return;
						room.leave(device);
					break;
					case 'room_users_get':
						callback({type:'users', users:getRoom(req).getUsers()});
					break;
					case 'seen_notifications':
						var user = getUser(req);
						if(!user)return;
						lobby.getNotifications().setPmNotificationsSeen(user, req.seenPmNotificationUserIds);
					break;
					case 'sign_out':
						lobby.signOut(req, mysocket, callback);
					break;
					case 'debug':
						console.log(req.str);
					break;
				}
			}
			catch(ex){console.log(ex);}
			return JSON.stringify(res);
		};
		this.setImageForUser = lobby.setImageForUser;
		function getUser(req){
			var session = sessions.getById(req.sessionId);
			if(!session)return;
			return session.getUser();
		}
		function getRoom(req){return lobby.getRooms().getRoom(req.roomId);}
})();