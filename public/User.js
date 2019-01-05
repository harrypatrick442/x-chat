var User = new (function(){
	const TYPE = 'user';
	var _User = function(params){
		this.getId = function(){ params.userId;};
	};
	_User.TYPE=TYPE;
	return _User;
})();