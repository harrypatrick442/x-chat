	

var EventEnabledBuilder=require('./EventEnabledBuilder');
const Longpoll = function(params){
	EventEnabledBuilder(this);
	var self = this;
	const{ app , id, url, corsFunction}= params;
	var disposed = false;
	var messagesQueue =[];
	var currentRequest;
	var sendScheduled=false;
	var lastActive;
	removeGet();
	active();
	console.log('longpoll url is '+getUrl());
	app.get(getUrl(), function(req, res, next){
		console.log('GOT LONGPOLL REQUEST');
		active();
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
		currentRequest&&currentRequest.send([{disposed:true}]);
		removeGet();
		dispatchDispose();
	};
	this.incomingMessage = function(msg){
		self.onMessage(msg);
	};
	this.getId = function(){return id;};
	function removeGet(){
		if(!id)return;
		var url = getUrl();
		var stack = app._router.stack;
		var i=0;
		while(i<stack.length){
			var layer = stack[i];
			if(layer.path ==   url){
				stack.splice(i, 1);
			}
			else
			i++;
		}
	}
	function endPreviousRequest(){
		currentRequest&&currentRequest.end();
	}
	function scheduleSend(){
		if(sendScheduled)return;
		if(!currentRequest)return;
		setTimeout(send, 0);
		sendScheduled=true;
	}
	function send(){
		if(!currentRequest)return;
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
	function getUrl(){
		return url+'/'+id;
	}
};
module.exports = Longpoll;
function getTime(){return new Date().getTime();}
function CurrentRequest(req, res){
	this.end = function(){
		res.end();
	};
	this.send = function(msgs){
		res.json({msgs:msgs});
	};
}
