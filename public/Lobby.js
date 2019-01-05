var Lobby = new (function(){
	var _Lobby = function(){
		var self = this;
		var sessionId;
		const url = '/servlet';
		var users = new Users();
		var rooms = new Rooms({getUserMe:getUserMe});
		var userMe;
		var pmsMenu = new PmsMenu();
		var buttonUsers = new Button({classNames:['button-users']});
		var ui = new UI({rooms:rooms, users:users, buttonUsers:buttonUsers, pmsMenu:pmsMenu});
		var mysocket = new MySocket({url:'', urlWebsocket:getWebsocketUrl('endpoint')});
		mysocket.addEventListener('onmessage', onMessage);
		mysocket.addEventListener('onopen', onOpen);
		mysocket.send({type:'test'});
		buttonUsers.addEventListener('click', onClickButtonUsers);
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
		function getUserMe(){
			return userMe;
		}
	};
	function UI(params){
		var users = params.users;
		var rooms = params.rooms;
		var pmsMenu = params.pmsMenu;
		var buttonUsers = params.buttonUsers;
		var element = E.DIV();
		element.appendChild(users.getElement());
		element.appendChild(pmsMenu.getElement());
		element.appendChild(rooms.getElement());
		element.classList.add('lobby');
		this.getElement = function(){return element;};
		this.showUsers= function(){ users.show(); };
	}
	return _Lobby;
})();