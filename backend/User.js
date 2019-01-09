exports.User = (function(){
	var _User = function(params){
		this.getId = function(){return params.id;};
		this.getUsername = function(){return params.username;};
		this.getEmail = function(){return params.email;};
		this.isGuest= function(){return params.isGuest;};
		this.getGender = function(){return params.gender;};
		this.getBirthday = function(){return params.birthday;};
		this.toJSON = function(){return params;};
	};
	_User.fromSqlRow = function(row){
		return new _User(row);
	};
	_User.fromJSON= function(jObject){
		return new _User(jObject);
	};
	return _User;
})();