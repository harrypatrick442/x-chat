var OnlineIndicators  = (function(){
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
		this.setHasPm = function(value){
			if(value)dispatchHasPm();
			else dispatchDoesntHavePm();
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
		function dispatchHasPm(){
			self.dispatchEvent({type:'haspm'});
		}
		function dispatchDoesntHavePm(){
			self.dispatchEvent({type:'doesnthavepm'});
		}
	};
	var _OnlineIndicators={};
	_OnlineIndicators.get=function(userId){
		var onlineIndicator = map[userId];
		if(onlineIndicator)return onlineIndicator;
		onlineIndicator = new __OnlineIndicator();
		map[userId]=onlineIndicator;
		return onlineIndicator;
	};
	_OnlineIndicators.setOnline = function(userId, value){
		_OnlineIndicators.get(userId).setOnline(value);
	};
	_OnlineIndicators.setHasPm = function(userId, value){
		_OnlineIndicators.get(userId).setHasPm(value);
	};
	return _OnlineIndicators;
})();