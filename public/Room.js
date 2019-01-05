var Room = new (function(){
	var _Room = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var getUserMe = params.getUserMe;
		var name = params.name;
		var id = params.id;
		var buttonSend = new Button({className:'button-send', text:'Send'});
		var buttonEmoticons = new Button({className:'button-emoticons'});
		var ui = new UI({buttonSend:buttonSend, buttonEmoticons:buttonEmoticons});
		var users = new Users();
		var messages = new Messages({getUserId:getUserIdMe, element:ui.getFeed()});
		this.getId = function(){return params.id;};
		this.getName = function(){return params.name;};
		this.incomingMessage = function(jObjectMessage){
			messages.addReceived(Messages.fromJSON(jObjectMessage));
		};
		this.dispose = function(){
			messages.dispose();
		};
		this.getElement = ui.getElement;
		this.setVisible = ui.setVisible;
		buttonSend.addEventListener('click', sendMessage);
		buttonEmoticons.addEventListener('click', dispatchShowEmoticons);
		
		function sendMessage(){
			var messageSending = Message.fromComponents({components:[new MessageComponents.Text({})], user:getUserMe(), uniqueId:messages.nextUniqueId()});
			messages.addSending(messageSending);
		}
		function dispatchShowEmoticons(){
			self.dispatchEvent({type:'showemoticons',picked:callbackPicked});
		}
		function dispatchSendMessage(){
			
		}
		function getUserIdMe(){
			var user = getUserMe();
			if(user)
				return user.getId();
		}
		function callbackPicked(emoticonInfo){
			ui.appendToText(emoticonInfo.getStringRepresentation());
		}
		
	};
	return _Room;
	function UI(params){
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
		this.getElement = function(){
			return element;
		};
		this.getFeed= function(){return feed;};
		this.setVisible = function(value){
			element.style.display=value?'block':'none';
		};
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
	}
})();