var Longpolling = (function(){
	var _Longpolling = function(){
		var self = this;
		var url = params.url;
		var id = params.id;
		var ajax = new Ajax({url:url});
		var stop=false;
		this.send = function(msg){
			if(closed)return;
			data.id = id;
			data.msg = msg;
			ajax.post({data:JSON.stringify(data)}, callbackSendSuccessful);
		};
		this.stop=function(){
			stop=true;
		};
		this.dispose=this.stop;
		function poll(){
			ajax.get({url:urlPoll, callbackSuccessful:callbackPollSuccessful, callbackError:callbackPollError});
		}
		function callbackSendSuccessful(res){
			res = JSON.parse(res);
			if(res.id)
				id = res.id;
			urlPoll = url+'/'+id;
			dispatchGotId(id);
			poll();
		}
		function callbackSendError(err){
			console.error(err);
			dispatchOnError(err);
		}
		function callbackPollError(){
			console.error(err);
			dispatchOnError(err);
			if(stop)return;
			poll();
		}
		function callbackPollSuccessful(res){
			console.log(res);
			var msg = JSON.parse(res.data);
			dispatchOnMessage(msg);
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
	return _Longpolling;
})();