var Longpoll = (function(){
	var TIMEOUT=30000;
	var _Longpoll = function(params){
		var self = this;
		var url = params.url;
		var id = params.id;
		console.log('incoming id is: '+id);
		var ajax = new Ajax({url:url});
		var stop=false;
		var started=false;
		var didFirstSend = false;
		var waitingToBeSent = [];
		this.send = function(msg){//issue was caused by multiple sends in parallel before an id got returned.
			if(closed)return;
			if(started||!didFirstSend){
				didFirstSend = true;
				ajax.post({data:JSON.stringify({id:id, msg:msg}), callbackSuccessful:callbackSendSuccessful, callbackFailed:callbackSendError});
			}
			else
				waitingToBeSent.push(msg);
		};
		this.stop=function(){
			stop=true;
		};
		this.dispose=this.stop;
		function poll(){
			console.log('get id is: '+id);
			ajax.get({url:urlPoll, timeout:TIMEOUT, callbackSuccessful:callbackPollSuccessful, callbackFailed:callbackPollError, callbackTimeout:callbackPollTimeout});
		}
		function callbackSendSuccessful(res){
			res = JSON.parse(res);
			console.log(res.id);
			if(started)return
			started=true;
			id = res.id;
			urlPoll = url+'/'+id;
			dispatchGotId(id);
			each(waitingToBeSent, function(msg){
				self.send(msg);
			});
			waitingToBeSent=null;
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
			poll();
			if(res)
				handleMessages(res);
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