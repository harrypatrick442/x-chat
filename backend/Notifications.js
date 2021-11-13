module.exports = (function(){
	const N_MESSAGES_HISTORY=50;
	var dalNotifications = require('./Dal/DalNotifications');
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
			seens.forEach(function(seen){
				var userToId = seen.userToId;
				var seenAt = seen.seenAt;
				dalNotifications.setPmNotificationSeen(userMeId, userToId, seenAt);
			});
		};
		
	};
	return _Notifications;
})();