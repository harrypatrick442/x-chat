var Mysocket = (function(){
	var _Mysocket= function(params){
		var url = params.url;
		var urlWebsocket = params.urlWebsocket;
		EventEnabledBuilder(this);
		var self = this;
		var channel;
		var id=1;
		var toSend=[];
		getChannel();
		this.send = function(msg){
			if(channel&&channel.isOpen()){
				channel.send(msg);
				return;
			}
			toSend.push(msg);
		};
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
			console.log('onopen dispatched');
			self.dispatchEvent({type:'onopen'});
		}
		function dispatchOnClose(){
			self.dispatchEvent({type:'onclose'});
		}
		function getChannel(){
			if(channel)return channel;
			channel = MysocketChannelFactory.create({id:id, urlWebsocket:urlWebsocket});
			channel.onClose = onClose;
			channel.onOpen = onOpen;
			channel.onMessage = onMessage;
		}
		function onMessage(msg){
			dispatchOnMessage(msg);
		}
		function onClose(){
			channel = null;
		}
		function onOpen(){
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
	return _Mysocket;
})();