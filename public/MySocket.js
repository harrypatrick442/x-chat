var MySocket = new (function(){
	var _MySocket= function(params){
		var url = params.url;
		var urlWebsocket = params.urlWebsocket;
		EventEnabledBuilder(this);
		var self = this;
		var websocket;
		var ajax;
		getInterface();
		this.send = function(obj){
			var msg = JSON.stringify(obj);
			getInterface().send(msg);
		};
		function callbackOnMessage(msg){
			dispatchOnMessage(msg);
		}
		function callbackOnOpen(){
			dispatchOnOpen();
		}
		function callbackOnClose(){
			dispatchOnClose();
		}
		function dispatchOnMessage(msg){
			self.dispatchEvent({type:'onmessage', msg:msg});
		}
		function dispatchOnOpen(){
			self.dispatchEvent({type:'onopen'});
		}
		function dispatchOnClose(){
			self.dispatchEvent({type:'onclose'});
		}
		function getInterface(){
			return getWebsocket();
		}
		function getWebsocket(){
			if(!websocket) websocket = new _Websocket(urlWebsocket, callbackOnMessage, callbackOnOpen, callbackOnClose);
			return websocket;
		}
	};
	function getTypeToUse(){
		
	}
	function _Websocket(url, callbackOnMessage, callbackOnOpen, callbackOnClose){
		var websocket;
		var toSend=[];
		this.send = function(msg){
			if(needToInitialize()){
				initialize();
				return;
			}
			if(isOpen()){
				if(toSend.length>0)
					sendPending();
				websocket.send(msg);
				return;
			}
			toSend.push(msg);
		};
		initialize();
		function initialize(){
			websocket = new WebSocket(url);
			websocket.onmessage = onMessage;
			websocket.onopen = onOpen;
			websocket.onclose=callbackOnClose;
		}
		function onMessage(e){
			var msg = JSON.parse(e.data);
			callbackOnMessage(msg);
		}
		function onOpen(){
			callbackOnOpen();
			sendPending();
		}
		function needToInitialize(){
			return !websocket||websocket.readyState === websocket.CLOSED||websocket.readyState === websocket.CLOSING;
		}
		function isOpen(){ 
			return websocket && websocket.readyState==websocket.OPEN;
		}
		function sendPending(){
			var iterator = new Iterator(toSend);
			while(iterator.hasNext())
			{
				var msg = iterator.next();
				try{
					websocket.send(msg);
					iterator.remove();
				}
				catch(ex){
					break;
				}
			}
		}
	}
	return _MySocket;
})();