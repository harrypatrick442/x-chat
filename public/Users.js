var Users = (function(){
	var _Users = function(params){
		EventEnabledBuilder(this);
		var getUserById=params.getUserById;
		var self = this;
		var collection = new Collection({getEntryId:getEntryId});
		this.add=function(user){
			if(!collection.add(user))return;
			dispatchAdd(user);
		};
		this.contains = collection.contains;
		this.getById=collection.getById;
		this.getById= function(id){
			return collection.getById(id);
		};
		this.remove=function(user){
			if(!collection.remove(user))return false;
			dispatchRemove(user);
		};
	    this.updateFromIds = function(userIds){
		    var missingIds = userIds.where(x=>!collection.containsEntryId(x)).toList();
		    var toRemove = collection.getEntryIds().where(x=>!userIds.indexOf(x)<0).toList();
		    toRemove.each(x=>collection.remove(x));
			var iteratorMissingIds = new Iterator(missingIds);
			if(getUserById){//Used to get a user from lobby into a room. if its missing then the missingusers event is dispatched and the MissingUsersManager will get the missing users efficiently along with lists of rooms they are in. They will then get added.
			//This only occurs when a user is temporarily disconnected and misses a join of another user.
				while(iteratorMissingIds.hasNext()){
					var missingId = iteratorMissingIds.next();
					var user = getUserById(missingId);
					if(user){
						iteratorMissingIds.remove();
						collection.add(user);
					}
				}
			}
			if(missingIds.length>0)
				dispatchMissingIds(missingIds);
	    };
		function getEntryId(user){
			return user.getId();
		}
		function dispatchAdd(user){
			self.dispatchEvent({type:'add', user:user});
		}
		function dispatchRemove(user){
			self.dispatchEvent({type:'remove', user:user});
		}
		function dispatchMissingIds(missingIds){
			self.dispatchEvent({type:'missingids', missingIds:missingIds});
		}
	};
	return _Users;
})();