var Users = (function(){
	var _Users = function(){
		var self = this;
		var collection = new Collection({getEntryId:getEntryId});
		this.add=function(user){
			return collection.add(user);
		};
		this.getById= function(id){
			return collection.getById(id);
		};
		this.remove=function(user){
			return collection.remove(user);
		};
		function getEntryId(user){
			return user.getId();
		}
	};
	return _Users;
})();