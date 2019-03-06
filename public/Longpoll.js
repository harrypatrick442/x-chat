var Longpoll = (function(){
	//var TIMEOUT=30000;
	var _Longpoll = function(params){
		var self = this;
		var url = params.url;
		var id = params.id;
		var count=0;
		console.log('incoming id is: '+id);
		var ajax = new Ajax({url:url});
		var stop=false;
		var started=false;
		var didFirstSend = false;
		var waitingToBeSent = [];
		this.send = function(msg){//issue was caused by multiple sends in parallel before an id got returned.
			console.log('send');
			if(closed)return;
			if(started||!didFirstSend){
				didFirstSend = true;
				ajax.post({data:JSON.stringify({id:id, msg:msg}), callbackSuccessful:callbackSendSuccessful, callbackFailed:callbackSendError});
			}
			else
				waitingToBeSent.push(msg);
		};
		this.stop=function(){
			console.log('stop');
			stop=true;
		};
		this.dispose=this.stop;
		function poll(){
			console.log('poll');
			console.log('get id is: '+id);
			ajax.get({url:urlPoll+getUniqueParameter()/*, timeout:TIMEOUT*/, callbackSuccessful:callbackPollSuccessful, callbackFailed:callbackPollError, callbackTimeout:callbackPollTimeout});
		}
		function getUniqueParameter(){
			return '?t='+count++ +'_'+getTime();
		}
		function getTime(){
			return new Date().getTime();
		}
		function callbackSendSuccessful(res){
			console.log('callbackSendSuccessful');
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
			console.log('callbackSendError');
			console.error(err);
			dispatchOnError(err);
		}
		function callbackPollTimeout(){
			console.log('callbackPollTimeout');
			poll();
		}
		function callbackPollError(err){
			console.log('callbackPollError');
			console.error(err);
			dispatchOnError(err);
			if(stop)return;
			poll();
		}
		function callbackPollSuccessful(res){
			console.log('callbackPollSuccessful');
			poll();
			if(res)
				handleMessages(res);
		}
		function handleMessages(res){
			console.log('handleMessages');
			res = JSON.parse(res);
			each(res.msgs, function(msg){
				dispatchOnMessage(msg);
			});
		}
		function dispatchOnError(err){
			console.log('dispatchOnError');
			console.log(err);
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