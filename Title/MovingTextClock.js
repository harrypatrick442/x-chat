var MovingTextClock = (function(){
	var FREQUENCY=4;
	var _MovingTextClock = function(params){
		var self = this;
		var movingText = params['movingText'];
		var postponed = true;
		var timer = new window['Timer']({'delay':1000/FREQUENCY, 'callback':tick});
		movingText['addEventListener']('removed', removedMovingText);
		movingText['addEventListener']('added', addedMovingText);
		function tick(){
			self.onTick&&self.onTick();
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
})();