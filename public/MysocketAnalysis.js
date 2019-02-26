var MysocketAnalysis = (function(){
	var CLOSED= 'closed';
	var MAX_OPEN_FOR_WEBSOCKET_FOR_FAIL =5000;
	var DELAY_BEFORE_ATTEMPT_WEBSOCKET_AGAIN= 60000;
	var _MysocketAnalysis = function(params){
		var self = this;
		var mysocket = params.mysocket;
		var channelAnalysiss = [];
		var currentChannelAnalysis;
		var websocketFailedQuicklyChannelAnalysis;
		this.getWebsocketFailedQuiclyChannelAnalysis= function(){
			return websocketFailedQuicklyChannelAnalysis;
		};
		this.getRecommendedTypes = function(){
			console.log(mysocket);
			var requiresCors = isCrossDomain(mysocket.getUrl());
			if(requiresCors)return [Mysocket.CORS];
			var websocketFailedQuickly = !(websocketFailedQuicklyChannelAnalysis.openedAt||
			websocketFailedQuicklyChannelAnalysis.getOpenForMilliseconds()<=MAX_OPEN_FOR_WEBSOCKET_FOR_FAIL);
			var shouldUseWebsocket
			if(websocketFailedQuickly)
			{
				var shouldAttemptWebsocketAgain = new Date().getTime()-websocketFailedQuickly.getOpenedAt()
				>DELAY_BEFORE_ATTEMPT_WEBSOCKET_AGAIN;
				shouldUseWebsocket = shouldAttemptWebsocketAgain;
			}
			if(shouldUseWebsocket)
			{
				return [Mysocket.WEBSOCKET, Mysocket.LONGPOLL];
			}
			return [Mysocket.LONGPOLL];
		};
		this.add=function(channelAnalysis){
			currentChannelAnalysis = channelAnalysis;       
			channelAnalysis.addEventListener(CLOSED, channelAnalysisClosed);
		};
		function channelAnalysisClosed(e){
			var channelAnalysis = e.channelAnalysis;
			channelAnalysis.removeEventListener(CLOSED, channelAnalysisClosed);
			channelAnalysiss.push(channelAnalysis);
			overflowChannelAnalysiss();
			analyseOnClose(channelAnalysis);
		}
		function analyseOnClose(channelAnalysis){
			switch(channelAnalysis.getChannelType())
			{
				case Mysocket.WEBSOCKET:
					if(channelAnalysis.getOpenForMilliseconds()<MAX_OPEN_FOR_WEBSOCKET_USE_AJAX)
						websocketFailedQuicklyChannelAnalysis = channelAnalysis;
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
	};
	return _MysocketAnalysis;
})();