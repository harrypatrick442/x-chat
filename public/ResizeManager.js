var ResizeManager=new (function(){
		EventEnabledBuilder(this);
		var self = this;
		this.add=function(params){
			return new Watcher(params);
		};
		function Watcher(params){
			EventEnabledBuilder(this);
			var self = this;
			var element = params.element;
			var onResized=params.onResized;
			var staggered=params.staggered;
			var temporalCallback = staggered?new TemporalCallback({callback:resized, delay:500,
			maxTotalDelay:800}):undefined;
			var loggedSize;
			this.manual=function(){
				resized();
			};
			if(window.ResizeObserver)
				new ResizeObserver(staggered?scheduleResize:resized).observe(element);
			else
				WindowResizeManager.addEventListener('resized', staggered?resized:scheduleResize);
			function logSize(){loggedSize= element.getBoundingClientRect();}
			function scheduleResize(){
				temporalCallback.trigger();
			}
			function resized(params){
				if(!loggedSize){logSize(); return;}
				var previousLoggedSize= loggedSize;
				logSize();
				if(previousLoggedSize.height==loggedSize.height&&previousLoggedSize.width==loggedSize.width)return;
				dispatchResized();
			}
			function dispatchResized(){
				self.dispatchEvent({type:'resized'});
				onResized&&onResized();
			}
		}
})();
