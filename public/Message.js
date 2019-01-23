var Message = (function(){
	var _Message = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var userId = params.userId;
		var username = params.username;
		var components = params.components;
		var content = params.content;
		var clickMenuUser=params.clickMenuUser;
		var userImage = new UserImage({userId:userId});
		var ignoreManager = params.ignoreManager;
		var getUserMe = params.getUserMe;
		var ignored=false;
		var ui = new UI({userImage:userImage, components:components, username:username, pending:params.pending});
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
			if(userId==getUserMe().getId())return;
			clickMenuUser.setPosition(e);
			console.log('show');
			clickMenuUser.show({options:[{text:'Pm '+username, callback:pm}, {text:(ignored?'Unignore ':'Ignore ')+username, callback:ignored?unignore:ignore}]});
		}
		function pm(){
			self.dispatchEvent({type:'pm', userId:userId});
		}
		function ignore(){
			ignoreManager.ignoreUserByIdAndUsername({id:userId, username:username});
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
		if(!content)content='';
		var emoticonsParser = params.emoticonsParser;
		var components =[] ;
		console.log(content);
		emoticonsParser.pipe(new MessageComponents.Text(content),	
		function(component){  components.push(component);});
		return new Message({userId:params.userId, username:params.username, uniqueId:params.uniqueId, components:components, content:content,
		serverAssignedNMessage:params.serverAssignedNMessage, pending:params.pending, clickMenuUser:params.clickMenuUser,
		ignoreManager:params.ignoreManager,getUserMe:params.getUserMe});
	}
	function generatecontentFromMessageComponents(components){
		var list =[];
		each(components, function(component){
			list.push(component.getElement());
		});
		return list;
	}
	return _Message;
	function UI(params){
		EventEnabledBuilder(this);
		var self = this;
		var components = params.components;
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
		each(components, function(component){
			inner.appendChild(component.getElement());
		});
		element.appendChild(inner);
		this.getElement = function(){return element;};
		this.getUsername = function(){return username;};
		this.setVisible=function(value){element.style.display=value?'inline-block':'none';};
		this.hidePending = function(){if(pending){element.removeChild(pending);}};
		innerUsername.addEventListener('click', dispatchShowUserMenu);
		function dispatchShowUserMenu(e){
			self.dispatchEvent({type:'showusermenu', left:e.clientX, top:e.clientY});
		}
	}
})();