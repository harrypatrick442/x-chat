module.exports = new (function(){
	var each = require('./each');
	var mapIdToHandles = {};
	this.add = function(method, id, callback){
		var handles = mapIdToHandles[id];
		if(!handles){
			var handle = new Handle(id, method, callback, remove);
			handles = [handle];
			mapIdToHandles[id]=handles;
			return handle;
		}
		var handle = getHandleForMethod(handles, method);
		if(handle){
			handle.addCallback(callback);
			return;
		}
		var handle = new Handle(id, method, callback, remove);
		handles.push(handle);
		return handle;
	};
	function remove(id, handle){
		var handles = mapIdToHandles[id];
		if(!handles)return;
		var index = handles.indexOf(handle);
		if(index<0)return;
		handles.splice(index, 1);
	}
	function getHandleForMethod(handles, method){
		for(var i=0,handle; handle = handles[i]; i++){
			if(handle.getMethod()==method)
				return handle;
		}
	}
	function Handle(id, method, callback, remove){
		var self = this;
		var callbacks = callback?[callback]:[];
		this.getMethod = function(){return method;};
		this.call= function(a, b, c){
			remove(id, self);
			each(callbacks, function(callback){
				callback(a, b, c);
			});
		};
		this.addCallback = function(callback){
			if(!callback)return;
			if(callbacks.indexOf(callback)>=0)return;
			callbacks.push(callback);
		};
	}
})();