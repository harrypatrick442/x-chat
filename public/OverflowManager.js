var OverflowManager = new (function(){
	var _OverflowManager = function(params){
		var getMessages = params.getMessages;
		var remove = params.remove;
		var maxNMessages = params.maxNMessages;
		var self = this;
		var temporalCallback = new TemporalCallback({callback:overflow, maxNDelays:50, maxTotalDelay:6000});
		this.trigger = temporalCallback.trigger;
		function overflow(){
			var messages = getMessages();
			var nonIgnored = messages.where(function(x){ return !x.getIgnored();}).toList();
			var nNonIgnored = nonIgnored.length;
			var nToRemove =  nNonIgnored - maxNMessages;
			if(nToRemove<1)return;
			each(nonIgnored.take(nToRemove).toList(), function(message){
				remove(message);
			});
		}
	};
	return _OverflowManager;
})();