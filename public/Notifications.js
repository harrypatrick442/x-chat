var Notifications = (function(){
	var _Notifications = funciton(){
		EventEnabledBuilder(this);
		var collection = new Collection({getEntryId:getEntryId});
		var self = this;
		this.add = function(notification){
			if(!collection.add(notification))return;
			dispatchAdded(notification);
		};
		function getEntryId(notification){
			return notification.getId();
		}
		function dispatchAdded(notification){
			dispatchEvent({type:'added', notification:notification});
		}
	};
	return _Notifications;
})();