var Users = (function(){
	var _Users = function(params){
		EventEnabledBuilder(this);
		var getUserById=params.getUserById;
		var self = this;
		var collection = new Collection({getEntryId:getEntryId});
		this.add=function(user){
			if(!collection.add(user))return;
			user.addEventListener('dispose', userDispose);
			dispatchAdd(user);
		};
		this.contains = collection.contains;
		this.containsId = collection.containsId;
		this.getById=collection.getById;
		this.remove=function(user){
			user.removeEventListener('dispose', userDispose);
			remove(user);
		};
		this.getIds = collection.getIds;
		function remove(user){
			if(!collection.remove(user))return false;
			dispatchRemove(user);
		}
		function getEntryId(user){
			return user.getId();
		}
		function userDispose(e){
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