(function(){
	if(!String.prototype.replaceAll)
		String.prototype.replaceAll = function(search, replacement) {
			var target = this;
			return target.replace(new RegExp(search, 'g'), replacement);
		};
})();var MovingText = (function(){
	var _MovingText = function(params){
		window['EventEnabledBuilder'](this);
		var self = this;
		var approximateLength = params['approximateLength'];
		var movingTextClock = new MovingTextClock({'movingText':self, 'extraTicksBeforeStop':approximateLength*2});
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
		this['count']=function(){return items.length;};
		function onTick(){
			var str = getNextStringToDisplay();
			currentStr=str;
			dispatchDisplayString(str);
		}
		function getNextStringToDisplay(){
			var str=currentStr.length>0?currentStr.substr(1, currentStr.length-1):'';
			if(!currentItem)nextItem();
			if(!currentItem)return str+' ';
			while(str.length<approximateLength){
				var lengthLeft = approximateLength - str.length;
				var itemTextLength = currentItem['getLength']();
				if(itemTextLength<=currentStartIndexInItem){
					nextItem();
					if(!currentItem)break;
					itemTextLength = currentItem['getLength']();
				}
				var strNew = currentItem['getTextRange'](currentStartIndexInItem, lengthLeft);
				currentStartIndexInItem+=strNew.length;
				str+=strNew;
			}
			return str;
		}
		function nextItem(){
			var item ;
			var i=0;
			var length= items.length;
			while(i<length){
				if(currentItemIndex<0||currentItemIndex>=items.length)currentItemIndex=0;
				item = items[currentItemIndex];
				var timedOut = item['updateTimeout'](getTime());
				if(!timedOut)break;//if item has timed out it will have just been removed from the items with its dispose event.
				i++;
			}
			currentStartIndexInItem=0;
			currentItem = item;
			return item;
		}
		function movingTextItemDispose(e){
			var movingTextItem = e['movingTextItem'];
			var index = items.indexOf(movingTextItem);
			if(index<0)return;
			if(index<=currentItemIndex)
			{
				currentItemIndex--;
				if(currentItem==movingTextItem)currentItem=null;
			}
			items.splice(index, 1);
			dispatchRemoved(movingTextItem);
		}
		function getTime(){
			return new Date().getTime();
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
		var extraTicksBeforeStop = params['extraTicksBeforeStop'];
		var postponed = true;
		var timer = new window['Timer']({'delay':1000/FREQUENCY, 'callback':tick});
		movingText['addEventListener']('removed', removedMovingText);
		movingText['addEventListener']('added', addedMovingText);
		var stopping = false;
		var ticksBeforeStop=extraTicksBeforeStop;
		function tick(){
			var onTick = self['onTick'];
			if(stopping){
				if((ticksBeforeStop--)<=0){
					timer['stop']();
					return;
				}
			}
			onTick&&onTick();
		}
		function removedMovingText(){
			if(postponed)return;
			if(movingText['count']()>0)return;
			postponed = true;
			ticksBeforeStop=extraTicksBeforeStop;
			stopping=true;
		}
		function addedMovingText(){
			if(!postponed)return;
			timer['start']();
			postponed=false;
			stopping = false;
		}
	};
	return _MovingTextClock;
})();var MovingTextItem = window['MovingTextItem'] = (function(){
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
			console.log('setVisible');
			if(setVisibleAt)return;
			setVisibleAt = getTime();
			console.log(setVisibleAt);
			if(fromVisible&&duration)
				timeoutAt = setVisibleAt+duration;
		};
		this['getTimeoutAt']=function(){
			console.log('getTimeoutAt');
			return timeoutAt;
		};
		this['updateTimeout']=function(now){
			console.log('updateTimeout');
			console.log(timeoutAt);
			if(!timeoutAt)return;
			return now>=timeoutAt;
		};
		function getTime(){
			console.log('getTime');
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
			document.title = '	'+e['str'];
		}
	};
	return _Title;
})();var TitleUI = (function(){
	var _TitleUI = function(title){
		var movingText = new window['MovingText'];
	};
	return _TitleUI;
})();