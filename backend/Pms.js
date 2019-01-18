exports.Pms = (function(){
	var dalPms = require('./DAL/DalPms').dalPms;
	var EventEnabledBuilder = require('./EventEnabledBuilder').EventEnabledBuilder;
	var _Pms = function(params){
		EventEnabledBuilder(this);
		var self = this;
		this.sendPm = function(userMeId, toUserId, message){
			dalPms.addPm(userMeId, userToId, message);
		};
	};
	return _Room;
})();