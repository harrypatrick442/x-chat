exports.Sessions = (function(){
	var Session = require('./Session').Session;
	var _Sessions = function(){
		var mapSessionIdToSession=[];
		var self = this;
		this.getById=function(sessionId){
			console.log(mapSessionIdToSession);
			return mapSessionIdToSession[sessionId];
		};
		this.add=function(session){
			mapSessionIdToSession[session.getId()]=session;
			session.addEventListener('dispose', onDispose);
		};
		function onDispose(e){
			console.log('SESSION BEING DISPOSED');
			delete mapSessionIdToSession[e.session.getId()];
		}
	};
	return _Sessions;
})();