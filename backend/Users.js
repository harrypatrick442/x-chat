exports.Users = (function(){
	var Set = require('./Set');
	require('./Linq');
	var _Users = function(){
		var set = new Set({getEntryId:getEntryId});
		this.add = function(user){
			if(!set.add(user))return false;
			user.addEventListener('dispose', userDispose);
			return true;
		};
		this.remove = function(user){
			if(!set.remove(user))return false;
			user.removeEventListener('dispose', userDispose);
			return true;
		};
		this.contains = set.contains;
		this.getIds =function(){
			return set.getEntryIds();
		};
		this.sendMessage=function(msg){
			set.each(function(user){
				user.sendMessage(msg);
			});
		};	
		this.getById=set.getById;
		this.toJSON=function(){
			return set.getEntries().select(x=>x.toJSON()).toList();
		};
		function getEntryId(user){
			return user.getId();
		}
		function userDispose(e){
			set.remove(e.user);
		}
	};
	return _Users;
})();