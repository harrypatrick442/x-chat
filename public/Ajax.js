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
		var url = params.url;
		var data = params.data;
		var parameters = params.parameters;
		var callbackSuccessful = params.callbackSuccessful;
		var callbackFailed= params.callbackFailed;
		var contentType = params.contentType?params.contentType:DEFAULT_CONTENT_TYPE;
		var xhr = new XMLHttpRequest();
		xhr.open('POST', url, true);
		xhr.setRequestHeader('Content-Type', contentType);
		addUrlParameters(url, parameters);
		return new Handle(xhr, data, callbackSuccessful, callbackFailed);
	};
	_Ajax.get= function(params){
		var url = params.url;
		var data = params.data;
		var parameters = params.parameters;
		var callbackSuccessful = params.callbackSuccessful;
		var callbackFailed= params.callbackFailed;
		var contentType = params.contentType?params.contentType:DEFAULT_CONTENT_TYPE;
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);
		xhr.setRequestHeader('Content-Type', contentType);
		addUrlParameters(url, parameters);
		return new Handle(xhr, undefined, callbackSuccessful, callbackFailed);
	};
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
	function Handle(xhr, data, callbackSuccessful, callbackFailed){
		var self = this;
		var successful;
		xhr.onload = function() {
			if (xhr.readyState === 4)
			{
				if(xhr.status === 200) {
					console.log('status 200');
					successful = true;
					done();
					console.log(xhr.responseText);
					console.log(callbackSuccessful);
					callbackSuccessful&&callbackSuccessful(xhr.responseText);
					return;
				}
				successful= false;
				console.log('Request failed.  Returned status of ' + xhr.status);
				done();
				callbackFailed&&callbackFailed();
			}
		};
		xhr.onprogress = onProgress;
		xhr.send(data);
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
		function onProgress(e){
			self.onProgress&&self.onProgress(e.total?(e.loaded/e.total):1);
		}
	}
	return _Ajax;
})();