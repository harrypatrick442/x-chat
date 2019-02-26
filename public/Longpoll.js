var Longpoll = (function(){
	var _Longpoll = function(params){
		var self = this;
		var url = params.url;
		var id = params.id;
		var ajax = new Ajax({url:url});
		var stop=false;
		this.send = function(msg){
			if(closed)return;
			ajax.post({data:JSON.stringify({id:id, msg:msg}), callbackSuccessful:callbackSendSuccessful, callbackFailed:callbackSendError});
		};
		this.stop=function(){
			stop=true;
		};
		this.dispose=this.stop;
		function poll(){
			console.log('polling');
			console.log(urlPoll);
			ajax.get({url:urlPoll, callbackSuccessful:callbackPollSuccessful, callbackFailed:callbackPollError});
		}
		function callbackSendSuccessful(res){
			res = JSON.parse(res);
			if(res.id)
				id = res.id;
			urlPoll = url+'/'+id;
			console.log('id is: '+id);
			dispatchGotId(id);
			poll();
		}
		function callbackSendError(err){
			console.error(err);
			dispatchOnError(err);
		}
		function callbackPollError(err){
			console.error(err);
			dispatchOnError(err);
			if(stop)return;
			//poll();
		}
		function callbackPollSuccessful(res){
			console.log(typeof(JSON.parse(res)));
			dispatchOnMessage(JSON.parse(res));
			poll();
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