module.exports = new (function(){
	var TIMEOUT_CHANNEL_LONGPOLL= 120000;
	var Mysocket = require('./Mysocket');
	var ChannelType = require('./ChannelType');
	this.create = function(params){
		var id = params.id;
		console.log(params);
		if(params.ws)
			return new Websocket(params.ws);
		else 
			return new Longpoll(params.longpoll);
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
			self.onMessage&&self.onMessage(JSON.parse(msg));
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
	function Longpoll(longpoll){ 
	console.log(longpoll);
	console.log('was');
		var self = this;
		var closed = false;
		var messageQueue=[];
		this.channelType = ChannelType.LONGPOLL;
		this.sendMessage=function(msg){
			console.log('longpoll is sending');
			longpoll.send(msg);
		};
		longpoll.onMessage = function(msg){
			self.onMessage(msg);
		};
		this.isAlive=function(time){
			return !longpoll.getDisposed()&&(time - longpoll.getLastActive()<TIMEOUT_CHANNEL_LONGPOLL);
		};
		this.close = function(){
			longpoll.dispose();
			closed=true;
		};
	}
})();
