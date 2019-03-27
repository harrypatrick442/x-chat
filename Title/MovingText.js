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
			var item = items[currentItemIndex];
			item['setVisible']();
			return item;
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
})();