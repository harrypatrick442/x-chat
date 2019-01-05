var Message = new (function(){
	var _Message = function(params){
		console.log(params);
		var self = this;
		var user = params.user;
		var markup = params.markup;
		var uniqueId = params.uniqueId;
		var connectedImage = new ConnectedImage({type:User.TYPE, id:user.getId(),def:'/images/user-blank.png'});
		var ui = new UI({connectedImage:connectedImage, markup:markup, username:user.getUsername()});
		var userId = params.userId;
		this.getElement = ui.getElement;
		this.getUniqueId = function(){
			return uniqueId;
		};
		
	};
	_Message.fromJSON = function(params){
		return _from(params, params.content);
	}
	_Message.fromTypedString= function(params){
		return _from(params, params.str);
	};
	function _from(params, markup){
		var emoticonsParser = params.emoticonsParser;
		var components =[] ;
		emoticonsParser.pipe(new MessageComponents.Text(markup),	
		function(component){  console.log(component); components.push(component);});
		console.log(params);
		return _Message.fromComponents({user:params.user, uniqueId:params.uniqueId, components:components});
	}
	_Message.fromComponents=function(params){
		var components = params.components;
		var markup = generateMarkupFromMessageComponents(components);
		return new Message({markup:markup, user:params.user, uniqueId:params.uniqueId});
	};
	function generateMarkupFromMessageComponents(components){
		var str='';
		each(components, function(component){
			str+=component.getMarkup();
		});
		return str;
	}
	return _Message;
	function UI(params){
		var markup = params.markup;
		var name = params.username;
		var connectedImage = params.connectedImage;
		var element = E.DIV();
		element.classList.add('message');
		var inner = E.DIV();
		inner.classList.add('inner');
	    var username = E.DIV();
		username.classList.add('username');
		var innerUsername = E.DIV();
		username.appendChild(innerUsername);
		inner.appendChild(connectedImage.getElement());
		inner.appendChild(username);
		innerUsername.innerHTML += name&&name.length>0?name:'&nbsp;';
		inner.innerHTML +=markup;
		console.log(name);
		element.appendChild(inner);
		this.getElement = function(){return element;};
	}
})();