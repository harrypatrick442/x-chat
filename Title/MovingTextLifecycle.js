var MovingTextLifecycle = window['MovingTextLifecycle'] = (function(){
	var _MovingTextLifecycle = function(params){
		var fromVisible = params['fromVisible'];
		var duration = params['duration'];
		var createdAt = getTime();
		var setVisibleAt;
		var timeoutAt;
		if(!fromVisible&&duration)
			timeoutAt = createdAt+duration;
		this['getVisible']=function(){ return setVisibleAt?true:false;};
		this['setVisible']=function(){
			if(setVisibleAt)return;
			setVisibleAt = getTime();
			if(fromVisible&&duration)
				timeoutAt = setVisibleAt+duration;
		};
		this['getTimeoutAt']=function(){
			return timeoutAt;
		};
		this['updateTimeout']=function(now){
			if(!timeoutAt)return;
			return now>=timeoutAt;
		};
		function getTime(){
			return new Date().getTime();
		}
	};
	_MovingTextLifecycle['default']=function(){
		return new _MovingTextLifecycle({'fromVisible':true, 'duration':10000});
	};
	return _MovingTextLifecycle;
})();