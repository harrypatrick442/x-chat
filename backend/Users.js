exports.Users = (function(){
	var Collection = require('./Collection').Collection;
	require('./Linq');
	var _Users = function(){
		var collection = new Collection({getEntryId:getEntryId});
		this.add = function(user){
		var list=[];
			if(collection.contains(user))return;
			collection.add(user);
			user.addEventListener('dispose', userDispose);
		};
		this.remove = function(user){
			if(!collection.contains(user))return;
			collection.remove(user);
			user.removeEventListener('dispose', userDispose);
		};
		this.contains = collection.contains;
		this.getIds =function(){
			return collection.getEntryIds();
		};
		this.sendMessage=function(msg){
			collection.each(function(user){
				user.sendMessage(msg);
			});
		};	
		this.getById=collection.getById;
		this.toJSON=function(){
			return collection.getEntries().select(x=>x.toJSON()).toList();
		};
		function getEntryId(user){
			return user.getId();
		}
		function userDispose(e){
			collection.remove(e.user);
		}
	};
	return _Users;
})();