var MysocketChannelFactory = new (function(){
	this.create = function(params){
		var mysocketAnalysis = params.mysocketAnalysis;
		switch(mysocketAnalysis.getRecommendedTypes()){
			case Mysocket.WEBSOCKET:
				return new _Websocket(params.id, params.urlWebsocket);
			case Mysocket.JSONP:
			default:
			console.log(params.url);
				return new _Longpoll(params.id, params.url);
		}
	};
	function _Websocket(id, url){
		var self = this;
		var analysis = new MysocketChannelAnalysis(Mysocket.WEBSOCKET);
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
			analysis.receivedMessage();
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
		};
	}
	function _Longpoll(id, url){
		console.log('_ID:'+id);
		var self = this;
		var analysis = new MysocketChannelAnalysis(ChannelType.LONGPOLL);
		var longpoll = new Longpoll({url:url, id:id});
		longpoll.onMessage= onMessage;
		longpoll.onError = onError;
		longpoll.onSent = onOpen;
		this.send = longpoll.send;
		this.getAnalysis= function(){
			return analysis;
		};
		function onMessage(msg){
			analysis.receivedMessage();
			self.onMessage&&self.onMessage(msg);
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
		this.isOpen = function(){
			return true;
		};
	}
})();