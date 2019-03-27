var MovingText = (function(){
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
})();