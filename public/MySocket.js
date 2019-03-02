var Mysocket = (function(){
	var MYSOCKET_ID = 'mysocket_id';
	var _Mysocket= function(params){
		var url = params.url;
		var urlWebsocket = params.urlWebsocket;
		var temporalCallbackGetChannel = new TemporalCallback({delay:3000});
		EventEnabledBuilder(this);
		var self = this;
		var channel;
		var id;
		var toSend=[];
		this.send = function(msg){
			var channel = getChannel();
			if(channel&&channel.isOpen()){
				channel.send(msg);
				return;
			}
			console.log('added to tosend');
			toSend.push(msg);
		};
		this.getUrl = function(){
			return url;
		};
		var mysocketAnalysis = new MysocketAnalysis({mysocket:this});
		var channelManager = new MysocketChannelManager({mysocketAnalysis:mysocketAnalysis, urlWebsocket:urlWebsocket, url:url, getId:getId});
		getChannel();
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
		function getChannel(){
			if(channel)return channel;
			channel = channelManager.wouldLikeNewChannel();
			if(!channel)return;
			prepareChannel(channel);
		}
		function getId(){
			return id;
		}
		function prepareChannel(channel){
			channel.onClose = onClose;
			channel.onOpen = onOpen;
			channel.onMessage = onMessage;
			mysocketAnalysis.add(channel.getAnalysis());
		}
		function onMessage(msg){
			if(msg.type==MYSOCKET_ID){
				id=msg.id;
				return;
			}
			dispatchOnMessage(msg);
		}
		function onClose(){
			channel = null;
		}
		function onOpen(){
			console.log('onopen');
			if(toSend.length>0)
				sendPending();
			dispatchOnOpen();
		}
		function sendPending(){
			var iterator = new Iterator(toSend);
			while(iterator.hasNext())
			{
				var msg = iterator.next();
				try{
					channel&&channel.isOpen()&&channel.send(msg);
					iterator.remove();
				}
				catch(ex){
					break;
				}
			}
		}
	};
	_Mysocket.JSONP='jsonp';
	_Mysocket.LONGPOLL='longpoll';
	_Mysocket.WEBSOCKET='websocket';
	return _Mysocket;
})();