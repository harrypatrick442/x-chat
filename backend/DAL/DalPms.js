exports.dalPms= new (function(){
	console.log('DalPms loaded');
	const STORED_PROCEDURE_PM_MESSAGE_ADD='xchat_pm_message_add';
	const STORED_PROCEDURE_PM_MESSAGES_GET='xchat_pm_messages_get';
    var dalXChat = require('./DalXChat').dalXChat;	
	var Message = require('./../Message').Message;
	var each = require('./../each').each;
	
	this.getMessages = function(userMeId, userToId, nMessages, callbackGotMessages){
		dalXChat.query({storedProcedure:STORED_PROCEDURE_PM_MESSAGES_GET, parameters:[parseInt(userMeId), parseInt(userToId), nMessages], callbackRead:function(rows){
			var messages=[];
			each(rows, function(row){
				messages.push(Message.fromSqlRow(row));
			});
			callbackGotMessages(messages);
		}});
	};
	
	this.addMessage= function(userMeId, userToId, message){
		dalXChat.nonQuery({storedProcedure:STORED_PROCEDURE_PM_MESSAGE_ADD, parameters:[parseInt(userMeId), parseInt(userToId), message.getContent(), message.getServerAssignedNMessage()]});
	};
})();
