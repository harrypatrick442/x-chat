var Users = (function(){
	var _Users = function(){
		EventEnabledBuilder(this);
		var self = this;
		var collection = new Collection({getEntryId:getEntryId});
		this.add=function(user){
			console.log(user);
			if(!collection.add(user))return;
			dispatchAdd(user);
		};
		this.getById= function(id){
			console.log('getById called');
			console.log(collection);
			return collection.getById(id);
		};
		this.remove=function(user){
			if(!collection.remove(user))return false;
			dispatchRemove(user);
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
	};
	return _Users;
})();