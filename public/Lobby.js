var Lobby = (function(){
	var _Lobby = function(){
		var self = this;
		var sessionId;
		var userMe;
		const url = '/servlet';
		var users = new Users({});
		var ignoreManager = new IgnoreManager({getUserById:getUserById});
		var usersMenu= new UsersMenu({users:users, id:'UsersMenuLobby', ignoreManager:ignoreManager, getUserMe:getUserMe});
		var missingUsersManager = new MissingUsersManager();
		var usersMenues = new UsersMenues({ignoreManager:ignoreManager});
		usersMenues.add(usersMenu);
	    var rooms = new Rooms({getUserMe:getUserMe, getUserById:getUserById, ignoreManager:ignoreManager});
		var pms = new Pms({room:rooms});
		var pmsMenu = new PmsMenu({pms:pms});
		var buttonUsers = new Button({toggle:true, classNames:['button-users'], classNameToggled:'button-users-hide'});
		var buttonPms = new Button({toggle:true, classNames:['button-pms'], classNameToggled:'button-pms-hide'});
		var ui = new UI({rooms:rooms, buttonUsers:buttonUsers, buttonPms:buttonPms, pmsMenu:pmsMenu, usersMenues:usersMenues});
		var mysocket = new MySocket({url:'', urlWebsocket:getWebsocketUrl('endpoint')});
		mysocket.addEventListener('onmessage', onMessage);
		mysocket.addEventListener('onopen', onOpen);
		mysocket.send({type:'test'});
		buttonPms.addEventListener('toggled', onToggleButtonPms);
		buttonUsers.addEventListener('toggled', onToggleButtonUsers);
		rooms.addEventListener('sendmessage', sendMessage);
		rooms.addEventListener('getmessages', getMessages);
		rooms.addEventListener('getuserids', getUserIds);
		rooms.addEventListener('createdroom', createdRoom);
		rooms.addEventListener('destroyedroom', destroyedRoom);
		rooms.addEventListener('roomsinchanged', callbackRoomsInChanged);
		this.getElement = ui.getElement;
		initialize();
		function onOpen(){ }
		function onMessage(e){
			var msg = e.msg;
			console.log(msg);
			switch(msg.type){
				case 'test':
					console.log(msg);
					break;
				case 'join':
					join(msg);
					break;
				case 'users':
					users.update(msg.users);//and the above carry with them the full user information. this isnt needed for leaving, hence userids is used. this also ensures other missed user leaves are accounted for. A missed user join will be accounted for when userids causes MissingUsersManager to get the missing information.
					break;
				case 'authenticate':
					authenticateResponse(msg);
					break;
				case 'register':
					registerResponse(msg);
					break;
				case 'rooms':
					rooms.set(msg.rooms);
					break;
				case 'room_userids':
					roomUserIds(msg);//sends a complete list of users who should be in the room. Ids only. it is expected the user can be acquired from the lobby, unless they are missing in which case the missingusersmanager handles that.
					break;
				case 'message':
					rooms.incomingMessage(msg);
					break;
				case 'messages':
					rooms.incomingMessages(msg);
					break;
				case 'userids':
					updateUserIdsLobby(msg.userIds);//is used for leave.
					break;
				case 'pm':
					pms.incomingMessage(msg);
					break;
			}
		}
		function roomUserIds(msg){
			var room = rooms.getById(msg.roomId);
			if(!room)return;
			roomUserIds_Join(room, msg.userIds);
			roomUserIds_Leave(room, msg.userIds);
		}
		function roomUserIds_Join(room, userIds){
			each(userIds, function(userId){
				var user = users.getById(userId);
				if(user)
					room.join(user);
				else
					missingUsersManager.get(userId);
			});
		}
		function roomUserIds_Leave(room, userIds){
			var usersToRemove = room.getUsers().getEntries().where(x=>userIds.indexOf(x.getId())<0).toList();
			console.log('n remove: ');
			console.log(usersToRemove.length);
			each(usersToRemove, function(userToRemove){
				console.log(userToRemove.getId());
				room.leave(userToRemove);
			});
		}
		function onToggleButtonUsers(e){
			usersMenues.setVisible(e.toggled);
		}
		function onToggleButtonPms(e){
			pmsMenu.setVisible(e.toggled);
		}
		function initialize(){
			Authenticate.acquire({callbackRegister:callbackRegister, callbackSignIn:callbackSignIn, callbackGuest:callbackGuest});
		}
		function callbackRegister(obj){
			obj.type='register';
			mysocket.send(obj);
		}
		function callbackSignIn(obj){
			obj.type='authenticate';
			mysocket.send(obj);
		}
		function callbackGuest(obj){
			obj.type='authenticate';
			obj.isGuest=true;	
			mysocket.send(obj);
		}
		function callbackRoomsInChanged(e){
			mysocket.send({type:'rooms_in_changed', sessionId:sessionId, roomIds:e.roomIds});
		}
		function authenticateResponse(msg){
			authenticateRegisterResponse(msg);
		}
		function registerResponse(msg){
			authenticateRegisterResponse(msg);
		}
		function updateUserIdsLobby(userIds){
		    userIds.where(x=>!users.containsId(x)).each(x=>missingUsersManager.get(x));
		    var toRemove = users.getIds().where(x=>userIds.indexOf(x)<0).each(function(userId){
				var user = users.getById(userId);
				if(user)user.dispose();
			});
		}
		function authenticateRegisterResponse(msg){
			if(msg.successful){
				sessionId = msg.sessionId;
				users.add(User.fromJSON(msg.user));
				userMe = users.getById(msg.user.id);
				msg.users.select(x=>User.fromJSON(x)).each(x=>users.add(x));
				Authenticate.hide();
				getRooms();
				return;
			}
			console.log(msg);
			Authenticate.error(msg.error);
		}
		function getRooms(){
			mysocket.send({type:'rooms_get', sessionId:sessionId});
		}
		function getMessages(e){
			mysocket.send({type:'room_messages_get', roomId:e.roomId, sessionId:sessionId});
		}
		function getUserIds(e){
			mysocket.send({type:'room_userids_get', roomId:e.roomId, sessionId:sessionId});
		}
		function getUserById(userId){
			return users.getById(userId);
		}
		function getUserMe(){
			return userMe;
		}
		function sendMessage(e){
			var jObject = e.message.toJSON();
			jObject.roomId = e.roomId;
			jObject.type='room_message_send';
			jObject.sessionId=sessionId;
			mysocket.send(jObject);
		}
		function createdRoom(e){
			var room = e.room;
			usersMenues.add(room.getUsersMenu());
			mysocket.send({type:'room_join', sessionId:sessionId, roomId:room.getId()});
			if(room.isPm()){
				pms.addRoom(room);
			}
		}
		function destroyedRoom(e){
			console.log('removing from user menues');
			usersMenues.remove(e.room.getUsersMenu());
			mysocket.send({type:'room_leave', sessionId:sessionId, roomId:e.room.getId()});
		}
		function join(msg){
			var user = User.fromJSON(msg.user);
			if(!users.contains(user))
				users.add(user);
			var userIds = msg.userIds;
			if(!userIds)return;
			updateUserIdsLobby(userIds);
		}
	};
	function UI(params){
		var rooms = params.rooms;
		var pmsMenu = params.pmsMenu;
		var buttonUsers = params.buttonUsers;
		var buttonPms = params.buttonPms;
		var divButtonShowHideWrapper = E.DIV();
		
		
		var usersMenues = params.usersMenues;
		var element = E.DIV();
		var right = E.DIV();
		var divButtonShowHideWrapper = E.DIV();
		element.classList.add('lobby');
		right.classList.add('right');
		divButtonShowHideWrapper.classList.add('button-show-hide-wrapper');
		var left = E.DIV();
		left.classList.add('left');
		element.appendChild(left);
		left.appendChild(usersMenues.getElement());
		element.appendChild(right);
		right.appendChild(pmsMenu.getElement());
		right.appendChild(divButtonShowHideWrapper);
		right.appendChild(rooms.getElement());
		divButtonShowHideWrapper.appendChild(buttonUsers.getElement());
		divButtonShowHideWrapper.appendChild(buttonPms.getElement());
		this.getElement = function(){return element;};
	}
	return _Lobby;
})();