exports.Pms = (function(){
	const N_MESSAGES_HISTORY=50;
	var dalPms = require('./DAL/DalPms').dalPms;
	var EventEnabledBuilder = require('./EventEnabledBuilder').EventEnabledBuilder;
	var _Pms = function(params){
			EventEnabledBuilder(this);
			var self = this;
			var users = params.users;
			this.sendMessage = function(userMeId, userToId, message){
				dalPms.addMessage(userMeId, userToId, message, function(){
				var userTo = users.getById(userToId);
				if(userTo)
					userTo.sendMessage({type:'pm_message', userId:userMeId, message:message});
				var userMe = users.getById(userMeId);
				if(userMe)
					userMe.sendMessage({type:'pm_message', userId:userToId, message:message});
			});
		};
		this.getMessages=function(userMeId, userToId, callback){
			dalPms.getMessages(userMeId, userToId, N_MESSAGES_HISTORY, function(messages){
				callback(messages);
			});
		};
	};
	return _Pms;
})();