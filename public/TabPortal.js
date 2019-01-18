var TabPortal = new (function () {
	var mappedLists=new MappedLists();
	var _TabPortal = function(params){
		var id = params.id;
		EventEnabledBuilder(this);
		var self = this;
		this.sendMessage = function(){
			window.postMessage({});
		};
		this.dispose = function(){
			mappedLists.remove(id, self);
		};
		mappedLists.add(new Instance(self, receivedMessage));
		function receivedMessage(msg){
			
		}
		function dispatchReceivedMessage(){
			self.dispatchEvent({type:'received', message:message});
		}
	};
	function Instance(tabPortal, receivedMessage){
		this.receivedMessage = receivedMessage;
	}
	window.addEventListener('message', gotMessage);
	return _TabPortal;
	function gotMessage(e){
		var msg = e.data;
		if(!msg.id)return;
		var tabPortals = mappedLists.getList(msg.id);
		if(!tabPortals)return;
		each(tabPortals, function(tabPortal){
			tabPortal
		});
	}
	function getInstances(id){
		
	}
	function addInstance(id, instance){
		var instances = mapIdToInstance[id];
		if(!instances){
			mapIdToInstance[id]=[instance];
			return;
		}
		if(
	}
})();