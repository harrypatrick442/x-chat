var MysocketChannelFactory = new (function(){
	this.create = function(params){
		return new _Websocket(params.id, params.urlWebsocket);
	};
	function _Websocket(id, url){
		var self = this;
		var websocket;
		this.send = function(msg){
			websocket.send(JSON.stringify(msg));
		};
		websocket = new WebSocket(url+(id?'?mysocket='+id:''));
		websocket.onmessage = onMessage;
		websocket.onopen = onOpen;
		websocket.onclose=onClose;
		function onMessage(e){
			self.onMessage&&self.onMessage(JSON.parse(e.data));
		}
		function onOpen(){
			console.log('opened');
			self.onOpen&&self.onOpen();
		}
		function onClose(){
			self.onClose&&self.onClose();
		}
		/*
		function needToInitialize(){
			return !websocket||websocket.readyState === websocket.CLOSED||websocket.readyState === websocket.CLOSING;
		}*/
		this.isOpen = function(){
			return websocket.readyState==websocket.OPEN;
		}
	}
})();