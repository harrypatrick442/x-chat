var Session = require('./Session');
module.exports = function(){
	var mapSessionIdToSession=[];
	var self = this;
	this.getById=function(sessionId){
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