var Longpoll = (function(){
	//var TIMEOUT=30000;
	var _Longpoll = function(params){
		var self = this;
		var url = params.url;
		var id = params.id;
		var count=0;
		var ajax = new Ajax({url:url});
		var disposed=false;
		var started=false;
		var didFirstSend = false;
		var disposedByServer = false;
		var waitingToBeSent = [];
		this.send = function(msg){//issue was caused by multiple sends in parallel before an id got returned.
			if(disposed)return;
			if(started||!didFirstSend){
				didFirstSend = true;
				ajax.post({data:JSON.stringify({id:id, msg:msg}), callbackSuccessful:callbackSendSuccessful, callbackFailed:callbackSendError});
			}
			else
				waitingToBeSent.push(msg);
		};
		this.getDisposedByServer = function(){return disposedByServer;};
		this.dispose=function(){
			if(disposed)return;
			disposed=true;
			dispatchOnDispose();
		};
		function poll(){
			ajax.get({url:urlPoll+getUniqueParameter()/*, timeout:TIMEOUT*/, callbackSuccessful:callbackPollSuccessful, callbackFailed:callbackPollError, callbackTimeout:callbackPollTimeout});
		}
		function getUniqueParameter(){
			return '?t='+count++ +'_'+getTime();
		}
		function getTime(){
			return new Date().getTime();
		}
		function callbackSendSuccessful(res){
			console.log(res);
			res = JSON.parse(res);
			if(res.disposed)
			{
				self.dispose();
				return;
			}
			if(started)return;
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
			if(disposed)return;
			poll();
		}
		function callbackPollSuccessful(res){
			poll();
			if(!res)
				return;
			
			res = JSON.parse(res);
			if(res.disposed){
				self.dispose();
			}
			handleMessages(res);
		}
		function handleMessages(res){
			if(!res.msgs)return;
			each(res.msgs, function(msg){
				dispatchOnMessage(msg);
			});
		}
		function dispatchOnDispose(){
			self.onDispose&&self.onDispose();
		}
		function dispatchOnError(err){
			self.onError&&self.onError(err);
		}
		function dispatchOnMessage(msg){
			console.log(msg);
			self.onMessage&&self.onMessage(msg);
		}
		function dispatchGotId(id){
			console.log('dispatchGotId');
			self.onGotId&&self.onGotId(id);
		}
	};
	return _Longpoll;
})();