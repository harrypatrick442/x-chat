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
			console.log('setVisible');
			if(setVisibleAt)return;
			setVisibleAt = getTime();
			console.log(setVisibleAt);
			if(fromVisible&&duration)
				timeoutAt = setVisibleAt+duration;
		};
		this['getTimeoutAt']=function(){
			console.log('getTimeoutAt');
			return timeoutAt;
		};
		this['updateTimeout']=function(now){
			console.log('updateTimeout');
			console.log(timeoutAt);
			if(!timeoutAt)return;
			return now>=timeoutAt;
		};
		function getTime(){
			console.log('getTime');
			return new Date().getTime();
		}
	};
	_MovingTextLifecycle['default']=function(){
		return new _MovingTextLifecycle({'fromVisible':true, 'duration':10000});
	};
	return _MovingTextLifecycle;
})();