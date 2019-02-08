var Ajax = (function(){
	
	const DEFAULT_CONTENT_TYPE='application/json';
	var _Ajax= function(url){
		this.post = function(params){
			params.url = url?url:params.url;
			_Ajax.post(params);
		};
	};
	_Ajax.post= function(params){
		var url = params.url;
		var body = params.body;
		var callbackSuccessful = params.callbackSuccessful;
		var callbackFailed= params.callbackFailed;
		var contentType = params.contentType?params.contentType:DEFAULT_CONTENT_TYPE;
		var xhr = new XMLHttpRequest();
		xhr.open('POST', url, true);
		xhr.setRequestHeader('Content-Type', contentType);
		xhr.onload = function() {
			if (xhr.readyState === 4)
			{
				console.log(xhr);
				if(xhr.status === 200) {
					var jObjectResponse = JSON.parse(xhr.responseText);
					callbackSuccessful(jObjectResponse);
					return;
				}
				console.log('Request failed.  Returned status of ' + xhr.status);
				callbackFailed&&callbackFailed();
			}
		};
		xhr.send(body);
		return xhr;
	};
	return _Ajax;
})();