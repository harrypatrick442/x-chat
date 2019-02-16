exports.Device = (function(){
	var EventEnabledBuilder=require('./EventEnabledBuilder').EventEnabledBuilder;
	var _Device = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var mysocket = params.mysocket;
		this.getId = mysocket.getId;
		this.sendMessage = mysocket.sendMessage;
		this.close=function(){
			dispatchClose();
		};
		this.getUser = function(){
			return user;
		};
		function dispatchClose(){
			self.dispatchEvent({type:'close', device:self});
		}
	};
	return _Device;
})();
