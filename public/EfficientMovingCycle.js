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
	var _EfficientMovingCycle = function(element)
	{
		var self = this;
		this.onStart = undefined;
		this.onMove = undefined;
		this.onEnd = undefined;
		if (!isMobile)
		{
			element.addEventListener(MOUSE_DOWN, mouseDown);
			function mouseDown(e){
				if (!e)
					e = window.event;
				if(self.onStart&&self.onStart()==false)return;
				clearCurrentMouseMove();
				clearCurrentMouseUp()
				addMouseMoveEvent();
				addMouseUpEvent();
			}
			function mouseMove(e) {
				if (!e)
					e = window.event;
				self.onMove(e);
			}
			function mouseUp(e) {
				if (!e)
					e = window.event;
				if(self.onEnd)
					self.onEnd(e);
				clearCurrentMouseUp();
				clearCurrentMouseMove();
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
					var e = window.event;
				if(self.onStart && self.onStart(e)==false)return;
				clearCurrentTouchMove();
				clearCurrentTouchEnd();
				addTouchMove();
				addTouchEnd();
			}
		  
			function touchMove(e) {
				if (!e)
					var e = window.event;
				self.onMove&&self.onMove(e);
				e.preventDefault&&e.preventDefault();
			}
			function touchEnd(e) {
				if (!e)
					e = window.event;
				self.onEnd&&self.onEnd(e);
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
				clearCurrentTouchMove();
				clearCurrentTouchEnd;
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