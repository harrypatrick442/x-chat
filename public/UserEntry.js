var UserEntry =(function(){
	var _UserEntry = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var user = params.user;
		var getUserMe = params.getUserMe;
		var ignoreManager = params.ignoreManager;
		var clickMenu = params.clickMenu;
		var userImage = new UserImage({userId:user.getId(), username:user.getUsername()});
		var ui = new UI({name:user.getUsername(), userImage:userImage, userId:user.getId()});
		this.getElement = ui.getElement;
		this.getId = function(){return user.getId();};
		this.getUsername=user.getUsername;
		this.dispose = ui.dispose;
		ui.getElement().addEventListener('click', click);
		function click(e){
			clickMenu.setPosition({left:e.clientX, top:e.clientY});
			if(getUserMe()==user)return;
			var ignored = isIgnored();
			var username = user.getUsername();
			clickMenu.show({options:[{text:'Pm '+username, callback:pm}, {text:(ignored?'Unignore ':'Ignore ')+username, callback:ignored?unignore:ignore}]});
		}
		function pm(){
			self.dispatchEvent({type:'showpm', user:user});
		}
		function isIgnored(){
			return ignoreManager.userIsIgnored(user);
		}
		function ignore(){
			ignoreManager.ignoreUser(user);
		}
		function unignore(){
			ignoreManager.unignoreUser(user);
		}
	};
	_UserEntry.fromIgnored = function(ignored){
		return new _UserEntry(ignored);
	};
	return _UserEntry;
	function UI(params){
		var userImage = params.userImage;
		var userId = params.userId;
		var onlineIndicatorUI = new OnlineIndicatorUI(OnlineIndicators.get(userId));
		var element = E.DIV();
		element.classList.add('user-entry');
		var inner = E.DIV();
		inner.classList.add('inner');
		element.appendChild(inner);
		var username=E.DIV();
		username.classList.add('username');
		inner.appendChild(userImage.getElement());
		inner.appendChild(username);
		inner.appendChild(onlineIndicatorUI.getElement());
		element.title=params.name;	
		username.innerHTML=params.name;
		this.getElement=function(){return element;};
		this.dispose = function(){
			userImage.dispose();
			onlineIndicatorUI.dispose();
			console.log('disposed');
		};
	}
})();