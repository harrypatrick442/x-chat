
module.exports =(function() {
	console.log('running');

	var _Longpoll = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var app = params.app;
		var id = params.id;
		var url = params.url;
		var disposed = false;
		var messagesQueue =[];
		var currentRequest;
		var sendScheduled=false;
		app.get(url, function(req, res, next){
			endPreviousRequest();
			currentRequest = new CurrentRequest(req, res);
			if(messagesQueue.length>0)
				scheduleSend();
		});
		this.send = function(msg){
			messagesQueue.push(msg);
			scheduleSend();
		};
		this.getDisposed = function(){
			return disposed;
		};
		this.dispose = function(){
			if(disposed)return;
			disposed=true;
			if(!currentRequest)return;
			currentRequest.end();
			dispatchDispose();
		};
		this.incomingMessage = function(msg){
			self.onMessage(msg);
		};
		this.getId = function(){return id;};
		function endPreviousRequest(){
			if(!currentRequest)return;
			currentRequest.end();
		}
		function scheduleSend(){
			if(sendScheduled)return;
			if(!currentRequest)return;
			setTimeout(send, 0);
		}
		function send(){
			currentRequest.send(messagesQueue);
			messagesQueue=[];
			currentRequest=null;
			sendScheduled=false;
		}
		function dispatchDispose(){
			self.dispatchEvent({type:'dispose', longpoll:self});
		}
	};
	return _Longpoll;
	function CurrentRequest(req, res){
		this.end = function(){
			res.end();
		};
		this.send = function(){
			res.json({msgs:msgs});
		};
	}
})();
