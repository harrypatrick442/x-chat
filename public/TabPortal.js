var TabPortal = new (function () {
	var mappedSets=new MappedSets();
	var broadcastChannel = new BroadcastChannel('x-chat');
	var _TabPortal = function(params){
		var id = params.id;
		var sendInOwnTab=params.sendInOwnTab;
		var receiveInOwnTab = params.receiveInOwnTab;
		EventEnabledBuilder(this);
		var self = this;
		this.sendMessage = function(message){
			console.log('send');
			console.log(message);
			sendMessage(id, message);
		};
		this.dispose = function(){
			mappedSets.remove(id, self);
			dispatchClosed();
		};
		mappedSets.add(id, new Instance(self, receivedMessage));
		function receivedMessage(msg){
			dispatchMessage(msg);
		}
		function dispatchMessage(message){
			self.dispatchEvent({type:'message', message:message});
		}
		function dispatchClosed(){
			self.dispatchEvent({type:'closed'});
		}
	};
	function Instance(tabPortal, receivedMessage){
		this.receivedMessage = receivedMessage;
	}
	broadcastChannel.onmessage=gotMessage;
	return _TabPortal;
	function gotMessage(e){
		var data = e.data;
		if(!data.id)return;
		var instances = mappedSets.getList(data.id);
		if(!instances)return;
		instances.each(function(x){ return x.receivedMessage(data.message);});
	}
	function sendMessage(id, message){
		broadcastChannel.postMessage({id:id, message:message});
	}
})();