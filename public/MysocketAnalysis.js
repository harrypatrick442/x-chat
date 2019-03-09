var MysocketAnalysis = (function(){
	var CLOSED= 'closed';
	var MAX_OPEN_FOR_WEBSOCKET_FOR_FAIL =5000;
	var DELAY_BEFORE_ATTEMPT_WEBSOCKET_AGAIN= 60000;
	var MAX_N_CHANNELS_PER_MINUTE=3;
	var MIN_DELAY_BETWEEN_CLOSE_AND_CREATE=2000;
	var MAX_N_CHANNEL_ANALYSISS= 20;
	var FAILED_QUICKLY_DELAY_MILLISECONDS=5000;
	var _MysocketAnalysis = function(params){
		var self = this;
		var mysocket = params.mysocket;
		var channelAnalysiss = [];
		var currentChannelAnalysis;
		this.getRecommendedTypes = function(){
			/*var requiresCors = isCrossDomain(mysocket.getUrl());
			if(requiresCors)return [ChannelType.JSONP];*/
			var nRecentWebsocketsFailedQuickly = getNRecentWebsocketsFailedQuickly();
			var supportsWebsocket=window.WebSocket?true:false;
			var websocketFailedQuickly;
			var shouldUseWebsocket=supportsWebsocket&&!(websocketFailedQuickly= nRecentWebsocketsFailedQuickly>0);
			console.log('nRecentWebsocketsFailedQuickly'+nRecentWebsocketsFailedQuickly);
			console.log('shouldUseWebsocket'+shouldUseWebsocket);
			console.log('websocket failed quickly'+websocketFailedQuickly);
			if(shouldUseWebsocket&&websocketFailedQuickly)
			{
				console.log('websocket failed quickly');
				var shouldAttemptWebsocketAgain = new Date().getTime()-websocketFailedQuickly.getOpenedAt()
				>DELAY_BEFORE_ATTEMPT_WEBSOCKET_AGAIN;
				shouldUseWebsocket = shouldAttemptWebsocketAgain;
				console.log('shouldAttemptWebsocketAgain'+shouldAttemptWebsocketAgain);
				shouldUseWebsocket=shouldAttemptWebsocketAgain;
			}
			if(shouldUseWebsocket)
			{
				return [ChannelType.LONGPOLL];
			}
			return [ChannelType.LONGPOLL];
		};
		this.getRecommendedDelayBeforeCreatingChannel= function(){
			console.log(isFirstChannel());
			if(isFirstChannel())return {type:When.NOW};
			var tooManyChannelsThisMinute=getNChannelsCreatedLastMinute()>MAX_N_CHANNELS_PER_MINUTE;
			if(tooManyChannelsThisMinute)return {type:When.SECONDS , seconds:5};
			var minimumDelayBetweenCloseAndReopenPassed = getTime() - getLastChannelClosedAt()> MIN_DELAY_BETWEEN_CLOSE_AND_CREATE;
			if(!minimumDelayBetweenCloseAndReopenPassed) return {type:When.SECONDS, seconds:1};
			return {type:When.NOW};
		};
		this.add=function(channelAnalysis){
			currentChannelAnalysis = channelAnalysis;       
			channelAnalysis.addEventListener(CLOSED, channelAnalysisClosed);
		};
		this.clear = function(){
			currentChannelAnalysis.closed();
			channelAnalysiss=[];
			currentChannelAnalysis=undefined;
		};
		function getNRecentWebsocketsFailedQuickly(){
			return getRecentWebsockets().where(function(x){ return x.getOpenForMilliseconds()<FAILED_QUICKLY_DELAY_MILLISECONDS;}).count();
		}
		function getRecentWebsockets(){
			
			return getRecentChannels().where(function(x){ return x.getChannelType()==ChannelType.WEBSOCKET;});
		}
		function getRecentChannels(){
			var now = getTime();
			var i=channelAnalysiss.length-1;
			var list=[];
			var backThen = now - 60000;
			console.log('channelAnalysiss.length is: '+channelAnalysiss.length);
			while(i>=0)
			{
				var channelAnalysis=channelAnalysiss[i];
				if(backThen <channelAnalysis.getClosedAt())
					list.push(channelAnalysis);
				else
					return list;
				i--;
			}
			return list;
		}
		function isFirstChannel(){
			return channelAnalysiss.length<1;
		}
		function getTime(){
			return new Date().getTime();
		}
		function getNChannelsCreatedLastMinute(){
			var count=0;
			var minuteAgo = getTime()-60000;
			for(var i=channelAnalysiss.length-1; i>=0; i--){
				if(channelAnalysiss[i].getOpenedAt()>minuteAgo)count++;
				else break;
			}
			return count;
		}
		function getLastChannelClosedAt(){
			return channelAnalysiss[channelAnalysiss.length-1].getClosedAt();
		}
		function channelAnalysisClosed(e){
			console.log('channelAnalysisClosed');
			var channelAnalysis = e.mysocketChannelAnalysis;
			channelAnalysis.removeEventListener(CLOSED, channelAnalysisClosed);
			channelAnalysiss.push(channelAnalysis);
			overflowChannelAnalysiss();
			analyseOnClose(channelAnalysis);
		}
		function analyseOnClose(channelAnalysis){
			switch(channelAnalysis.getChannelType())
			{
				case Mysocket.WEBSOCKET:
				break;
			}
		}
		function overflowChannelAnalysiss(){
			while(channelAnalysiss.length>MAX_N_CHANNEL_ANALYSISS){
				channelAnalysis.splice(0, 1);
			}
		}
		function isCrossDomain(mysocketUrl){
			console.log(window.location.href);
			console.log(mysocketUrl);
			return mysocketUrl.indexOf(window.href)<0;
		}
		function getTime(){
			return new Date().getTime();
		}
	};
	return _MysocketAnalysis;
})();