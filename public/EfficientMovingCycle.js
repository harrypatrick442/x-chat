var EfficientMovingCycle = (function(){
	const MOUSE_MOVE='mousemove';
	const MOUSE_UP='mouseup';
	const MOUSE_DOWN='mousedown';
	const TOUCH_START='touchstart'
	const TOUCH_MOVE='touchmove';
	const TOUCH_END='touchend';
	var currentMouseMove;
	var currentMouseUp;
	var currentTouchMove;
	var currentTouchEnd;
	var documentElement = document.documentElement;
	var _EfficientMovingCycle = function(params)
	{
		var self = this;
		var element = params.element;
		var stopPropagation = params.stopPropagation;
		this.onStart = undefined;
		this.onMove = undefined;
		this.onEnd = undefined;
		if (!isMobile)
		{
			element.addEventListener(MOUSE_DOWN, mouseDown);
			function mouseDown(e){
				if (!e)
					e = window.event;
				if(self.onStart&&self.onStart(e)==false)return;
				clearCurrentMouseMove();
				clearCurrentMouseUp()
				addMouseMoveEvent();
				addMouseUpEvent();
				stopPropagationIfRequired(e);
			}
			function mouseMove(e) {
				if (!e)
					e = window.event;
				self.onMove(e);
				stopPropagationIfRequired(e);
			}
			function mouseUp(e) {
				if (!e)
					e = window.event;
				if(self.onEnd)
					self.onEnd(e);
				clearCurrentMouseUp();
				clearCurrentMouseMove();
				stopPropagationIfRequired(e);
			}
			function stopPropagationIfRequired(e){
				if(stopPropagation)
				{
					e.stopPropagation&&e.stopPropagation();
					e.preventDefault&&e.preventDefault();
				}	
			}
			function addMouseMoveEvent(){
				documentElement.addEventListener(MOUSE_MOVE, mouseMove);
				currentMouseMove = mouseMove;
			}
			function addMouseUpEvent(){
				documentElement.addEventListener(MOUSE_UP, mouseUp);
				currentMouseUp = mouseUp;
			}
			
		}
		else
		{
			element.addEventListener(TOUCH_START, touchStart);
			function touchStart(e) {
				if (!e)
					e = window.event;
				if(self.onStart && self.onStart(e)==false)return;
				clearCurrentTouchMove();
				clearCurrentTouchEnd();
				addTouchMove();
				addTouchEnd();
			}
		  
			function touchMove(e) {
				console.log('touch move');
				if (!e)
					var e = window.event;
				self.onMove&&self.onMove(e);
				e.preventDefault&&e.preventDefault();
			}
			function touchEnd(e) {
				if (!e)
					e = window.event;
				var keep = self.onEnd&&self.onEnd(e);
				if(keep)return;
				clearCurrentTouchEnd();
				clearCurrentTouchMove();
			}
			function addTouchMove(){
				documentElement.addEventListener(TOUCH_MOVE, touchMove);
				currentTouchMove = touchMove;
			}
			function addTouchEnd(){
				documentElement.addEventListener(TOUCH_END, touchEnd);
				currentTouchEnd = touchEnd;
			}
		}
    };
	return _EfficientMovingCycle;	
	function clearCurrentTouchEnd(){
		if(!currentTouchEnd)return;
		documentElement.removeEventListener(TOUCH_END, currentTouchEnd);
		currentTouchEnd=undefined;
	}
	function clearCurrentTouchMove(){
		if(!currentTouchMove)return;
		documentElement.removeEventListener(TOUCH_MOVE, currentTouchMove);
		currentTouchMove=undefined;
	}	
	function clearCurrentMouseUp(){
		if(!currentMouseUp)return;
		documentElement.removeEventListener(MOUSE_UP, currentMouseUp);
		currentMouseUp=undefined;
	}
	function clearCurrentMouseMove(){
		if(!currentMouseMove)return;
		documentElement.removeEventListener(MOUSE_MOVE, currentMouseMove);
		currentMouseMove=undefined;
	}
})();