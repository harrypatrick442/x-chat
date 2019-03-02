var Longpoll = (function(){
	var TIMEOUT=30000;
	var _Longpoll = function(params){
		var self = this;
		var url = params.url;
		var id = params.id;
		var ajax = new Ajax({url:url});
		var stop=false;
		var started=false;
		this.send = function(msg){
			if(closed)return;
			ajax.post({data:JSON.stringify({id:id, msg:msg}), callbackSuccessful:callbackSendSuccessful, callbackFailed:callbackSendError});
		};
		this.stop=function(){
			stop=true;
		};
		this.dispose=this.stop;
		function poll(){
			ajax.get({url:urlPoll, timeout:TIMEOUT, callbackSuccessful:callbackPollSuccessful, callbackFailed:callbackPollError, callbackTimeout:callbackPollTimeout});
		}
		function callbackSendSuccessful(res){
			res = JSON.parse(res);
			if(res.id)
				id = res.id;
			urlPoll = url+'/'+id;
			dispatchGotId(id);
			if(started)return
			started=true;
			poll();
		}
		function callbackSendError(err){
			console.error(err);
			dispatchOnError(err);
		}
		function callbackPollTimeout(){
			poll();
		}
		function callbackPollError(err){
			console.error(err);
			dispatchOnError(err);
			if(stop)return;
			poll();
		}
		function callbackPollSuccessful(res){
			if(res)
				handleMessages(res);
			poll();
		}
		function handleMessages(res){
			res = JSON.parse(res);
			each(res.msgs, function(msg){
				dispatchOnMessage(msg);
			});
		}
		function dispatchOnError(err){
			self.onError&&self.onError(err);
		}
		function dispatchOnMessage(msg){
			self.onMessage&&self.onMessage(msg);
		}
		function dispatchGotId(id){
			self.onGotId&&self.onGotId(id);
		}
	};
	return _Longpoll;
})();