var MovingText = (function(){
	var _MovingText = function(params){
		window['EventEnabledBuilder'](this);
		var self = this;
		var def = params['default'];
		var currentStr=def?def:'';
		var approximateLength = params['approximateLength'];
		var movingTextClock = new MovingTextClock({'movingText':self, 'extraTicksBeforeStop':approximateLength});
		movingTextClock['onTick'] = onTick;
		movingTextClock['onStopped']=onTimerStopped;
		var items=[];
		var currentItem;
		var currentStartIndexInItem=0;
		fillCurrentString();
		var visibilityWatcher = window['VisibilityWatcher'];
		setTimeout(function(){
			dispatchDisplayString(currentStr);
		}, 0);
		var currentItemIndex=0;
		var tabIsActive = true;
		this['append']=function(movingTextItem){
			if(items.indexOf(movingTextItem)>=0)return;
			items.push(movingTextItem);
			movingTextItem['addEventListener']('dispose', movingTextItemDispose);
			dispatchAdded(movingTextItem);
		};
		this['count']=function(){return items.length;};
		visibilityWatcher['addEventListener']('visibilitychange', visibilityChange);
		function visibilityChange(e){
			console.log(e);
			console.log(e.visible);
			tabIsActive=e.visible;
		}
		function onTick(){
			var str = getNextStringToDisplay();
			currentStr=str;
			dispatchDisplayString(str);
		}
		function onTimerStopped(){
			console.log('onTimerStopped');
			console.log(def);
			if(!def)return;
			currentStr=def;
			fillCurrentString();
			dispatchDisplayString(currentStr);
		}
		function getNextStringToDisplay(){
			var str=currentStr.length>0?currentStr.substr(1, currentStr.length-1):'';
			if(!currentItem)nextItem();
			if(!currentItem)return str+'\u205f';
			while(str.length<approximateLength){
				var lengthLeft = approximateLength - str.length;
				var itemTextLength = currentItem['getLength']();
				if(itemTextLength<=currentStartIndexInItem){
					nextItem();
					if(!currentItem)return str+'\u205f';
					itemTextLength = currentItem['getLength']();
				}
				var strNew = currentItem['getTextRange'](currentStartIndexInItem, lengthLeft);
				currentStartIndexInItem+=strNew.length;
				str+=strNew;
			}
			return str;
		}
		function nextItem(){
			var item;
			var i=0;
			var length= items.length;
			while(i<length){
				if(currentItemIndex<0||currentItemIndex>=items.length)currentItemIndex=0;
				var itemBeingConsidered = items[currentItemIndex];
				var timedOut = itemBeingConsidered['updateTimeout'](getTime());//if item has timed out it will have just been removed from the items with its dispose event.
				if(!timedOut&&tabIsActive){
					item = itemBeingConsidered;
					break;
				}
				i++;
			}
			currentStartIndexInItem=0;
			currentItem = item;
			return item;
		}
		/* upon reading end of the current item, nextItem is called. NextItem calls updateTimeout on any item it considers and in doing so times the item out
		if necessary
		If the item is timed out and none are left currentItem is set to null.
		*/
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
		function fillCurrentString(){
			for(var i=0; i<approximateLength; i++)
				currentStr+='\u205f';
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
})();