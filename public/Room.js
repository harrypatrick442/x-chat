var Room = new (function(){
	var _Room = function(params){
		var self = this;
		var ui = new UI();
		var users = new Users();
		this.getId = function(){return params.id;};
		this.getName = function(){return params.name;};
		this.dispose = function(){
			
		};
		this.getElement = ui.getElement;
		this.setVisible = ui.setVisible;
	};
	return _Room;
	function UI(){
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
		var buttonSend = new Button({className:'button-send', text:'Send'});
		var buttonEmoticons = new Button({className:'button-emoticons'});
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
		this.setVisible = function(value){
			element.style.display=value?'block':'none';
		};
		this.addMessage = function(message){
			feed.appendChild(message.getElement());
		};
		this.removeMessage = function(message){
			feed.removeChild(message.getElement());
		};
	}
})();