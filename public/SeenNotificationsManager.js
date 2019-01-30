var SeenNotificationsManager = new (function () {
    var _SeenNotificationsManager = function (params) {
        var self = this;
		var getSessionId = params.getSessionId;
		var mysocket = params.mysocket;
		var temporalCallback = new TemporalCallback({delay:4000, callback:send, maxNTriggers:5,maxTotalDelay:15000});
		var seenPmNotificationUserIds=[];
		this.seen=function(notification){
			var seenPmUserId = notification.getId();
			if(seenPmNotificationUserIds.indexOf(seenPmUserId)<0)
				seenPmNotificationUserIds.push(seenPmUserId);
			temporalCallback.trigger();
		};
		function send(){
			console.log('sending seen notifications');
			mysocket.send({type:'seen_notifications', seenPmNotificationUserIds:seenPmNotificationUserIds, sessionId:getSessionId()});
			list=[];
		}
    };
    return _SeenNotificationsManager;
})();