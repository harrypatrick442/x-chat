var Message = new (function(){
	var _Message = function(params){
		var self = this;
		var element = E.DIV();
		var markup = params.markup;
		var connectedImage = new ConnectedImage({id:uniqueId, type:User.TYPE});
		this.getElement = function(){return element;};
	};
	_Message.fromJSON = function(params){
		var jObject = params.jObject;
		var emoticonsParser = params.emoticonsParser;
		var components = emoticonsParser.parse([new MessageComponents.Text(jObject.content)]);
		return _Message.fromComponents({components:components});
	}
	_Message.fromComponents=function(params){
		var components = params.components;
		var markup = generateMarkupFromComponents(messageComponents);
		return new Message({markup:markup});
	};
	function generateMarkupFromMessageComponents(components){
		var str='';
		each(components, function(component)){
			str+=component.getMarkup();
		}
		return str;
	}
	return _Message;
	function UI(){
		
	}
})();