var Users = (function(){
	var _Users = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var getUserById=params.getUserById;
		var set = new Set({getEntryId:getEntryId});
		this.add=function(user){
			if(!set.add(user))return;
			user.addEventListener('left', userLeft);
			dispatchAdd(user);
		};
		this.contains = set.contains;
		this.containsId = set.containsId;
		this.getById=set.getById;
		this.remove=function(user){
			user.removeEventListener('left', userLeft);
			remove(user);
		};
		this.clear = function(){
			var list = set.getEntries().slice();
			each(list, self.remove);
		};
		this.getIds = set.getIds;
		this.getEntries=set.getEntries;
		function remove(user){
			if(!set.remove(user))return false;
			dispatchRemove(user);
		}
		function getEntryId(user){
			return user.getId();
		}
		function userLeft(e){
			remove(e.user);
		}
		function dispatchAdd(user){
			self.dispatchEvent({type:'add', user:user});
		}
		function dispatchRemove(user){
			console.log('dispatchingt remove');
			self.dispatchEvent({type:'remove', user:user});
		}
		function dispatchMissingIds(missingIds){
			self.dispatchEvent({type:'missingids', missingIds:missingIds});
		}
	};
	return _Users;
})();