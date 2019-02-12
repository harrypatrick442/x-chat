var AutomaticAuthentication = new (function(){
	const TOKEN = 'token';
	var _AutomaticAuthentication = function(params){
		var send = params.send;
		var settings = new Settings('AutomaticAuthentication');
		this.authenticate = function(){
			var token = settings.get(TOKEN);
			if(!token)return false;
			send({type:'automatic_authenticate', token:token});
		};
		this.setToken = function(token){
			settings.set(TOKEN, token);
		};
	};
	return _AutomaticAuthentication;
})();