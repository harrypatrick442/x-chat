module.exports = new (function(){
	this.create = function(params){
		var id = params.id;
		if(params.ws)
			return new Websocket(params.ws);
		throw new Error('Not implemented');
	};
	function Websocket(ws){
		var self = this;
		this.sendMessage=function(msg){
			try{ws.send(JSON.stringify(msg));}catch(ex){console.log(ex);}
		};
		ws.on('message', function(msg) {
			self.onMessage&&self.onMessage(msg);
		});
		ws.on('close', function(){
			//self.onClose&&self.onClose();
		});
	}
})();
