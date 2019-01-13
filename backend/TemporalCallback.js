exports.TemporalCallback = (function(){
	var Timer = require('./Timer').Timer;
	var _TemporalCallback = function(params){
		var self = this;
		var callback = params.callback;
		var maxNTriggers = params.maxNDelays;
		var maxTotalDelay = params.maxTotalDelay;
		var delay = params.delay;
		if(!maxNTriggers&&!maxTotalDelay)maxTotalDelay=3*delay;
		var timerDelay = new Timer({callback:tick, delay:delay, nDelays:1});
		var timerMaxDelay = new Timer({callback:tick, delay:maxTotalDelay, nDelays:1});
		var nDelay=0;
		this.trigger=function(){
			nTriggers++;
			if(!timer.isRunning()){timer.start(); return;}
			if(maxNTriggers&&nTriggers>maxNDelays){
				tick();
				return;
			}
			timer.reset();
		};
		function tick(){
			timerDelay.stop();
			timeMaxDelay.stop();
			nTrigger=0;
			callback();
		}
	};
	return _TemporalCallback;
})();