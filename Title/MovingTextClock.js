var MovingTextClock = (function(){
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
})();