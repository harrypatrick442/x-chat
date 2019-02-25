var MysocketChannelAnalysis = new (function(){
	var N_ERRORS_TO_STORE=30;
	var _MysocketChannelAnalysis = function(){
		var successfullyOpened =false;
		var receivedMessages=false;
		var closed = false;
		var errors=[];
		var openedAt;
		var stopWatchOpenFor = new StopWatch();
		this.getSuccessfullyOpened= function(){
				
		};
		this.getOpenForMilliseconds = function(){
			stopWatch.getMilliseconds();
		};
		this.opened = function(){
			successfullyOpened=true;
			openedAt = new Date();
			stopWatchOpenFor.start();
		};
		this.receivedMessage = function(){
			receivedMessages = true;
		};
		this.closed = function(){
			stopWatchOpenFor.stop();
			closed = true;
		};
		this.error = function(){
			errors.push(error);
			while(errors.length>N_ERRORS_TO_STORE)errors.splice(0, 1);
		};
	};
})();