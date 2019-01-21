exports.Pms = (function(){
	const N_MESSAGES_HISTORY=50;
	var dalPms = require('./DAL/DalPms').dalPms;
	var EventEnabledBuilder = require('./EventEnabledBuilder').EventEnabledBuilder;
	var _Pms = function(params){
			EventEnabledBuilder(this);
			var self = this;
			var users = params.users;
			this.sendMessage = function(userMeId, userToId, message){
				var userTo = users.getById(userToId);
				var userMe = users.getById(userMeId);
				console.log(userMeId);
				console.log(userToId);
				if(!userTo)return;
				dalPms.addMessage(userMeId, userToId, message, function(){
				console.log(message.getServerAssignedNMessage);
				userTo.sendMessage({type:'pm_message', userId:userMeId, message:message});
				userMe.sendMessage({type:'pm_message', userId:userToId, message:message});
			});
		};
		this.getMessages=function(userMeId, userToId, callback){
			dalPms.getMessages(userMeId, userToId, N_MESSAGES_HISTORY, function(messages){
				console.log(messages);
				var userMe = users.getById(userMeId);
				if(!userMe)return;
				userMe.sendMessage({type:'pm_messages', userId:userToId, messages:messages.select(x=>x.toJSON()).toList()});
			});
		};
	};
	return _Pms;
})();