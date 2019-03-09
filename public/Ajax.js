var Ajax = (function(){
	
	var DEFAULT_CONTENT_TYPE='application/json';
	var _Ajax= function(params){
		var url = params.url;
		this.post = function(params){
			params.url = params.url?params.url:url;
			return _Ajax.post(params);
		};
		this.get = function(params){
			params.url = params.url?params.url:url;
			return _Ajax.get(params);
		};
	};
	_Ajax.post= function(params){
		return ajax(params, true);
	};
	_Ajax.get= function(params){
		return ajax(params, false);
	};
	function ajax(params, isPost){var url = params.url;
		var parameters = params.parameters;
		var callbackSuccessful = params.callbackSuccessful;
		var callbackFailed= params.callbackFailed;
		var callbackTimeout = params.callbackTimeout;
		var contentType = params.contentType?params.contentType:DEFAULT_CONTENT_TYPE;
		var timeout = params.timeout;
		var xhr = new XMLHttpRequest();
		xhr.open(isPost?'POST':'GET', url, true);
		if(timeout)
			xhr.timeout=timeout;
		xhr.setRequestHeader('Content-Type', contentType);
		addUrlParameters(url, parameters);
		return new Handle(xhr, isPost?params.data:undefined, callbackSuccessful, callbackFailed, callbackTimeout);
	}
	function addUrlParameters(url, parameters){
		if(!parameters)return url;
		var first=true;
		for(var key in parameters){
			if(first)first=false;else url+='&';
			url+=key;
			url+='=';
			url+=value;
		}
		return url;
	}
	var gcount=0;
	function Handle(xhr, data, callbackSuccessful, callbackFailed, callbackTimeout){
		var count = gcount++;
		var self = this;
		var successful;
		xhr.onload = function() {
			if (xhr.readyState === 4)
			{
				if(xhr.status === 200) {
					successful = true;
					done();
					callbackSuccessful&&callbackSuccessful(xhr.responseText);
					return;
				}
				successful= false;
				console.log('Request failed.  Returned status of ' + xhr.status);
				done();
				callbackFailed&&callbackFailed();
			}
		};
		if(callbackTimeout)
			xhr.ontimeout = callbackTimeout;
		xhr.onprogress = onProgress;
		xhr.send(data);
		xhr.onerror=onError;
		this.getXhr = function(){
			return xhr;
		};
		this.abort = xhr.abort;
		this.getSuccessful = function(){
			return successful;
		};
		function done(){
			self.onDone&&self.onDone(self);
		}
		function onError(e){
			console.log(e);
			console.log(callbackFailed);
			callbackFailed&&callbackFailed(e);
		}
		function onProgress(e){
			self.onProgress&&self.onProgress(e.total?(e.loaded/e.total):1);
		}
	}
	return _Ajax;
})();