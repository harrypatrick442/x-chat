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
			console.log('getText');
			if(length<=text.length)
				return text;
			return text.substr(0, text.length);
			
		};
		this['getTextRange']= function(startIndex, length){
			console.log('getTextRange');
			if(length+startIndex<=text.length)
				return text.substr(startIndex, length);
			return text.substr(startIndex, text.length - startIndex);
				
		};
		this['getLength'] = function(){
			console.log('getLength');
			return text.length;
		};
		this['updateTimeout']=function(now){
			console.log('updateTimeout');
			movingTextLifecycle['setVisible']();
			var timedOut = movingTextLifecycle['updateTimeout'](now);
			if(timedOut){
				self['dispose']();
			}
			return timedOut;
		};
		this['dispose']=function(){
			console.log('dispose');
			if(disposed)return;
			disposed = true;
			dispatchDispose();
		};
		this['getDisposed']= function(){return disposed;};
		function prepareTextSpaces(){
			var nSpacesAtEnd=-1;
			var i = text.length-1;
			var c;
			do{
				if(i<0)break;
				nSpacesAtEnd++;
				c = text.substr(i, 1);
			}while(c==' '||c=='\u205f');
			while(nSpacesAtEnd<3){
				text+='\u205f';
				nSpacesAtEnd++;
			}
			
		}
		function dispatchDispose(){
			console.log('dispatchDispose');
			self['dispatchEvent']({'type':'dispose', 'movingTextItem':self});
		}
	};
	return _MovingTextItem;
})();