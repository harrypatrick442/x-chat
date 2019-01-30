exports.dalNotifications= new (function(){
	console.log('DalPms loaded');
	const STORED_PROCEDURE_PM_NOTIFICATIONS_GET_FOR_USER='xchat_pm_notifications_get_for_user';
	const STORED_PROCEDURE_PM_NOTIFICATION_SEEN_SET = 'xchat_pm_notification_seen_set';
	const USER_ID='userId';
	const USER_ME_ID='userMeId';
	const USER_TO_ID='userTOId';
    var dalXChat = require('./DalXChat').dalXChat;	
	var Notification = require('./../Notification').Notification;
	var each = require('./../each').each;
	var sql = require('mssql');
	this.getPmNotificationsForUser = function(userId, callback){
		dalXChat.query({storedProcedure:STORED_PROCEDURE_PM_NOTIFICATIONS_GET_FOR_USER, 
			parameters:[
				{name:USER_ID, value:parseInt(userId), type:sql.Int}
			], 
			callback:function(result){
				var rows = result.recordsets[0];
				var notifications=[];
				each(rows, function(row){
					notifications.push(Notification.fromSqlRow(row));
				});
				callback(notifications);
		}});
	};
	this.setPmNotificationSeen=function(userMeId, userToId){
		dalXChat.nonQuery({storedProcedure:STORED_PROCEDURE_PM_NOTIFICATION_SEEN_SET, 
			parameters:[
				{name:USER_TO_ID, value:parseInt(userToId), type:sql.Int},
				{name:USER_ME_ID, value:parseInt(userMeId), type:sql.Int}
			]
		});
	};
})();
