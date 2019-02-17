var Mysockets = new (function(){
	var Set = require('./Set');
	var idCount=0;
	var set = new Set({getEntryId:getEntryId});
	this.setWebsocket = function(params){
		var mysocketId = params.mysocketId;
		var ws = params.ws;
		var mysocket;
		if(mysocketId)
		{
			mysocket = getById(mysocketId);
		}
		if(mysocket){
			mysocket.setWebsocket(ws);
			return;
		}
		mysocket = Mysocket.fromWebsocket({ws:ws, id:getNewId()});
		set.add(mysocket);
	};
	function getById(id){
		return set.getById(id);
	}
	function getNewId()[
		return idCount++;
	}
	function getEntryId(mysocket){
		return mysocket.getId();
	}
})();