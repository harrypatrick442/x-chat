module.exports = new (function(){
	var mapIdToMethods = {};
	this.add = function(method, id, callback){
		var handles = mapIdToHandles[id];
		if(!handles){
			handles = [new Handle(id, method, callback)];
			return 
		}
		var handle = getHandleForMethod(handles, method);
		if(handle){
			handle.addCallback(callback);
			return;
		}
		handles.push(new Handle(id, method, callback));
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
		var callbacks = [callback];
		this.getMethod = function(){return method;};
		this.call= function(){
			each(callbacks, function(callback){
				callback();
			});
			remove(id, handle);
		};
		this.addCallback = function(callback){
			if(callbacks.indexOf(callback)>=0)return;
			callbacks.push(callback);
		};
	}
})();