var OnlineIndicator  = (function(){
	var map = {};
	var __OnlineIndicator = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var online=false;
		this.setOnline= function(value){
			if(value){
				if(!online)
					dispatchCameOnline();
				online = value;
				return;
			}
			if(online)
				dispatchWentOffline();
			online = value;
		};
		this.getOnline = function(){
			return online;
		};
		function dispatchCameOnline(){
			self.dispatchEvent({type:'cameonline'});
		}
		function dispatchWentOffline(){
			self.dispatchEvent({type:'wentoffline'});
		}
	};
	var _OnlineIndicator={};
	_OnlineIndicator.get=function(userId){
		var onlineIndicator = map[userId];
		if(onlineIndicator)return onlineIndicator;
		onlineIndicator = new __OnlineIndicator();
		map[userId]=onlineIndicator;
	};
	_OnlineIndicator.setOnline = function(userId, value){
		_OnlineIndicator.get(userId).setOnline(value);
	};
	return _OnlineIndicator;
})();