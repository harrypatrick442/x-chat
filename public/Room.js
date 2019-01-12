var Room = new (function(){
	var _Room = function(params){
		console.log(params);
		EventEnabledBuilder(this);
		var self = this;
		var getUserMe = params.getUserMe;
		var emoticonsParser = params.emoticonsParser;
		var name = params.name;
		var id = params.id;
		var usersMenu = new UsersMenu({});
		var buttonSend = new Button({className:'button-send', text:'Send'});
		var buttonEmoticons = new Button({className:'button-emoticons'});
		var users = new Users();
		var ui = new UI({buttonSend:buttonSend, buttonEmoticons:buttonEmoticons});
		var messages = new Messages({getUserId:getUserIdMe, element:ui.getFeed()});
		this.getId = function(){return params.id;};
		this.getName = function(){return params.name;};
		this.getUsersMenu = function(){return usersMenu;};
		this.incomingMessage = function(jObjectMessage){
			var scroll = ui.feedIsAtBottom();
			jObjectMessage.emoticonsParser=emoticonsParser;
			messages.addReceived(Message.fromJSON(jObjectMessage));
			if(scroll)
				ui.scrollFeedToBottom();
		};
		this.incomingMessages=function(jArrayMessages){
			var scroll = ui.feedIsAtBottom();
			each(jArrayMessages, function(jObjectMessage){
				jObjectMessage.emoticonsParser=emoticonsParser;
				messages.addReceived(Message.fromJSON(jObjectMessage));
			});
			if(scroll)
				ui.scrollFeedToBottom();
		};
		this.dispose = function(){
			messages.dispose();
		};
		this.getElement = ui.getElement;
		this.setVisible = ui.setVisible;
		
		buttonSend.addEventListener('click', sendMessage);
		buttonEmoticons.addEventListener('click', dispatchShowEmoticons);
		ui.addEventListener('keypress',keyPressed);
		new Task(load).run();
		function load(){
			getMessagesFromServer();
		}
		function getMessagesFromServer(){
			self.dispatchEvent({type:'getmessages', roomId:id});
		}
		function sendMessage(){
			var text = ui.getTextValue();
			if(text=='')return;
			var userMe = getUserMe();
			console.log(userMe);
			var messageSending = Message.fromTypedString({str:text, userId:userMe.getId(), username:userMe.getUsername(), uniqueId:messages.nextUniqueId() , emoticonsParser:emoticonsParser});
			dispatchSendMessage(messageSending);
			messages.addSending(messageSending);
			ui.clearText();
			ui.scrollFeedToBottom();
		}
		function dispatchShowEmoticons(){
			self.dispatchEvent({type:'showemoticons',picked:callbackPicked});
		}
		function dispatchSendMessage(message){
			self.dispatchEvent({type:'sendmessage',message:message, roomId:id});
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
		var buttonSend = params.buttonSend;
		var buttonEmoticons = params.buttonEmoticons;
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
		text.addEventListener('keypress',dispatchKeyPress);
		this.getElement = function(){
			return element;
		};
		this.getFeed= function(){return feed;};
		this.setVisible = function(value){
			element.style.display=value?'block':'none';
		};
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