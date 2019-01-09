exports.Session = (function(){
	var uuid = require('uuid');
	var _Session = function(params){
		var id = uuid.v4();
		var self = this;
		this.getUser = function(){return params.user;};
		this.getId = function(){ return id;};
	};
	return _Session;
})();