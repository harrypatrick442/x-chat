var Ajax = (function(){
	var _Ajax= function(url){
		this.post = function(obj, callbackSuccessful, callbackFailed){
			_Ajax.post(url, obj, callbackSuccessful, callbackFailed);
		};
	};
	_Ajax.post= function(url, obj, callbackSuccessful, callbackFailed){
		var xhr = new XMLHttpRequest();
		xhr.open('POST', url, true);
		xhr.setRequestHeader('Content-Type', 'application/json');
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
				if(callbackFailed)callbackFailed();
			}
		};
		xhr.send(JSON.stringify(obj));
	};
	return _Ajax;
})();