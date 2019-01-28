var Notification = (funciton(){
	var _Notification = funciton(){
		EventEnabledBuilder(this);
		var self = this;
	};
	_Notification.fromJSON = function(jObject){
		return new _Notification(jObject);
	};
	return _Notification;
})();