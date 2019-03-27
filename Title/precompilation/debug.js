var MovingText = (function(){
	var _MovingText = function(params){
		window['EventEnabledBuilder'](this);
		var self = this;
		var approximateLength = params['approximateLength'];
		var movingTextClock = new MovingTextClock({'movingText':self});
		movingTextClock['onTick'] = onTick;
		var items=[];
		var currentItem;
		var currentStartIndexInItem=0;
		var currentStr='';
		var currentItemIndex=0;
		this['append']=function(movingTextItem){
			if(items.indexOf(movingTextItem)>=0)return;
			items.push(movingTextItem);
			movingTextItem['addEventListener']('dispose', movingTextItemDispose);
			dispatchAdded(movingTextItem);
		};
		function onTick(){
			var str = getNextStringToDisplay();
			currentStr=str;
			dispatchDisplayString(str);
		}
		function getNextStringToDisplay(){
			var str=currentStr.length>0?currentStr.substr(1, currentStr.length-1):'';
			if(!currentItem)currentItem = nextItem();
			if(!currentItem)return str+=' ';
			while(str.length<approximateLength){
				var lengthLeft = approximateLength - str.length;
				var itemTextLength = currentItem['getLength']();
				if(itemTextLength<=currentStartIndexInItem){
					nextItem();
					itemTextLength = currentItem['getLength']();
				}
				var strNew = currentItem['getTextRange'](currentStartIndexInItem, lengthLeft);
				currentStartIndexInItem+=strNew.length;
				str+=strNew;
			}
			console.log(str);
			return str;
		}
		function nextItem(){
			if(currentItemIndex<0||currentItemIndex>=items.length)
				currentItemIndex=0;
			currentStartIndexInItem=0;
			return items[currentItemIndex];
		}
		function movingTextItemDispose(movingTextItem){
			var index = items.indexOf(movingTextItem);
			if(index<0)return;
			if(index<=currentItemIndex)
				currentItemIndex--;
			items.splice(index, 1);
			dispatchRemoved(movingTextItem);
		}
		function dispatchAdded(movingTextItem){
			self['dispatchEvent']({'type':'added', 'movingTextItem':movingTextItem});
		}
		function dispatchRemoved(movingTextItem){
			self['dispatchEvent']({'type':'removed', 'movingTextItem':movingTextItem});
		}
		function dispatchDisplayString(str){
			self['dispatchEvent']({'type':'displaystring', 'str':str});
		}
	};
	return _MovingText;
})();var MovingTextClock = (function(){
	var FREQUENCY=9;
	var _MovingTextClock = function(params){
		var self = this;
		var movingText = params['movingText'];
		var postponed = true;
		var timer = new window['Timer']({'delay':1000/FREQUENCY, 'callback':tick});
		movingText['addEventListener']('removed', removedMovingText);
		movingText['addEventListener']('added', addedMovingText);
		function tick(){
			var onTick = self['onTick'];
			onTick&&onTick();
		}
		function removedMovingText(){
			if(postponed)return;
			if(movingText['count']()>0)return;
			timer['stop']();
			postponed = true;
		}
		function addedMovingText(){
			if(!postponed)return;
			timer['start']();
			postponed=false;
		}
	};
	return _MovingTextClock;
})();var MovingTextItem = window['MovingTextItem'] = (function(){
	var _MovingTextItem = function(params){
		console.log(params);
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
})();var MovingTextLifecycle = window['MovingTextLifecycle'] = (function(){
	var _MovingTextLifecycle = function(params){
		var fromVisible = params['fromVisible'];
		var duration = params['duration'];
		var createdAt = getTime();
		var setVisibleAt;
		var timeoutAt;
		if(!fromVisible&&duration)
			timeoutAt = createdAt+duration;
		this['getVisible']=function(){ return setVisibleAt?true:false;};
		this['setVisible']=function(){
			setVisibleAt = getTime();
			if(fromVisible&&duration)
				timeoutAt = setVisibleAt+duration;
		};
		this['getTimeoutAt']=function(){
			return timeoutAt;
		};
		function getTime(){
			return new Date().getTime();
		}
	};
	_MovingTextLifecycle['default']=function(){
		return new _MovingTextLifecycle({'fromVisible':true, 'duration':10000});
	};
	return _MovingTextLifecycle;
})();window['Title'] = (function(){
	var _Title = function(params){
		window['EventEnabledBuilder'](this);
		var self = this;
		var movingText = new MovingText({'approximateLength':50});
		this['add']= function(a){
			if(typeof(a)=='string')
				showString(a);
			else
				showMovingTextItem(a);
		};
		movingText['addEventListener']('displaystring', displayString);
		function showString(str){
			var movingTextItem = new MovingTextItem({text:str});
			showMovingTextItem(movingTextItem);
		}
		function showMovingTextItem(movingTextItem){
			movingText.append(movingTextItem);
		}
		function displayString(e){
			console.log(e);
			document.title = '|'+e['str'];
		}
	};
	return _Title;
})();var TitleUI = (function(){
	var _TitleUI = function(title){
		var movingText = new window['MovingText'];
	};
	return _TitleUI;
})();