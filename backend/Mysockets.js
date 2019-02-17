module.exports = new (function(){
	var Set = require('./Set');
	var Mysocket = require('./Mysocket');
	var uuid = require('uuid');
	var set = new Set({getEntryId:getEntryId});
	this.setWebsocket = function(params){
		var id = params.id;
		var ws = params.ws;
		var mysocket;
		if(id)
		{
			mysocket = getById(id);
		}
		if(mysocket){
			mysocket.setWebsocket(params);
			return;
		}
		mysocket = Mysocket.fromWebsocket({ws:ws, id:getNewId()});
		set.add(mysocket);
		addEvents(mysocket);
	};
	loadCleanup();
	function loadCleanup(){
		require('./MysocketCleanup');
	}
	function addEvents(mysocket){
		mysocket.addEventListener('close', onClose);
	}
	function onClose(e){
		var mysocket = e.mysocket;
		set.remove(mysocket);
	}
	function getById(id){	
		return set.getById(id);
	}
	function getNewId(){
		return uuid.v4();
	}
	function getEntryId(mysocket){
		return mysocket.getId();
	}
})();