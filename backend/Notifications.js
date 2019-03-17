exports.Notifications = (function(){
	const N_MESSAGES_HISTORY=50;
	var dalNotifications = require('./Dal/DalNotifications').dalNotifications;
	var each = require('./each');
	var _Notifications = function(params)
	{
		var self = this;
		this.getPmNotificationsForUser=function(user, callback){
			dalNotifications.getPmNotificationsForUser(user.getId(),  function(pmNotifications){
				callback(pmNotifications);
			});
		};
		this.setPmNotificationsSeen=function(userMe, seens){
			console.log('SET AS SEEN');
			var userMeId = userMe.getId();
			each(seens, function(seen){
				var userToId = seen.userToId;
				var seenAt = seen.seenAt;
				dalNotifications.setPmNotificationSeen(userMeId, userToId, seenAt);
			});
		};
		
	};
	return _Notifications;
})();