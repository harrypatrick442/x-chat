var MovingTextItem = window['MovingTextItem'] = (function(){
	var _MovingTextItem = function(params){
		window['EventEnabledBuilder'](this);
		var self = this;
		var text = params['text'];
		var movingTextLifecycle = params['lifecycle'];
		if(!movingTextLifecycle)
			movingTextLifecycle= new MovingTextLifecycle['default']();
		while(text.length>0&&text.substr(text.length-1, 1)==' ')
			text = text.substr(0, text.length-2);
		text+='\u205f\u205f\u205f';
		var disposed = false;
		this['getText']= function(length){
			if(length<=text.length)
				return text;
			return text.substr(0, text.length);
			
		};
		this['getTextRange']= function(startIndex, length){
			if(length+startIndex<=text.length)
				return text.substr(startIndex, length);
			return text.substr(startIndex, text.length - startIndex);
				
		};
		this['dispose']=function(){
			disposed = true;
			dispatchDispose();
		};
		this['getLength'] = function(){
			return text.length;
		};
		this['getDisposed']= function(){return disposed;};
		function dispatchDispose(){
			self['dispatchDispose']({'type':'dispose', 'movingTextItem':self});
		}
	};
	return _MovingTextItem;
})();