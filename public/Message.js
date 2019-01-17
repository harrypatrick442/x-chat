var Message = (function(){
	var _Message = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var userId = params.userId;
		var username = params.username;
		var content = params.content;
		var clickMenuUser=params.clickMenuUser;
		var userImage = new UserImage({userId:userId});
		var ignoreManager = params.ignoreManager;
		var ignored=false;
		var ui = new UI({userImage:userImage, content:content, username:username, pending:params.pending});
		this.getElement = ui.getElement;
		this.getUniqueId = function(){
			return params.uniqueId;
		};
		this.getUserId=function(){return params.userId;};
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
		this.dispose = function(){
			userImage.dispose();
		};
		this.setIgnored=function(value){
			ignored = value;
			updateVisibility();
		};
		this.getIgnored = function(){return ignored;};
		ui.addEventListener('showusermenu', showUserMenu);
		function updateVisibility(){
			ui.setVisible(!ignored);
		}
		function showUserMenu(e){
			clickMenuUser.setPosition(e);
			console.log('show');
			clickMenuUser.show({options:[{text:'Pm '+username, callback:pm}, {text:(ignored?'Unignore ':'Ignore ')+username, callback:ignored?unignore:ignore}]});
		}
		function pm(){
			self.dispatchEvent({type:'pm', userId:userId});
		}
		function ignore(){
			ignoreManager.ignoreUserById(userId);
		}
		function unignore(){
			ignoreManager.unignoreUserById(userId);
		}
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
		function(component){  components.push(component);});
		return _Message.fromComponents({userId:params.userId, username:params.username, uniqueId:params.uniqueId, components:components, 
		serverAssignedNMessage:params.serverAssignedNMessage, pending:params.pending, clickMenuUser:params.clickMenuUser,
		ignoreManager:params.ignoreManager,});
	}
	_Message.fromComponents=function(params){
		var components = params.components;
		var content = generatecontentFromMessageComponents(components);
		return new Message({content:content, userId:params.userId, username:params.username, uniqueId:params.uniqueId,
		serverAssignedNMessage:params.serverAssignedNMessage, pending:params.pending, ignoreManager:params.ignoreManager,
		clickMenuUser:params.clickMenuUser});
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
		EventEnabledBuilder(this);
		var self = this;
		var content = params.content;
		var name = params.username;
		var userImage = params.userImage;
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
		inner.appendChild(userImage.getElement());
		inner.appendChild(username);
		innerUsername.innerHTML += name&&name.length>0?name:'&nbsp;';
		inner.appendChild(document.createTextNode(content))
		element.appendChild(inner);
		this.getElement = function(){return element;};
		this.getUsername = function(){return username;};
		this.setVisible=function(value){element.style.display=value?'inline-block':'none';};
		this.hidePending = function(){if(pending){element.removeChild(pending);}};
		username.addEventListener('click', dispatchShowUserMenu);
		function dispatchShowUserMenu(e){
			self.dispatchEvent({type:'showusermenu', left:e.clientX, top:e.clientY});
		}
	}
})();