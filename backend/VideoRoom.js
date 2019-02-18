var VideoRoom = (function(){
	var _VideoRoom = function(){
		EventEnabledBuilder(this);
		var self = this;
		var getUserMe = params.getUserMe;
		var getUserById = params.getUserById;
		var getNDevice = params.getNDevice;
		var name = params.name;
		var id = params.id;
		var ignoreManager = params.ignoreManager;
		var clickMenuUser =params.clickMenuUser;
		var users = new Users({getUserById:getUserById});
		var usersMenu = new UsersMenu({name:params.isPm?'PM with '+params.userTo.getUsername():name+' Users', users:users, id:id, ignoreManager:ignoreManager, clickMenu:clickMenuUser, getUserMe:getUserMe});
		var buttonExit = new Button({className:'button-exit'});
		var buttonClose = new Button({className:'button-close'});
		var ui = new UI({buttonSend:buttonSend, buttonEmoticons:buttonEmoticons, buttonExit:buttonExit, buttonClose:buttonClose, spinner:spinner});
		users.addEventListener('missingusers',self.dispatchEvent);
		this.getId = function(){return params.id;};
		this.getName = function(){return params.name;};
		this.getUsersMenu = function(){return usersMenu;};
		this.close = close;
		this.getUsers = function(){return users;};
		this.getElement = ui.getElement;
		this.setVisible = function(value){
			var visible = ui.getVisible();
			if(!visible&&value)
				usersMenu.show();
			else
				if(visible&&!value)
					usersMenu.hide();
			ui.setVisible(value);
			if(value)
				new Task(ui.scrollFeedToBottom).run();
		};
		this.getVisible = ui.getVisible;
		
	};
	return _VideoRoom;
	function UI(params){){
		EventEnabledBuilder(this);
		var self = this;
		var visible = false;
		var buttonSend = params.buttonSend;
		var buttonExit = params.buttonExit;
		var buttonEmoticons = params.buttonEmoticons;
		var buttonClose = params.buttonClose;
		var spinner = params.spinner;
		var element = E.DIV();
		element.classList.add('room');
		var top = E.DIV();
		top.classList.add('top');
		var bottom = E.DIV();
		bottom.classList.add('bottom');
		var feed = E.DIV();
		feed.classList.add('feed');
		var menu = E.DIV();
		menu.classList.add('menu');
		var text = E.TEXT();
		text.classList.add('text');
		element.appendChild(top);
		element.appendChild(bottom);
		element.appendChild(spinner.getElement());
	    top.appendChild(feed);
		bottom.appendChild(text);
		bottom.appendChild(menu);
		menu.appendChild(buttonExit.getElement());
		menu.appendChild(buttonClose.getElement());
		this.getElement = function(){
			return element;
		};
		this.setVisible = function(value){
			visible = value;
			element.style.display=value?'block':'none';
		};
		this.getVisible = function(){return visible;};
	}
})();