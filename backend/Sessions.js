var Session = require('./Session');
module.exports = function(){
	var mapSessionIdToSession=new Map();
	var self = this;
	this.getById=function(sessionId){
		return mapSessionIdToSession.get(sessionId);
	};
	this.add=function(session){
		mapSessionIdToSession.set(session.getId(), session);
		session.addEventListener('dispose', onDispose);
	};
	function onDispose(e){
		console.log('SESSION BEING DISPOSED');
		mapSessionIdToSession.delete(e.session.getId());
	}
};