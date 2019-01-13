exports.dalMessages= new (function(){
	console.log('DalRooms loaded');
	const STORED_PROCEDURE_ROOM_MESSAGE_ADD='xchat_room_message_add';
	const STORED_PROCEDURE_ROOM_MESSAGES_GET='xchat_room_messages_get';
    var dalXChat = require('./DalXChat').dalXChat;	
	var Message = require('./../Message').Message;
	var each = require('./../each').each;
	
	this.getMessages = function(roomId, nMessages, callbackGotMessages){
		dalXChat.query({storedProcedure:STORED_PROCEDURE_ROOM_MESSAGES_GET, parameters:[parseInt(roomId), nMessages], callbackRead:function(rows){
			var messages=[];
			each(rows, function(row){
				messages.push(Message.fromSqlRow(row));
			});
			callbackGotMessages(messages);
		}});
	};
	this.addMessage= function(roomId, message){
		dalXChat.nonQuery({storedProcedure:STORED_PROCEDURE_ROOM_MESSAGE_ADD, parameters:[parseInt(roomId), message.getUserId(), message.getContent(), message.getServerAssignedNMessage()]});
	};
})();
