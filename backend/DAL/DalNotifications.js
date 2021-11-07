exports.dalNotifications= new (function(){
	var Notification = require('./../Notification').Notification;
	this.getPmNotificationsForUser = function(userId, callback){
		callback([]);
	};
	this.setPmNotificationSeen=function(userMeId, userToId, seenAt){
		/*dalXChat.nonQuery({storedProcedure:STORED_PROCEDURE_PM_NOTIFICATION_SEEN_SET, 
			parameters:[
				{name:USER_TO_ID, value:parseInt(userToId), type:sql.Int},
				{name:USER_ME_ID, value:parseInt(userMeId), type:sql.Int},
				{name:SEEN_AT, value:new Date(seenAt), type:sql.DateTime}
			]
		});*/
	};
})();
