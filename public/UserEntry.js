var UserEntry =(function(){
	var _UserEntry = function(params){
		var self = this;
		var user = params.user;
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
			clickMenu.show({options:[{text:'Pm '+user.getUsername(), callback:pm}, {text:'Ignore', callback:ignore}]});
		}
		function pm(){
			
		}
		function ignore(){
			
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