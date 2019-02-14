var Room = new (function(){
	var _Room = function(params){
		console.log(params);
		EventEnabledBuilder(this);
		const MAX_N_MESSAGES=100;
		var self = this;
		var getUserMe = params.getUserMe;
		var getUserById = params.getUserById;
		var getNDevice = params.getNDevice;
		var emoticonsParser = params.emoticonsParser;
		var name = params.name;
		var id = params.id;
		var ignoreManager = params.ignoreManager;
		var clickMenuUser =params.clickMenuUser;
		var users = new Users({getUserById:getUserById});
		var usersMenu = new UsersMenu({name:params.isPm?'PM with '+params.userTo.getUsername():name+' Users', users:users, id:id, ignoreManager:ignoreManager, clickMenu:clickMenuUser, getUserMe:getUserMe});
		var buttonSend = new Button({className:'button-send', text:'Send'});
		var buttonEmoticons = new Button({className:'button-emoticons'});
		var buttonExit = new Button({className:'button-exit'});
		var buttonClose = new Button({className:'button-close'});
		var ui = new UI({buttonSend:buttonSend, buttonEmoticons:buttonEmoticons, buttonExit:buttonExit, buttonClose:buttonClose});
		var messages = new Messages({getUserId:getUserIdMe, element:ui.getFeed(), maxNMessages:MAX_N_MESSAGES, ignoreManager:ignoreManager, getNDevice:getNDevice});
		users.addEventListener('missingusers',self.dispatchEvent);
		this.getId = function(){return params.id;};
		this.getName = function(){return params.name;};
		this.getUsersMenu = function(){return usersMenu;};
		this.getUserTo = function(){return params.userTo;};
		this.isPm=function(){return params.isPm;};
		this.incomingMessage = function(jObjectMessage){
			var scroll = ui.feedIsAtBottom();
			incomingMessage(jObjectMessage);
			if(scroll)
				ui.scrollFeedToBottom();
		};
		this.incomingMessages=function(jArrayMessages){
			var scroll = ui.feedIsAtBottom();
			each(jArrayMessages, function(jObjectMessage){
				incomingMessage(jObjectMessage);
			});
			if(scroll)
				ui.scrollFeedToBottom();
		};
		messages.addEventListener('showpm', function(e){self.dispatchEvent(e);});
		function incomingMessage(jObjectMessage){
			jObjectMessage.emoticonsParser=emoticonsParser;
			jObjectMessage.clickMenuUser = clickMenuUser;
			jObjectMessage.ignoreManager = ignoreManager;
			jObjectMessage.getUserMe=getUserMe;
			messages.addReceived(Message.fromJSON(jObjectMessage));
		}
		this.join=function(user){
			if(users.contains(user))return;
			users.add(user);
		};
		this.leave = function(user){
			if(!users.contains(user))return;
			users.remove(user);
		};
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
		buttonSend.addEventListener('click', sendMessage);
		buttonEmoticons.addEventListener('click', dispatchShowEmoticons);
		buttonClose.addEventListener('click', close);
		buttonExit.addEventListener('click', exit);
		ui.addEventListener('keypress',keyPressed);
		new Task(load).run();
		function load(){
			dipatchGetMessages();
			dispatchGetUserIds();
			if(self.isPm()){
				users.add(params.userTo);
				users.add(getUserMe());
			}
		}
		function dispose(){
			messages.dispose();
		}
		function exit(){
			dispatchHide();
		}
		function close(){
			dispose();
			dispatchDispose();
		}
		function dispatchHide(){
			self.dispatchEvent({type:'hide', room:self});
		}
		function dipatchGetMessages(){
			self.dispatchEvent(!self.isPm()?{type:'getmessages', roomId:id}:{type:'getpms', userToId:self.getUserTo().getId()});
		}
		function dispatchGetUserIds(){
			self.dispatchEvent({type:'getuserids', roomId:id});
		}
		function sendMessage(){
			var text = ui.getTextValue();
			if(text=='')return;
			var userMe = getUserMe();
			var messageSending = Message.fromTypedString({str:text, userId:userMe.getId(), username:userMe.getUsername(), uniqueId:messages.nextUniqueId() 
			, emoticonsParser:emoticonsParser, pending:true, clickMenuUser:clickMenuUser, getUserMe:getUserMe});
			console.log(messageSending);
			dispatchSendMessage(messageSending);
			messages.addSending(messageSending);
			ui.clearText();
			ui.scrollFeedToBottom();
		}
		function dispatchShowEmoticons(){
			self.dispatchEvent({type:'showemoticons',picked:callbackPicked});
		}
		function dispatchSendMessage(message){
			self.dispatchEvent(!self.isPm()?{type:'sendmessage',message:message, roomId:id}:{type:'sendpm', userToId:self.getUserTo().getId(), message:message});
		}
		function dispatchDispose(){
			self.dispatchEvent({type:'dispose', room:self});
		}
		function getUserIdMe(){
			var user = getUserMe();
			if(user)
				return user.getId();
		}
		function callbackPicked(emoticonInfo){
			ui.appendToText(emoticonInfo.getStringRepresentation());
		}
		function keyPressed(e){
			var keyCode = e.keyCode;
			if (keyCode == '13'){
				sendMessage();
			  return false;
			}
		}
		
	};
	return _Room;
	function UI(params){
		EventEnabledBuilder(this);
		var self = this;
		var visible = false;
		var buttonSend = params.buttonSend;
		var buttonExit = params.buttonExit;
		var buttonEmoticons = params.buttonEmoticons;
		var buttonClose = params.buttonClose;
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
	    top.appendChild(feed);
		bottom.appendChild(text);
		bottom.appendChild(menu);
		menu.appendChild(buttonEmoticons.getElement());
		menu.appendChild(buttonSend.getElement());
		menu.appendChild(buttonExit.getElement());
		menu.appendChild(buttonClose.getElement());
		text.addEventListener('keypress',dispatchKeyPress);
		this.getElement = function(){
			return element;
		};
		this.getFeed= function(){return feed;};
		this.setVisible = function(value){
			visible = value;
			element.style.display=value?'block':'none';
		};
		this.getVisible = function(){return visible;};
		this.getTextValue= function(){return text.value;};
		this.addMessage = function(message){
			feed.appendChild(message.getElement());
		};
		this.removeMessage = function(message){
			feed.removeChild(message.getElement());
		};
		this.appendToText = function(str){
			if(str)
				text.value+=str;
		};
	    this.clearText = function(){text.value='';};
		this.scrollFeedToBottom = function(){
			feed.scrollTop = feed.scrollHeight;
		};
		this.feedIsAtBottom = function(){
			return feed.scrollTop >= (feed.scrollHeight - feed.offsetHeight)-10;
		};
		
		function dispatchKeyPress(e){
			if (!e) e = window.event;
			self.dispatchEvent({type:'keypress', keyCode:e.keyCode||e.which});
		}
	}
})();