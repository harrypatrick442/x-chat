exports.dalPms= new (function(){
	console.log('DalPms loaded');
	const STORED_PROCEDURE_PM_MESSAGE_ADD='xchat_pm_message_add';
	const STORED_PROCEDURE_PM_MESSAGES_GET='xchat_pm_messages_get';
	const N_MESSAGES='nMessages';
	const USER_ME_ID='userMeId';
	const USER_TO_ID='userToId';
	const CONTENT='content';
	const SERVER_N_ASSIGNED_MESSAGE='serverAssignedNMessage';
    var dalXChat = require('./DalXChat').dalXChat;	
	var Message = require('./../Message').Message;
	var each = require('./../each').each;
	var sql = require('mssql');
	this.getMessages = function(userMeId, userToId, nMessages, callbackGotMessages){
		dalXChat.query({storedProcedure:STORED_PROCEDURE_PM_MESSAGES_GET, 
			parameters:[
				{name:USER_ME_ID, value:parseInt(userMeId), type:sql.Int},
				{name:USER_TO_ID, value:parseInt(userToId),:sql.Int},
				{name:N_MESSAGES, value: nMessages, type:sql.Int}
			], 
			callbackRead:function(rows){
				var messages=[];
				each(rows, function(row){
					messages.push(Message.fromSqlRow(row));
				});
				callbackGotMessages(messages);
		}});
	};
	
	this.addMessage= function(userMeId, userToId, message){
		dalXChat.nonQuery({storedProcedure:STORED_PROCEDURE_PM_MESSAGE_ADD, 
			parameters:[
				{name:USER_ME_ID, value:parseInt(userMeId), type:sql.Int},
				{name:USER_TO_ID, value:parseInt(userToId), type:sql.Int},
				{name:CONTENT,value: message.getContent(), type:sql.Text},
				{name:SERVER_ASSIGNBED_N_MESSAGE, value:message.getServerAssignedNMessage(), type:sql.Int}
				]});
	};
})();
