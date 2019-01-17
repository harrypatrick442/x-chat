var Ignored=(function(){
	var _Ignored = function(params){
		this.getUsername = function(){return params.username;};
		this.getId=function(){return params.id;};
	};
	_Ignored.fromUser=function(user){
		return new _Ignored({id:user.getId(), username:user.getUsername()});
	};
	_Ignored.fromJSON= function(jObject){
		return new _Ignored(jObject);
	}
	return _Ignored;
})();