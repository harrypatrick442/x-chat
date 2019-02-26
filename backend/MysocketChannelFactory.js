module.exports = new (function(){
	var Mysocket = require('./Mysocket');
	var ChannelType = require('./ChannelType');
	this.create = function(params){
		var id = params.id;
		console.log(params);
		if(params.ws)
			return new Websocket(params.ws);
		else 
			return new Longpoll(params.url, params.longpoll, id);
		throw new Error('Not implemented');
	};
	function Websocket(ws){
		var self = this;
		var closed = false;
		this.channelType = ChannelType.WEBSOCKET;
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
	function Longpoll(url, longpoll, id){
		var self = this;
		var closed = false;
		var messageQueue=[];
		this.channelType = ChannelType.LONGPOLL;
		this.sendMessage=function(msg){
			longpoll.publishToId(url, id, msg);
		};
		this.isAlive=function(){
			return !closed;
		};
		this.close = function(){
			closed=true;
		};
	}
})();
