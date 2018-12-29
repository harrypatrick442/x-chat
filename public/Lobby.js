var Lobby = new (function(){
	var _Lobby = function(){
		var self = this;
		const url = '/servlet';
		var users = new Users();
		var rooms = new Rooms();
		var pmsMenu = new PmsMenu();
		var buttonUsers = new Button({classNames:['button-users']});
		var ui = new UI({rooms:rooms, users:users, buttonUsers:buttonUsers, pmsMenu:pmsMenu});
		var mysocket = new MySocket({url:'', urlWebsocket:getWebsocketUrl('endpoint')});
		mysocket.addEventListener('onmessage', onMessage);
		mysocket.addEventListener('onopen', onOpen);
		mysocket.send({type:'test'});
		buttonUsers.addEventListener('click', onClickButtonUsers);
		this.getElement = ui.getElement;
		function onOpen(){ }
		function onMessage(e){
			var msg = e.msg;
			switch(msg.type){
				case 'test':
					console.log(msg);
				break;
				case 'users':
					users.update(msg.users);
			}
		}
		function onClickButtonUsers(){
			ui.showUsers();
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