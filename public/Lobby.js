var Lobby = (function(){
	var _Lobby = function(){
		var self = this;
		var sessionId;
		var userMe;
		const url = '/servlet';
		var users = new Users();
		var usersMenues = new UsersMenues();
		var rooms = new Rooms({getUserMe:getUserMe});
		var pmsMenu = new PmsMenu();
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
		rooms.addEventListener('createdroom', createdRoom);
		rooms.addEventListener('destroyedroom', destroyedRoom);
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
				case 'users':
					users.update(msg.users);
					break;
				case 'authenticate':
				console.log('authenticate');
					authenticateResponse(msg);
					break;
				case 'register':
					registerResponse(msg);
					break;
				case 'rooms':
					rooms.set(msg.rooms);
					break;
				case 'room_join':
					var user = users.getById(msg.userId);
					if(!user)return;
					rooms.join(msg, user);
					break;
				case 'message':
					rooms.incomingMessage(msg);
					break;
				case 'messages':
					rooms.incomingMessages(msg);
			}
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
		function authenticateResponse(msg){
			authenticateRegisterResponse(msg);
		}
		function registerResponse(msg){
			authenticateRegisterResponse(msg);
		}
		function authenticateRegisterResponse(msg){
			if(msg.successful){
				sessionId = msg.sessionId;
				console.log(msg.user);
				userMe = User.fromJSON(msg.user);
				users.add(userMe);
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
			usersMenues.add(e.room.getUsersMenu());
			sendJoinRoom(e.room.getId());
		}
		function sendJoinRoom(roomId){
			console.log('sendJoinRoom');
			mysocket.send({type:'room_join'  ,roomId:roomId, sessionId:sessionId});
		}
		function destroyedRoom(e){
			usersMenues.remove(e.room.getUsersMenu());
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