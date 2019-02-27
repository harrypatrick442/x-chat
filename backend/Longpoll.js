
module.exports =(function() {
	console.log('running');

	var _Longpoll = function(app){
		EventEnabledBuilder(this);
		var self = this;
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
		this.dispose = function(){
			closed=true;
			if(!currentRequest)return;
			currentRequest.end();
			dispatchDispose();
		};
		function endCurrentRequest(){
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
