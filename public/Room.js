var Room = new (function(){
	var _Room = function(){
		var users = new Users();
		this.join=function(user){
			users.add(user);
		};
	};
	return _Room;
})();