var Message = new (function(){
	var _Message = function(params){
		console.log(params);
		var self = this;
		var user = params.user;
		var content = params.content;
		var uniqueId = params.uniqueId;
		var connectedImage = new ConnectedImage({type:User.TYPE, id:user.getId(),def:'/images/user-blank.png'});
		var ui = new UI({connectedImage:connectedImage, content:content, username:user.getUsername()});
		var userId = params.userId;
		this.getElement = ui.getElement;
		this.getUniqueId = function(){
			return uniqueId;
		};
		this.toJSON = function(){
		return {content:content, userId:user.getId()};
		};
	};
	_Message.fromJSON = function(params){
		return _from(params, params.content);
	}
	_Message.fromTypedString= function(params){
		return _from(params, params.str);
	};
	function _from(params, content){
		var emoticonsParser = params.emoticonsParser;
		var components =[] ;
		emoticonsParser.pipe(new MessageComponents.Text(content),	
		function(component){  console.log(component); components.push(component);});
		console.log(params);
		return _Message.fromComponents({user:params.user, uniqueId:params.uniqueId, components:components});
	}
	_Message.fromComponents=function(params){
		var components = params.components;
		var content = generatecontentFromMessageComponents(components);
		return new Message({content:content, user:params.user, uniqueId:params.uniqueId});
	};
	function generatecontentFromMessageComponents(components){
		var str='';
		each(components, function(component){
			str+=component.getMarkup();
		});
		return str;
	}
	return _Message;
	function UI(params){
		var content = params.content;
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
		inner.innerHTML +=content;
		console.log(name);
		element.appendChild(inner);
		this.getElement = function(){return element;};
	}
})();