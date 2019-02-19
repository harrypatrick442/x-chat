var Notification = (function(){
	const PM='pm';
	var _Notification = function(params){
		console.log(params);
		EventEnabledBuilder(this);
		var self = this;
		this.getNotificationType= function(){return params.notificationType;};
		this.getIsPm= function(){return self.getNotificationType()==PM;};
		this.getUsername = function(){return params.username;};
		this.getImage = function(){return params.image;};
		this.getId = function(){return params.id;};
		this.seen = dispatchSeen;
		function dispatchSeen(){
			self.dispatchEvent({type:'seen', notification:self});
		}
	};
	_Notification.PM= PM;
	_Notification.pmNotificationFromJSON = function(jObject){
		return new _Notification({notificationType : PM, username:jObject.username, id:jObject.userId});
	};
	return _Notification;
})();