var Lobby = new (function(){
	var _Lobby = function(){
		var self = this;
		var sessionId;
		var userMe;
		const url = '/servlet';
		var users = new Users();
		var usersMenues = new UsersMenues();
		var rooms = new Rooms({getUserMe:getUserMe});
		var pmsMenu = new PmsMenu();
		var buttonUsers = new Button({classNames:['button-users']});
		var ui = new UI({rooms:rooms, buttonUsers:buttonUsers, pmsMenu:pmsMenu, usersMenues:usersMenues});
		var mysocket = new MySocket({url:'', urlWebsocket:getWebsocketUrl('endpoint')});
		mysocket.addEventListener('onmessage', onMessage);
		mysocket.addEventListener('onopen', onOpen);
		mysocket.send({type:'test'});
		buttonUsers.addEventListener('click', onClickButtonUsers);
		rooms.addEventListener('sendmessage', sendMessage);
		rooms.addEventListener('getmessages', getMessages);
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
				case 'message':
					rooms.incomingMessage(msg);
					break;
				case 'messages':
					rooms.incomingMessages(msg);
			}
		}
		function onClickButtonUsers(){
			ui.showUsers();
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
	};
	function UI(params){
		var rooms = params.rooms;
		var pmsMenu = params.pmsMenu;
		var buttonUsers = params.buttonUsers;
		var usersMenues = params.usersMenues;
		var element = E.DIV();
		element.classList.add('lobby');
		var right = E.DIV();
		right.classList.add('right');
		element.appendChild(usersMenues.getElement());
		element.appendChild(right);
		right.appendChild(pmsMenu.getElement());
		right.appendChild(rooms.getElement());
		element.classList.add('lobby');
		this.getElement = function(){return element;};
		this.showUsersMenues= function(){ usersMenues.show(); };
	}
	return _Lobby;
})();