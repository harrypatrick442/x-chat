var Mysocket = (function(){
	var MYSOCKET_ID = 'mysocket_id';
	var _Mysocket= function(params){
		var url = params.url;
		var urlWebsocket = params.urlWebsocket;
		EventEnabledBuilder(this);
		var self = this;
		var channel;
		var id;
		var toSend=[];
		var resetting=false;
		this.reset = function(){
			resetting=true;
			id=null;
			toSend=[];
			channel&&channel.dispose();
			channel=null;
			mysocketAnalysis.clear();
		};
		this.send = function(msg){
			resetting=false;
			var channel = getChannel();
			if(channel&&channel.isOpen()){
				channel.send(msg);
				return;
			}
			toSend.push(msg);
		};
		this.getUrl = function(){
			return url;
		};
		var mysocketAnalysis = new MysocketAnalysis({mysocket:this});
		var channelManager = new MysocketChannelManager({mysocketAnalysis:mysocketAnalysis, urlWebsocket:urlWebsocket, url:url, getId:getId});
		channelManager.addEventListener('newchannel', onNewChannel);
		getChannel();
		function callbackOnOpen(){
			dispatchOpen();
		}
		function callbackOnClose(){
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
			console.log(msg);
			console.log(new Error().stack);
			if(msg.type==MYSOCKET_ID){
				id=msg.id;
				return;
			}
			dispatchMessage(msg);
		}
		function onChannelClose(){
			var disposedByServer = channel.getDisposedByServer();
			console.log(disposedByServer);
			channel = null;
			if(disposedByServer)
			{
				dispatchDisposedByServer();
				return;
			}
			if(!resetting)
				setTimeout(getChannel,0);
		}
		function onChannelOpen(){
			console.log('open');
			if(toSend.length>0)
				sendPending();
			else
				sayHiAgain();
			dispatchOpen();
		}
		function onNewChannel(e){
			channel = e.channel;
			prepareChannel(channel);
		}
		function dispatchDisposedByServer(){
			console.log(new Error().stack);
			console.log('dispatchDisposedByServer');
			self.dispatchEvent({type:'disposedbyserver'});
		}
		function sayHiAgain(){
			console.log('sayHiAgain');
					channel&&channel.isOpen()&&channel.send({type:'hi'});
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