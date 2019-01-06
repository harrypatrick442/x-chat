exports.Messages = new (function(){
	const N_MESSAGES_HISTORY=50;
	var dalMessages = require('./Dal/DalMessages').dalMessages;
	var each = require('./each').each;
	var _Messages = function(params, callbackLoaded)
	{
		var self = this;
		var list =[];
		var roomId = params.roomId;
		var addToListWhenLoaded=[];
		this.add=function(message){
			list.push(message);
			overflow();
			dalMessages.addMessage(roomId, message);
		};
		this.toJSON = function(){
			var jArray=[];
			each(list, function(message){
				console.log(message);
				jArray.push(message.toJSON());
			});
			return jArray;
		};
		loadMessages();
		function loadMessages(){
			console.log('loading messages for room: '+roomId);
			dalMessages.getMessages(roomId, N_MESSAGES_HISTORY, function(messages){
				list = messages;
				callbackLoaded(self);
			});
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