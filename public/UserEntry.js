var UserEntry =(function(){
	var _UserEntry = function(params){
		var self = this;
		var user = params.user;
		var ignoreManager = params.ignoreManager;
		var clickMenu = params.clickMenu;
		var userImage = new UserImage({userId:user.getId(), username:user.getUsername()});
		var ui = new UI({name:user.getUsername(), userImage:userImage});
		this.getElement = ui.getElement;
		this.getId = function(){return user.getId();};
		this.getUsername=user.getUsername;
		ui.getElement().addEventListener('click', click);
		function click(e){
			console.log(e);
			clickMenu.setPosition({left:e.clientX, top:e.clientY});
			var ignored = isIgnored();
			var username = user.getUsername();
			clickMenu.show({options:[{text:'Pm '+username, callback:pm}, {text:(ignored?'Unignore ':'Ignore ')+username, callback:ignored?unignore:ignore}]});
		}
		function pm(){
			
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
	return _UserEntry;
	function UI(params){
		var userImage = params.userImage;
		var element = E.DIV();
		element.classList.add('user-entry');
		var inner = E.DIV();
		inner.classList.add('inner');
		element.appendChild(inner);
		var username=E.DIV();
		username.classList.add('username');
		inner.appendChild(userImage.getElement());
		inner.appendChild(username);
		username.innerHTML=params.name;
		this.getElement=function(){return element;};
	}
})();