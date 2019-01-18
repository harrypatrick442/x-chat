var TabPortal = new (function () {
	var mappedLists=new MappedLists();
	var _TabPortal = function(params){
		var id = params.id;
		var sendInOwnTab=params.sendInOwnTab;
		var receiveInOwnTab = params.receiveInOwnTab;
		EventEnabledBuilder(this);
		var self = this;
		this.sendMessage = function(msg){
			sendMessage(id, message);
		};
		this.dispose = function(){
			mappedLists.remove(id, self);
			dispatchClosed();
		};
		mappedLists.add(new Instance(self, receivedMessage));
		function receivedMessage(msg){
			dipatchMessage(msg);
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
	window.addEventListener('message', gotMessage);
	return _TabPortal;
	function gotMessage(e){
		var data = e.data;
		if(!data.id)return;
		var instances = mappedLists.getList(data.id);
		if(!instances)return;
		instances.each(x=>x.receivedMesage(data.message));
	}
	function sendMessage(id, message){
		window.postMessage({id:id, message:message});
	}
})();