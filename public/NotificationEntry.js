var NotificationEntry = (function(){
	var _NotificationEntry = function(notification){
		EventEnabledBuilder(this);
		var self = this;
		var buttonClose = new Button({className:'button-close', preventPropagation:true});
		var userImage = new UserImage({userId:notification.getId(), username:notification.getUsername()});
		var ui = new UI({userImage:userImage, buttonClose:buttonClose, text:'PM from '+notification.getUsername()});
		this.getElement = ui.getElement;
		this.getId = notification.getId;
		if(!notification.getIsPm())return;
		ui.addEventListener('click', dispatchShowPm);
		buttonClose.addEventListener('click', dispatchDispose);
		function dispatchShowPm(){
			console.log('dispatching show pm');
			self.dispatchEvent({type:'showpm', user:User.fromPmNotification(notification), isNotification:true});
		}
		function dispatchDispose(){
			self.dispatchEvent({type:'dispose', notification:notification});
		}
	};
	return _NotificationEntry;
	function UI(params){
		EventEnabledBuilder(this);
		var self = this;
		var userImage = params.userImage;
		var buttonClose = params.buttonClose;
		var text= params.text;
		var element = E.DIV();
		element.classList.add('notification-entry');
		var inner = E.DIV();
		inner.classList.add('inner');
		element.appendChild(inner);
		var username=E.DIV();
		username.classList.add('username');
		inner.appendChild(userImage.getElement());
		inner.appendChild(username);
		inner.appendChild(buttonClose.getElement());
		username.innerHTML=text;
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
		inner.addEventListener('click', dispatchClick);
		function dispatchClick(){
			self.dispatchEvent({type:'click'});
		}
	}
})();