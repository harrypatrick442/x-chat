exports.dalMessages= new (function(){
	console.log('DalRooms loaded');
	const STORED_PROCEDURE_ADD_MESSAGE='xchat_rooms_add_message';
	const STORED_PROCEDURE_GET_MESSAGES='xchat_rooms_messages_get';
    var dalXChat = require('./DalXChat').dalXChat;	
	var Message = require('./../Message').Message;
	var each = require('./../each').each;
	
	this.getMessages = function(roomId, nMessages, callbackGotMessage){
		dalXChat.query({storedProcedure:STORED_PROCEDURE_GET_MESSAGES, parameters:[roomId, nMessages], callbackRead:function(row){
			callbackGotMessage(Message.fromSqlRow(row));
		}});
	};
	this.addMessage= function(roomId, userId, message){
		dalXChat.nonQuery({storedProcedure:STORED_PROCEDURE_ADD_MESSAGE, parameters:[roomId, userId, JSON.stringify(message.toJSON())]});
	};
})();
