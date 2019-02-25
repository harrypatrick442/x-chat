function StopWatch(){
	var self = this;
	var ticksFromOtherRuns =0;
	var startTicks;
	var running = false;
	this.getMilliseconds = function(){
		var total = ticksFromOtherRuns;
		if(running)
			total += Date().getTicks()- startTicks;
		return total;
	};
	this.getSeconds = function(){
		return self.getMilliseconds/1000;
	};
	this.start = function(){
		if(running)return;
		running = true;
		startTicks = new Date().getTicks();
	};
	this.stop = function(){
		if(!running)return;
		running = false;
		ticksFromOtherRuns+=getTicksThisRun();
		startTicks=0;
	};
	this.reset = function(){
		running=false;
		ticksFromOtherRuns=0;
		startTicks=0;
	};
	function getTicksThisRun(){
		return new Date().getTicks()-startTicks;
	}
}