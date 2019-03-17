var SeenNotificationsManager = new (function () {
    var _SeenNotificationsManager = function (params) {
        var self = this;
		var getSessionId = params.getSessionId;
		var mysocket = params.mysocket;
		var temporalCallback = new TemporalCallback({delay:4000, callback:send, maxNTriggers:5,maxTotalDelay:15000});
		var seens={};
		this.seen=function(notification){
			var seenPmUserId = notification.getId();
			if(!seens[seenPmUserId])
				seens[seenPmUserId]={userToId:seenPmUserId, seenAt:new Date().toISOString()};
			temporalCallback.trigger();
		};
		function send(){
			console.log('sending seen notifications');
			var list=[];
			for(var i in seens){
				list.push(seens[i]);
			}
			mysocket.send({type:'seen_notifications', seens:list, sessionId:getSessionId()});
			seens={};
		}
    };
    return _SeenNotificationsManager;
})();