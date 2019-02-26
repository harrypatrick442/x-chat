module.exports = new (function(){
	var Mysocket = require('./Mysocket');
	this.create = function(params){
		var id = params.id;
		if(params.ws)
			return new Websocket(params.ws);
		else 
			return new Ajax();
		throw new Error('Not implemented');
	};
	function Websocket(ws){
		var self = this;
		var closed = false;
		this.channelType = Mysocket.WEBSOCKET;
		this.sendMessage=function(msg){
			try{ws.send(JSON.stringify(msg));}catch(ex){console.log(ex);}
		};
		ws.on('message', function(msg) {
			self.onMessage&&self.onMessage(msg);
		});
		ws.on('close', function(){
			closed=true;
			self.onClose&&self.onClose();
		});
		this.isAlive=function(){
			return !closed;
		};
		this.close = function(){
			closed=true;
			ws.close();
		};
	}
	function Ajax(){
		var self = this;
		var closed = false;
		var messageQueue=[];
		this.channelType = Mysocket.AJAX;
		this.sendMessage=function(msg){
			messageQueue.push(JSON.stringify(msg));
		};
		this.incomingMessage = function(msg) {
			self.onMessage&&self.onMessage(msg);
		};
		this.getAndReleaseQueuedMessages = function(){
			var list = messageQueue;
			messageueue =[];
			return list;
		};
		/*
		ws.on('close', function(){
			closed=true;
			self.onClose&&self.onClose();
		});*/
		this.isAlive=function(){
			return !closed;
		};
		this.close = function(){
			closed=true;
		};
	}
})();
