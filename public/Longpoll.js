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
		var urlPoll;
		const currentAjaxHandles = [];
		this.send = function(msg){//issue was caused by multiple sends in parallel before an id got returned.
			if(disposed)return;
			if(started||!didFirstSend){
				console.log('started is '+started);
				didFirstSend = true;
				const ajaxHandle = ajax.post({data:JSON.stringify({id:id, msg:msg})});
				ajaxHandle.then(pollSuccessful)
					.catch(pollFailed);
			}
			else{
				console.log('adding to waiting to be sent');
				console.log(msg);
				waitingToBeSent.push(msg);
			}
		};
		this.getDisposedByServer = function(){return disposedByServer;};
		this.dispose=function(){
			if(disposed)return;
			disposed=true;
			dispatchOnDispose();
		};
		function poll(){
			console.log(new Error().stack);
			console.log(urlPoll);
			if(currentAjaxHandles.length>0)return;
			const ajaxHandle = ajax.get({url:urlPoll+getUniqueParameter()/*, timeout:TIMEOUT*/});
			addAjaxHandle(ajaxHandle);
			ajaxHandle.then(pollSuccessful)
				.catch(pollFailed);
		}
		function getUniqueParameter(){
			return '?t='+count++ +'_'+getTime();
		}
		function getTime(){
			return new Date().getTime();
		}
		function pollSuccessful(ajaxHandle){
			removeAjaxHandle(ajaxHandle);
			let res = ajaxHandle.getResponse();
			res = JSON.parse(res);
			console.log(res);
			handleMessages(res);
			if(res.disposed)
			{
				disposedByServer = true;
				self.dispose();
				return;
			}
			if(started){
				poll();
				return;
			}
			started=true;
			id = res.id;
			urlPoll = url+'/'+id;
			dispatchGotId(id);
			each(waitingToBeSent, function(msg){
				self.send(msg);
			});
			waitingToBeSent=[];
			poll();
		}
		function callbackSendError(err){
			console.error(err);
			dispatchOnError(err);
		}
		function callbackPollTimeout(){
			poll();
		}
		function pollFailed(ajaxHandle){
			removeAjaxHandle(ajaxHandle);
			const err = ajaxHandle.getError();
			console.error(err);
			dispatchOnError(err);
			if(disposed)return;
			poll();
		}
		function addAjaxHandle(ajaxHandle){
			currentAjaxHandles.push(ajaxHandle);
		}
		function removeAjaxHandle(ajaxHandle){
			const index = currentAjaxHandles.indexOf(ajaxHandle);
			if(index<0)return;
			currentAjaxHandles.splice(index, 1);
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