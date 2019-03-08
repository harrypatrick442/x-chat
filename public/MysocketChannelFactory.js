var MysocketChannelFactory = new (function(){
	this.create = function(params){
		var mysocketAnalysis = params.mysocketAnalysis;
		var recommendedChannelTypes = mysocketAnalysis.getRecommendedTypes();
		console.log('The recommended channel types was: '+recommendedChannelTypes);
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
		var analysis = new MysocketChannelAnalysis(ChannelType.WEBSOCKET);
		var websocket;
		this.send = function(msg){
			console.log(msg);
			websocket.send(JSON.stringify(msg));
		};
		this.getAnalysis= function(){
			return analysis;
		};
		this.getChannelType = function(){
			return ChannelType.WEBSOCKET;
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
		websocket.onerror = onError
		this.close = function(){websocket.close();};
		window.channel = this;
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
	}
	function _Longpoll(id, url){
		var self = this;
		var closed=false;
		var lastErrorAt;
		var analysis = new MysocketChannelAnalysis(ChannelType.LONGPOLL);
		var longpoll = new Longpoll({url:url, id:id});
		longpoll.onMessage= onMessage;
		longpoll.onError = onError;
		longpoll.onSent = nothing;//onOpen
		longpoll.onDispose = onDispose;
		
		window.channel = this;
		this.close= close;
		this.send = longpoll.send;
		this.getAnalysis= function(){
			return analysis;
		};
		this.getChannelType = function(){
			return ChannelType.LONGPOLL;
		};
		setTimeout(onOpen, 0);
		function nothing(){}
		function onMessage(msg){
			analysis.receivedMessage();
			self.onMessage&&self.onMessage(msg);
		}
		function onDispose(){
			console.log('on dispose');
			close();
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
			var now = getTime();
			if(secondErrorInTenSeconds)close();
			else lastErrorAt= now;
			self.onError&&self.onError(err);
		}
		function getTime(){
			return new Date().getTime()-10000;
		}
		function close(){
			if(closed)return;
			closed=true;
			longpoll.dispose();
			onClose();
		}
		function secondErrorInTenSeconds(now){
			return lastErrorAt&&lastErrorAt<now;
		}
		this.isOpen = function(){
			return !closed;
		};
	}
})();