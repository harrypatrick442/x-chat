var Notifications = (function(){
	var _Notifications = function(){
		EventEnabledBuilder(this);
		var collection = new Collection({getEntryId:getEntryId});
		var self = this;
		this.add = function(notification){
			if(!collection.add(notification))return;
			dispatchAdded(notification);
		};
		this.remove = function(notification){
			if(!collection.remove(notification))return;
			dispatchRemoved(notification);
		};
		function getEntryId(notification){
			return notification.getId();
		}
		function dispatchAdded(notification){
			self.dispatchEvent({type:'added', notification:notification});
		}
		function dispatchRemoved(notification){
			self.dispatchEvent({type:'removed', notification:notification});
		}
	};
	return _Notifications;
})();