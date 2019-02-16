var Message = (function(){
	var _Message = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var userId = params.userId;
		var username = params.username;
		var components = params.components;
		var content = params.content;
		var clickMenuUser=params.clickMenuUser;
		console.log(params.image);
		var userImage = new UserImage({userId:userId, image:params.image});
		var ignoreManager = params.ignoreManager;
		var getUserMe = params.getUserMe;
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
	
		this.getServerAssignedNMessage = function(){
			return params.serverAssignedNMessage;
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
				ui = new MessageUI({userImage:userImage, components:components, username:username, pending:params.pending});
				ui.addEventListener('showusermenu', showUserMenu);
			}
			return ui;
		}
		function updateVisibility(){
			getUI().setVisible(!ignored);
		}
		function showUserMenu(e){
			if(userId==getUserMe().getId())return;
			clickMenuUser.setPosition(e);
			console.log('show');
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
		emoticonsParser.pipe(new MessageComponents.Text(content),	
		function(component){  components.push(component);});
		return new Message({userId:params.userId, username:params.username, uniqueId:params.uniqueId, components:components, content:content,
		serverAssignedNMessage:params.serverAssignedNMessage, pending:params.pending, clickMenuUser:params.clickMenuUser,
		ignoreManager:params.ignoreManager,getUserMe:params.getUserMe,image:params.image});
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