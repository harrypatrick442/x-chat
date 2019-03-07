var MysocketChannelFactory = new (function(){
	this.create = function(params){
		var mysocketAnalysis = params.mysocketAnalysis;
		var recommendedChannelTypes = mysocketAnalysis.getRecommendedTypes();
		console.log('The recommended channel typesvwas: '+recommendedChannelTypes);
		switch(recommendedChannelTypes[0]){
			case Mysocket.WEBSOCKET:
				return new _Websocket(params.id, params.urlWebsocket);
			case Mysocket.JSONP:
			default:
			console.log(params.url);
				return new _Longpoll(params.id, params.url);
		}
	};
	function _Websocket(id, url){
		console.log('websocket created');
		var self = this;
		var analysis = new MysocketChannelAnalysis(Mysocket.WEBSOCKET);
		var websocket;
		this.send = function(msg){
			console.log(msg);
			websocket.send(JSON.stringify(msg));
		};
		this.getAnalysis= function(){
			return analysis;
		};
		this.isOpen = function(){
			return websocket&&(websocket.readyState==websocket.OPEN);
		};
		//new Task(function(){onClose('test');}).run();
		//return;
		websocket = new WebSocket(url+(id?'?mysocketId='+id:''));
		websocket.onmessage = onMessage;
		websocket.onopen = onOpen;
		websocket.onclose=onClose;
		websocket.onerror = onError;
			console.log('created websocket');
		function onMessage(e){
			console.log('on message');
			analysis.receivedMessage();
			self.onMessage&&self.onMessage(JSON.parse(e.data));
		}
		function onOpen(){
			console.log('Open');
			analysis.opened();
			self.onOpen&&self.onOpen();
		}
		function onClose(){
			console.log('Close');
			analysis.closed();
			self.onClose&&self.onClose();
		}
		function onError(err){
			console.log('onError');
			analysis.error(err);
			console.log(err);
			self.onError&&self.onError(err);
		}
		/*
		function needToInitialize(){
			return !websocket||websocket.readyState === websocket.CLOSED||websocket.readyState === websocket.CLOSING;
		}*/
	}
	function _Longpoll(id, url){
		console.log('_ID:'+id);
		var self = this;
		var analysis = new MysocketChannelAnalysis(ChannelType.LONGPOLL);
		var longpoll = new Longpoll({url:url, id:id});
		longpoll.onMessage= onMessage;
		longpoll.onError = onError;
		longpoll.onSent = nothing;//onOpen
		
		this.send = longpoll.send;
		this.getAnalysis= function(){
			return analysis;
		};
		setTimeout(onOpen, 0);
		function nothing(){}
		function onMessage(msg){
			analysis.receivedMessage();
			self.onMessage&&self.onMessage(msg);
		}
		function onOpen(){onClose
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