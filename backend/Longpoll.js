	
module.exports =(function() {
	console.log('running');
	var EventEnabledBuilder=require('./EventEnabledBuilder');
	var _Longpoll = function(params){
		console.log(new Error().stack);
		EventEnabledBuilder(this);
		var self = this;
		var app = params.app;
		var id = params.id;
		var url = params.url;
		var disposed = false;
		var messagesQueue =[];
		var currentRequest;
		var sendScheduled=false;
		var lastActive;
		active();
		app.get(url+'/'+id, function(req, res, next){
			active();
			console.log('polling');
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
		this.getLastActive = function(){
			return lastActive;
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
			sendScheduled=true;
		}
		function send(){
			console.log(messagesQueue);
			currentRequest.send(messagesQueue);
			messagesQueue=[];
			currentRequest=null;
			sendScheduled=false;
		}
		function dispatchDispose(){
			self.dispatchEvent({type:'dispose', longpoll:self});
		}
		function active(){
			lastActive = getTime();
		}
	};
	return _Longpoll;
	function getTime(){return new Date().getTime();}
	function CurrentRequest(req, res){
		this.end = function(){
			res.end();
		};
		this.send = function(msgs){
			res.json({msgs:msgs});
		};
	}
})();
