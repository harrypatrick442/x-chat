var Notifications = (function(){
	var _Notifications = function(){
		EventEnabledBuilder(this);
		var set = new Set({getEntryId:getEntryId});
		var self = this;
		this.add = function(notification){
			if(!set.add(notification))return;
			dispatchAdded(notification);
		};
		this.remove = function(notification){
			if(!set.remove(notification))return;
			dispatchRemoved(notification);
		};
		this.removeById = function(id){
			 var notification = set.getById(id);
			 if(!notification)return;
			 set.remove(notification);
			 dispatchRemoved(notification);
		}
		this.clear = function(){
			var list = set.getEntries().slice();
			each(list, self.remove);
		};
		this.getById = set.getById;
		this.getCount = set.count;
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