const N_MESSAGES_HISTORY=50;
var dalMessages = require('./DAL/DalMessages');
module.exports = function(params, callbackLoaded)
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
		list.forEach(function(message){
			jArray.push(message.toJSON());
		});
		return jArray;
	};
	loadMessages();
	function loadMessages(){
		dalMessages.getMessages(roomId, N_MESSAGES_HISTORY,
		function(messages){
			serverAssignedNMessage = getMaxServerAssignedNMessage(messages)+1;
			list = messages;
			callbackLoaded(self);
		});
	}
	function getMaxServerAssignedNMessage(messages){
		var max =0;
		messages.forEach(function(message){
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