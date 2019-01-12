exports.Users = (function(){
	var Collection = require('./Collection').Collection;
	var _Users = function(){
		var collection = new Collection({getEntryId:getEntryId});
		var list=[];
		this.add = function(user){
			console.log('USERSS');
			if(collection.contains(user))return;
			collection.add(user);
			user.addEventListener('dispose', userDispose);
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
		function getEntryId(user){
			return user.getId();
		}
		function userDispose(e){
			collection.remove(e.user);
		}
	};
	return _Users;
})();