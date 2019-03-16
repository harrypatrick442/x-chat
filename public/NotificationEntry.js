var NotificationEntry = (function(){
	var _NotificationEntry = function(notification){
		EventEnabledBuilder(this);
		var self = this;
		var isPm = notification.getIsPm();
		var buttonClose = new Button({className:'button-close', preventPropagation:true});
		var userImage = new UserImage({userId:notification.getId(), username:notification.getUsername()});
		var ui = new UI({userImage:userImage, buttonClose:buttonClose, text:'PM from '+notification.getUsername(), isPm:isPm, userId:isPm?notification.getId():undefined});
		this.getElement = ui.getElement;
		this.getId = notification.getId;
		this.parentWidth=ui.parentWidth;
		if(!isPm)return;
		ui.addEventListener('click', dispatchShowPm);
		buttonClose.addEventListener('click', dispatchDispose);
		this.dispose = ui.dispose;
		function dispatchShowPm(){
			self.dispatchEvent({type:'showpm', user:User.fromPmNotification(notification), isNotification:true});
			notification.seen();
			dispatchDispose();
		}
		function dispatchDispose(){
			self.dispatchEvent({type:'dispose', notification:notification, notificationEntry:self});
		}
	};
	return _NotificationEntry;
	function UI(params){
		EventEnabledBuilder(this);
		var self = this;
		var userImage = params.userImage;
		var buttonClose = params.buttonClose;
		var userId = params.userId;
		var text= params.text;
		var element = E.DIV();
		element.classList.add('notification-entry');
		var inner = E.DIV();
		inner.classList.add('inner');
		element.appendChild(inner);
		var onlineIndicatorUI = new OnlineIndicatorUI(OnlineIndicators.get(userId));
		var username=E.DIV();
		username.classList.add('username');
		inner.appendChild(userImage.getElement());
		inner.appendChild(username);
		inner.appendChild(buttonClose.getElement());
		inner.appendChild(onlineIndicatorUI.getElement());
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
		this.dispose = function(){
			userImage.dispose();
			onlineIndicatorUI.dispose();
		};
		inner.addEventListener('click', dispatchClick);
		function dispatchClick(){
			self.dispatchEvent({type:'click'});
		}
	}
})();