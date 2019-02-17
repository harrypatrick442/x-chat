module.exports = new (function(){
	var Set = require('./Set');
	var EventEnabledBuilder= require('./EventEnabledBuilder');
	var MysocketCleanup=require('./MysocketCleanup');
	var Mysocket = require('./Mysocket');
	var uuid = require('uuid');
	EventEnabledBuilder(this);
	var self = this;
	var set = new Set({getEntryId:getEntryId});
	var mysocketCleanup = new MysocketCleanup(this);
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
		dispatchAdd(mysocket);
	};
	function dispatchAdd(mysocket){
		self.dispatchEvent({type:'add', mysocket:mysocket});
	}
	function dispatchRemove(mysocket){
		self.dispatchEvent({type:'remove', mysocket:mysocket});
	}
	function addEvents(mysocket){
		mysocket.addEventListener('close', onClose);
	}
	function onClose(e){
		var mysocket = e.mysocket;
		set.remove(mysocket);
		dispatchRemove(mysocket);
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