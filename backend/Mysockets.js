module.exports = new (function(){
	var Set = require('./Set');
	var Mysocket = require('./Mysocket');
	var idCount=0;
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
	};
	function getById(id){	
		return set.getById(id);
	}
	function getNewId(){
		return idCount++;
	}
	function getEntryId(mysocket){
		return mysocket.getId();
	}
})();