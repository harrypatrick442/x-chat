var Message = (function(){
	var _Message = function(params){
		console.log(params);
		var self = this;
		var userId = params.userId;
		var username = params.username;
		var content = params.content;
		var connectedImage = new ConnectedImage({type:User.TYPE, id:userId,def:'/images/user-blank.png'});
		var ui = new UI({connectedImage:connectedImage, content:content, username:username, pending:params.pending});
		this.getElement = ui.getElement;
		this.getUniqueId = function(){
			return params.uniqueId;
		};
		this.getServerAssignedNMessage = function(){
			return params.serverAssignedNMessage;
		};
		this.confirm = function(receivedMessage){
			params.serverAssignedNMessage = receivedMessage.getServerAssignedNMessage();
			ui.hidePending();
		};
		this.toJSON = function(){
		return {content:content, userId:userId, uniqueId:params.uniqueId};
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
		return _Message.fromComponents({userId:params.userId, username:params.username, uniqueId:params.uniqueId, components:components, serverAssignedNMessage:params.serverAssignedNMessage, pending:params.pending});
	}
	_Message.fromComponents=function(params){
		var components = params.components;
		var content = generatecontentFromMessageComponents(components);
		return new Message({content:content, userId:params.userId, username:params.username, uniqueId:params.uniqueId, serverAssignedNMessage:params.serverAssignedNMessage, pending:params.pending});
		console.log(params);
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
		var pending;
		if(params.pending){
			pending = E.DIV();
			pending.classList.add('pending');
			element.appendChild(pending);
		}
		username.appendChild(innerUsername);
		inner.appendChild(connectedImage.getElement());
		inner.appendChild(username);
		innerUsername.innerHTML += name&&name.length>0?name:'&nbsp;';
		inner.innerHTML +=content;
		console.log(name);
		element.appendChild(inner);
		this.getElement = function(){return element;};
		this.hidePending = function(){if(pending){element.removeChild(pending);}};
	}
})();