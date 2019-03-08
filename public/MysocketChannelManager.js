var MysocketChannelManager = (function(){
	var N_TIMES_HISTORY=4;
	var COUPLE_SECONDS=2000;
	var TEN_SECONDS=10000;
	var WhenToCreate={NOW:'now', SHORT_DELAY:'oneMinute', LONG_DELAY:'longDelay'};
	var _MysocketChannelManager = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var mysocketAnalysis = params.mysocketAnalysis;
		var url = params.url;
		var urlWebsocket = params.urlWebsocket;
		var getId = params.getId;
		var channel;
		var pendingCreate=false;
		this.wouldLikeNewChannel = function(){
			if(pendingCreate)return;
			var recommendedDelay = mysocketAnalysis.getRecommendedDelayBeforeCreatingChannel();
			console.log('Reccomended delay before creating a channel was: '+recommendedDelay.type);
			console.log(recommendedDelay);
			switch(recommendedDelay.type){
				case When.NOW:
					return createNewChannel();
				case When.SECONDS:
					var seconds = recommendedDelay.seconds;
					console.log(seconds);
					createNewChannelAfterDelayMilliseconds(seconds*1000);
					break;
			}
		};
		function createNewChannelAfterDelayMilliseconds(milliseconds){
			pendingCreate = true;
			console.log('function createNewChannelAfterDelayMilliseconds(milliseconds){');
			new Timer({delay:milliseconds, callback:callbackCreateChannel, nTicks:1}).start();
		}
		function callbackCreateChannel(){
			console.log('callbackCreateChannel');
			disposeOldChannel();
			createNewChannel();
			dispatchNewChannel();
			pendingCreate=false;
		}
		function disposeOldChannel(){
			
		}
		function createNewChannel(){
			console.log('get id is: '+getId());
			channel = MysocketChannelFactory.create({id:getId(), urlWebsocket:urlWebsocket, url:url, mysocketAnalysis:mysocketAnalysis});
			return channel;
		}
		function dispatchNewChannel(){
			self.dispatchEvent({type:'newchannel', channel:channel});
		}
	};
	return _MysocketChannelManager;
})();