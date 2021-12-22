
	var DEFAULT_CONTENT_TYPE='application/json';
	const Ajax= function(params){
		const{ url} = params;
		this.post = function(params){
			params.url = params.url?params.url:url;
			return Ajax.post(params);
		};
		this.get = function(params){
			params.url = params.url?params.url:url;
			return Ajax.get(params);
		};
	};
	Ajax.post= function(params){
		return ajax(params, true);
	};
	Ajax.get= function(params){
		return ajax(params, false);
	};
	function ajax(params, isPost){
		var url = params.url;
		var {parameters, timeout}= params;
		var contentType = params.contentType?params.contentType:DEFAULT_CONTENT_TYPE;
		var xhr = new XMLHttpRequest();
		url = addUrlParameters(url, parameters);
		xhr.open(isPost?'POST':'GET', url, true);
		if(timeout) xhr.timeout=timeout;
		xhr.setRequestHeader('Content-Type', contentType);
		return new Handle(xhr, isPost?params.data:undefined);
	}
	function addUrlParameters(url, parameters){
		if(!parameters)return url;
		var first=true, timedOut=false;
		console.log(parameters);
		for(var key of Object.keys(parameters)){
			if(first){
				url+='?';
				first=false;
			}else url+='&';
			url+=key;
			url+='=';
			url+=parameters[key];
		}
		return url;
	}
	function Handle(xhr, data){
		var self = this;
		var doneCallback = false;
		var successful, error = null;
		let callbackThen = null, callbackCatch = null;
		xhr.onload = function() {
			if (xhr.readyState === 4)
			{
				if(xhr.status === 200) {
					successful = true;
					done();
					doneCallback=true;
					callbackThen&&callbackThen(self);
					return;
				}
				successful= false;
				console.log('Request failed.  Returned status of ' + xhr.status);
				done();
				onError(new Error('Bad status code '+xhr.status));
			}
		};
		xhr.ontimeout = onTimeout;
		xhr.onprogress = onProgress;
		xhr.send(data);
		xhr.onerror=onError;
		self.then = function(callback){
			callbackThen = callback;
			return self;
		};
		self.catch = function(callback){
			callbackCatch = callback;
			return self;
		};
		self.getXhr = function(){
			return xhr;
		};
		self.abort = xhr.abort;
		self.getSuccessful = function(){
			return successful;
		};
		self.getResponse= function(){
			return xhr.responseText;
		};
		self.getError= function(){
			return error;
		};
		self.getTimedOut = function(){
			return timedOut;
		};
		function done(){
			self.onDone&&self.onDone(self);
		}
		function onError(e){
			error = e;
			console.error(e);
			if(doneCallback)return;
			callbackCatch&&callbackCatch(self);
		}
		function onTimeout(){
			timedOut = true;
			onError(new Error('Timed out'));
		}
		function onProgress(e){
			self.onProgress&&self.onProgress(e.total?(e.loaded/e.total):1);
		}
	}