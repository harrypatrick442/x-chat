exports.Users = (function(){
	var Collection = require('./Collection').Collection;
	var _Users = function(){
		var collection = new Collection({getEntryId:getEntryId});
		var list=[];
		this.add = function(user){
			collection.add(user);
		};
		this.contains = collection.contains;
		this.sendMessage=function(msg){
			collection.each(function(user){
				console.log('user');
				user.sendMessage(msg);
			});
		};
		function getEntryId(user){
			return user.getId();
		}
	};
	return _Users;
})();