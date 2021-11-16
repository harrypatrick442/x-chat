var Message = (function(){
	var ERROR='error';
	var USER='user';
	var _Message = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var userId = params.userId;
		var username = params.username;
		var components = params.components;
		var content = params.content;
		var clickMenuUser=params.clickMenuUser;
		var userImage = new UserImage({userId:userId, image:params.image});
		var ignoreManager = params.ignoreManager;
		var getUserMe = params.getUserMe;
		var messageType=params.messageType?params.messageType:USER;
		var ignored=false;
		var ui;
		this.getElement = function(){
			return getUI().getElement();
		};
		this.getUniqueId = function(){
			return params.uniqueId;
		};
		this.getImage = function(){return params.image;};
		this.getUserId=function(){return params.userId;};
		this.getUsername=function(){return params.username;};
		this.getSentAtUTC = function(){return params.sentAt?moment(params.sentAt):undefined;};
		this.getServerAssignedNMessage = function(){
			return params.serverAssignedNMessage;
		};
		this.getMessageType= function(){
			return messageType;
		};
		this.confirm = function(receivedMessage){
			params.serverAssignedNMessage = receivedMessage.getServerAssignedNMessage();
			getUI().hidePending();
			
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
		function getUI(){
			if(!ui){
				ui = new MessageUI({userImage:userImage, components:components, username:username, pending:params.pending, sentAt:self.getSentAtUTC(), messageType:messageType});
				ui.addEventListener('showusermenu', showUserMenu);
			}
			return ui;
		}
		function updateVisibility(){
			console.log('updateVisibility'+ignored);
			getUI().setVisible(!ignored);
		}
		function showUserMenu(e){
			if(userId==getUserMe().getId())return;
			clickMenuUser.setPosition(e);
			clickMenuUser.show({options:[{text:'Pm '+username, callback:pm}, {text:(ignored?'Unignore ':'Ignore ')+username, callback:ignored?unignore:ignore}]});
		}
		function pm(){
			self.dispatchEvent({type:'showpm', user:User.fromMessage(self)});
		}
		function ignore(){
			ignoreManager.ignoreUserByIdAndUsername({id:userId, username:username});
		}
		function unignore(){
			ignoreManager.unignoreUserById(userId);
		}
	};
	_Message.ERROR=ERROR;
	_Message.USER=USER;
	_Message.fromJSON = function(params){
		return _from(params, params.content);
	}
	_Message.fromTypedString= function(params){
		params.sentAt=moment().format();
		return _from(params, params.str);
	};
	_Message.error = function(params){
		params.messageType=ERROR;
		return _from(params, params.message);
	};
	function _from(params, content){
		if(!content)content='';
		var emoticonsParser = params.emoticonsParser;
		var components =[] ;
		var text = new MessageComponents.Text(content)
		if(emoticonsParser){
			emoticonsParser.pipe(text,	
			function(component){  components.push(component);});
		}
		else
			components=[text];
		return new Message({userId:params.userId, username:params.username, uniqueId:params.uniqueId, components:components, content:content,
		serverAssignedNMessage:params.serverAssignedNMessage, pending:params.pending, clickMenuUser:params.clickMenuUser,
		ignoreManager:params.ignoreManager,getUserMe:params.getUserMe,image:params.image, sentAt:params.sentAt, messageType:params.messageType});
	}
	function generatecontentFromMessageComponents(components){
		var list =[];
		each(components, function(component){
			list.push(component.getElement());
		});
		return list;
	}
	return _Message;
})();