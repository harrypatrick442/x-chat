var WindowResizeManager=new (function(){
		EventEnabledBuilder(this);
		var self = this;
		var temporalCallback = new TemporalCallback({callback:doResize, delay:500,
		maxTotalDelay:800});
		window.addEventListener("resize", scheduleResize);
		function scheduleResize(){
			temporalCallback.trigger();
		}
		function doResize(){
			console.log('doing resize');
			dispatchResized();
		}
		function dispatchResized(){
			self.dispatchEvent({type:'resized'});
		}
})();
