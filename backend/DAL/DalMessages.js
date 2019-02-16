exports.dalMessages= new (function(){
	const STORED_PROCEDURE_ROOM_MESSAGE_ADD='xchat_room_message_add';
	const STORED_PROCEDURE_ROOM_MESSAGES_GET='xchat_room_messages_get';
	const ROOM_ID='roomId';
	const N_MESSAGES='nMessages';
	const USER_ID='userId';
	const CONTENT='content';
	const SERVER_N_ASSIGNED_MESSAGE='serverAssignedNMessage';
    var dalXChat = require('./DalXChat').dalXChat;	
	var Message = require('./../Message').Message;
	var each = require('./../each').each;
	var sql = require('mssql');
	
	this.getMessages = function(roomId, nMessages, callbackGotMessages){
		dalXChat.query({storedProcedure:STORED_PROCEDURE_ROOM_MESSAGES_GET, 
		parameters:[
			{name:ROOM_ID, value:parseInt(roomId), type:sql.Int},
			{name:N_MESSAGES, value:nMessages, type:sql.Int}
			], 
		callback:function(result){
			var rows = result.recordsets[0];
			var messages=[];
			each(rows, function(row){
				messages.push(Message.fromSqlRow(row));
			});
			callbackGotMessages(messages);
		}});
	};
	this.addMessage= function(roomId, message){
		dalXChat.nonQuery({storedProcedure:STORED_PROCEDURE_ROOM_MESSAGE_ADD, 
			parameters:[
			{name:ROOM_ID,value:parseInt(roomId), type:sql.Int},
			{name:USER_ID,value: message.getUserId(),type:sql.Int},
			{name:CONTENT, value: message.getContent(), type:sql.Text},
			{name:SERVER_N_ASSIGNED_MESSAGE, value:message.getServerAssignedNMessage(), type:sql.Int}
			]});
	};
})();
