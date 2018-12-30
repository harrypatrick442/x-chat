exports.Messages = new (function(){
	const N_MESSAGS_HISTORY=50;
	var dalMessages = require('./Dal/DalMessages').dalMessages;
	var _Messages = function(params)
	{
		var list =[];
		var roomId = params.roomId;
		this.add=function(userId, message){
			list.push(message);
			while(list.length>N_MESSAGES_HISTORY)
			{
				list.splice(0, 1);
			}
			dalMessages.addMessage(roomId, userId, message);
		};
		this.toJSON = function(){
			return list;
		};
		loadMessages();
		function loadMessages(){
			dalRooms.getMessages(self.getId(), N_MESSAGS_HISTORY, function(message){
				list.push(message);
			});
		}
	};
	return _Messages;
})();