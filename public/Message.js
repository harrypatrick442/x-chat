var Message = new (function(){
	var _Message = function(params){
		console.log(params);
		var self = this;
		var element = E.DIV();
		var markup = params.markup;
		var uniqueId = params.uniqueId;
		element.innerHTML = markup;
		var userId = params.userId;
		var connectedImage = new ConnectedImage({id:userId, type:User.TYPE});
		this.getElement = function(){return element;};
		this.getUniqueId = function(){
			return uniqueId;
		};
		
	};
	_Message.fromJSON = function(params){
		var jObject = params.jObject;
		var emoticonsParser = params.emoticonsParser;
		var components = [];
		emoticonsParser.pipe(new MessageComponents.Text(params.content),	
		function(component){components.push(component);});
		return _Message.fromComponents({components:components});
	}
	_Message.fromTypedString= function(params){
		var emoticonsParser = params.emoticonsParser;
		var components =[] ;
		emoticonsParser.pipe(new MessageComponents.Text(params.str),	
		function(component){  console.log(component); components.push(component);});
		return _Message.fromComponents({components:components});
	};
	_Message.fromComponents=function(params){
		var components = params.components;
		var markup = generateMarkupFromMessageComponents(components);
		return new Message({markup:markup});
	};
	function generateMarkupFromMessageComponents(components){
		var str='';
		each(components, function(component){
			str+=component.getMarkup();
		});
		return str;
	}
	return _Message;
	function UI(){
		
	}
})();