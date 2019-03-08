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
			console.log('ON CLOSE MYSOCKET');
			dispatchClose();
		}
		function dispatchMessage(msg){
			self.dispatchEvent({type:'message', msg:msg});
		}
		function dispatchOpen(){
			self.dispatchEvent({type:'open'});
		}
		function dispatchClose(){
			self.dispatchEvent({type:'close'});
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
			channel.onClose = onChannelClose;
			channel.onOpen = onChannelOpen;
			channel.onMessage = onChannelMessage;
			mysocketAnalysis.add(channel.getAnalysis());
		}
		function onChannelMessage(msg){
			if(msg.type==MYSOCKET_ID){
				id=msg.id;
				return;
			}
			dispatchMessage(msg);
		}
		function onChannelClose(){
			console.log('MySocket.onClose');
			channel = null;
		}
		function onChannelOpen(){
			console.log('open');
			if(toSend.length>0)
				sendPending();
			dispatchOpen();
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