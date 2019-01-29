exports.Notifications = (function(){
	const N_MESSAGES_HISTORY=50;
	var dalNotifications = require('./Dal/DalNotifications').dalNotifications;
	var each = require('./each').each;
	var _Notifications = function(params)
	{
		var self = this;
		this.getPmNotificationsForUser=function(user, callback){
			console.log('getPmNotificationsForUser');
			dalNotifications.getPmNotificationsForUser(user.getId(),  function(pmNotifications){
			console.log(pmNotifications);
				callback(pmNotifications);
			});
		};
	};
	return _Notifications;
})();