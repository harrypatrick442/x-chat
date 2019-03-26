window['Title'] = (function(){
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
})();