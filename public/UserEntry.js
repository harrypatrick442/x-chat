var UserEntry =(function(){
	var _UserEntry = function(user){
		var self = this;
		var userImage = new UserImage({userId:user.getId(), username:user.getUsername()});
		var ui = new UI({name:user.getUsername(), userImage:userImage});
		this.getElement = ui.getElement;
		this.getId = function(){return user.getId();};
		this.getUsername=user.getUsername;
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