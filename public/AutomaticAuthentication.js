var AutomaticAuthentication = new (function(){
	var TOKEN = 'token';
	var _AutomaticAuthentication = function(params){
		var send = params.send;
		var settings = new Settings('AutomaticAuthentication');
		this.authenticate = function(){
			var token = settings.get(TOKEN);
			if(!token)return false;
			send({type:'automatic_authenticate', token:token});
			console.log('attempting automatic authentication');
			return true;
		};
		this.setToken = function(token){
			settings.set(TOKEN, token);
		};
		this.clear = function(){
			settings.set(TOKEN, null);
		};
	};
	return _AutomaticAuthentication;
})();