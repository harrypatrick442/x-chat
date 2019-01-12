exports.Messages = (function(){
	const N_MESSAGES_HISTORY=50;
	var dalMessages = require('./Dal/DalMessages').dalMessages;
	var each = require('./each').each;
	var _Messages = function(params, callbackLoaded)
	{
		var self = this;
		var list =[];
		var serverAssignedNMessage;
		var roomId = params.roomId;
		this.add=function(message){
			list.push(message);
			message.setServerAssignedNMessage(serverAssignedNMessage++);
			overflow();
			dalMessages.addMessage(roomId, message);
		};
		this.toJSON = function(){
			var jArray=[];
			each(list, function(message){
				jArray.push(message.toJSON());
			});
			return jArray;
		};
		loadMessages();
		function loadMessages(){
			console.log('loading messages for room: '+roomId);
			dalMessages.getMessages(roomId, N_MESSAGES_HISTORY, function(messages){
				serverAssignedNMessage = getMaxServerAssignedNMessage(messages)+1;
				list = messages;
				callbackLoaded(self);
			});
		}
		function getMaxServerAssignedNMessage(messages){
			var max =0;
			each(messages, function(message){
				var serverAssignedNMessage = message.getServerAssignedNMessage();
				if(serverAssignedNMessage>max)
					max=serverAssignedNMessage;
			});
			return max;
		}
		function overflow(){
			while(list.length>N_MESSAGES_HISTORY)
			{
				list.splice(0, 1);
			}
		}
	};
	return _Messages;
})();