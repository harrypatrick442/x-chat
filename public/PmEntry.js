var PmEntry= new (function(){
	var _PmEntry = function(params){
		var self = this;
		var room = params.room;
		var userTo = room.getUserTo();
		var userImage = new UserImage({userId:userTo.getId(), username:userTo.getUsername()});
		var ui = new UI({userImage:userImage, name:userTo.getUsername()});
		this.getId = function(){
			return userTo.getId();
		};
		this.getUsername=function(){return userTo.getUsername();};
		this.getElement = ui.getElement;
		this.setVisible = ui.setVisible;
		this.parentWidth = ui.parentWidth;
	};
	return _PmEntry;
	function UI(params){
		var userImage = params.userImage;
		var element = E.DIV();
		element.classList.add('pm-entry');
		var inner = E.DIV();
		inner.classList.add('inner');
		element.appendChild(inner);
		var username=E.DIV();
		username.classList.add('username');
		inner.appendChild(userImage.getElement());
		inner.appendChild(username);
		username.innerHTML=params.name;
		this.getElement=function(){return element;};
		this.parentWidth = function(clientWidth){
			if(clientWidth<200){
				element.style.width='100%';
				return;
			}
			if(clientWidth<=400)
			{
				element.style.width = '50%';
				return;
			}
			if(clientWidth<= 600){
				element.style.width = '33.3%';
				return;
			}
			element.style.width = '25%';
		};
	}
})();