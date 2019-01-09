var User = (function(){
	const TYPE = 'user';
	var _User = function(params){
		this.getId = function(){return params.id;};
		this.getUsername = function(){return params.username;};
		this.getEmail = function(){return params.email;};
		this.isGuest= function(){return params.isGuest;};
		this.getGender = function(){return params.gender;};
		this.getBirthday = function(){return params.birthday;};
	};
	_User.fromJSON = function(params){
		return new _User(params);
	};
	_User.TYPE=TYPE;
	return _User;
})();