var MovingTextItem = window['MovingTextItem'] = (function(){
	var _MovingTextItem = function(params){
		window['EventEnabledBuilder'](this);
		var self = this;
		var text = params['text'];
		var movingTextLifecycle = params['lifecycle'];
		if(!movingTextLifecycle)
			movingTextLifecycle= new MovingTextLifecycle['default']();
		prepareTextSpaces();
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
		this['getLength'] = function(){
			return text.length;
		};
		this['updateTimeout']=function(now){
			movingTextLifecycle['setVisible']();
			var timedOut = movingTextLifecycle['updateTimeout'](now);
			if(timedOut){
				self['dispose']();
			}
			return timedOut;
		};
		this['dispose']=function(){
			if(disposed)return;
			disposed = true;
			dispatchDispose();
		};
		this['getDisposed']= function(){return disposed;};
		function prepareTextSpaces(){
			var c;
			while((c = text.substr(text.length-1, 1))==' '||c =='\u2063')
				text=text.substr(0, text.length-1);
			text+='\u205f\u205f\u205f';
			text = text.replaceAll(' ', '\u205f');
		}
		function dispatchDispose(){
			self['dispatchEvent']({'type':'dispose', 'movingTextItem':self});
		}
	};
	return _MovingTextItem;
})();