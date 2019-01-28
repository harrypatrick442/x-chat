exports.dalNotifications= new (function(){
	console.log('DalPms loaded');
	const STORED_PROCEDURE_PM_NOTIFICATIONS_GET_FOR_USER='xchat_pm_notifications_get_for_user';
	const USER_ID='userId';
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
})();
