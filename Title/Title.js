window['Title'] = (function(){
	var _Title = function(params){
		window['EventEnabledBuilder'](this);
		var self = this;
		var movingText = new MovingText({'approximateLength':70,'default':params['default']});
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
			document.title = '\u2063'+e['str'];
		}
	};
	return _Title;
})();