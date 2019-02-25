var MysocketChannelFactory = new (function(){
	this.create = function(params){
		return new _Websocket(params.id, params.urlWebsocket);
	};
	function _Websocket(id, url, analysis){
		var analysis = new MysocketChannelAnalysis(Mysocket.WEBSOCKET);
		var self = this;
		var websocket;
		this.send = function(msg){
			websocket.send(JSON.stringify(msg));
		};
		this.getAnalysis= function(){
			return analysis;
		};
		websocket = new WebSocket(url+(id?'?mysocketId='+id:''));
		websocket.onmessage = onMessage;
		websocket.onopen = onOpen;
		websocket.onclose=onClose;
		websocket.onerror = onError;
		function onMessage(e){
			self.onMessage&&self.onMessage(JSON.parse(e.data));
		}
		function onOpen(){
			analysis.opened();
			self.onOpen&&self.onOpen();
		}
		function onClose(){
			analysis.closed();
			self.onClose&&self.onClose();
		}
		function onError(err){
			analysis.error(err);
			console.log(err);
			self.onError&&self.onError(err);
		}
		/*
		function needToInitialize(){
			return !websocket||websocket.readyState === websocket.CLOSED||websocket.readyState === websocket.CLOSING;
		}*/
		this.isOpen = function(){
			return websocket.readyState==websocket.OPEN;
		}
		window.websocket = websocket;
	}
})();