var VisibilityWatcher = window['VisibilityWatcher']= new (function(){
	window['EventEnabledBuilder'](this);
	var once = new Once(dispatchVisibilityChange);
	var self = this;
	var stateKey;
	var isVisible = true;
	this['getIsVisible']=getIsVisible;
	function getIsVisible(){
		return isVisible;
	}
	visibly.onVisible(function () {
		isVisible = true;
		visibilityChange();
	});
	visibly.onHidden(function () {
		isVisible = false;
		visibilityChange();
	});
	function visibilityChange(){
		once.trigger();
	}
	function dispatchVisibilityChange(){
		console.log(isVisible);
		self['dispatchEvent']({type:'visibilitychange', visible:isVisible});
	}
})();