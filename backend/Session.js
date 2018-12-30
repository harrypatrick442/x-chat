exports.Session = new (function(){
	var _Session = function(params){
		var self = this;
		this.getUser = function(){return params.user;};
	};
	return _Session;
})();