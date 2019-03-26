var MovingText = (function(){
	var _MovingText = function(params){
		var approximateLength = params['approximateLength'];
		var items=[];
		this['append']=function(movingTextItem){
			if(items.indexOf(movingTextItem)>=0)return;
			items.push(movingTextItem);
		};
	};
})();var MovingTextClock = (function(){
	var _MovingTextClock = function(params){
		
	};
})();window['MovingTextItem'] = (function(){
	var _MovingTextItem = function(params){
		var text = params['text'];
		this['getText']= function(){
			return text;
		};
	};
})();window['Title'] = (function(){
	var _Title = function(params){
		window['EventEnabledBuilder'](this);
		var self = this;
		var movingText = new MovingText();
		this['show']= function(a){
			if(typeof(a)=='string')
				showString(a);
			
		};
		function showString(str){
			var movingTextItem = new MovingTextItem({text:str});
			showMovingTextItem(movingTextItem);
		}
		function showMovingTextItem(movingTextItem){
			movingText.append(movingTextItem);
		}
	};
})();var TitleUI = (function(){
	var _TitleUI = function(title){
		var movingText = new window['MovingText'];
	};
})();