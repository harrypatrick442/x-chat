exports.Users = (function(){
	var Collection = require('./../public/Collection').Collection;
	var _Users = function(){
		var collection = new Collection({getEntryId:getEntryId});
		var list=[];
		this.add = function(user){
			if(list.indexOf(user)<0)
				list.push(user);
		};
		this.sendMessage=function(msg){
			collection.each(function(user){
				user.sendMessage(msg);
			});
		};
		function getEntryId(user){
			return user.getId();
		}
	};
	return _Users;
})();