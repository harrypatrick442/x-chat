var TwoFingerTouch=(function(){
	var _TwoFingerTouch=function(params){
		var self = this;
		var element = params.element;
		var finger2Active=false;
		var finger1Active = false;
		var touch1;
		var touch2;
		var documentElement = document.documentElement;
		this.onStart=doNothing;
		this.onStartFinger1 = doNothing;
		this.onStartFinger2=doNothing;
		this.onMoveFinger1 = doNothing;
		this.onMoveFinger2 = doNothing;
		this.onEndFinger1 = doNothing;
		this.onEndFinger2 = doNothing;
		this.onEnd = doNothing;
		//onStartFinger1-2
		//onMoveFinger1-2
		//onEndFinger1-2
		//onStart when both fingers are down
		//onEnd when both fingers are up.
		element.addEventListener('touchstart', start);
		function start(e){
			
			var changedTouches = e.changedTouches;
			for(var i=0; i<changedTouches.length; i++){
				var changedTouch = changedTouches[i];
				if(changedTouch.identifier ==0){
					console.log('finger 1');
					finger1Active=true;
					new Task(function(){
						documentElement.addEventListener('touchstart', startAnywhere);
					}).run();
					documentElement.addEventListener('touchmove', move);
					documentElement.addEventListener('touchend', end);
					touch1 = changedTouch;
					self.onStartFinger1(changedTouch,  e);
				}else
				startFinger2(changedTouch, e);
			}
			if(finger1Active&&finger2Active)
				self.onStart({touch1:touch1, touch2:touch2, e:e});
		}
		function startAnywhere(e){
			console.log('start anywhere');
			var changedTouch = e.changedTouches[0];
			console.log('startAnywhere identifier');
			console.log(changedTouch.identifier);
			startFinger2(changedTouch, e);
		}
		function startFinger2(changedTouch, e){
			if(changedTouch.identifier==1){
				console.log('finger 2');
				finger2Active=true;
				touch2 = changedTouch;
				self.onStartFinger2(changedTouch);
			}
		}
		function startSecondFinger(){
			
		}
		function move(e){
			var changedTouches = e.changedTouches;
			for(var i=0; i<changedTouches.length; i++){
				var changedTouch = changedTouches[i];
				if(changedTouch.identifier ==0){
					self.onMoveFinger1(changedTouch,  e);
				}
				if(changedTouch.identifier==1){
					self.onMoveFinger2(changedTouch, e);
				}
			}
		};
		function end(e){
			var changedTouches = e.changedTouches;
			for(var i=0; i<changedTouches.length; i++){
				var changedTouch = changedTouches[i];
				if(changedTouch.identifier ==0){
					finger1Active=false;
					documentElement.removeEventListener('touchstart', startAnywhere);
					self.onEndFinger1(changedTouch,  e);
				}
				if(changedTouch.identifier==1){
					finger2Active=false;
					self.onEndFinger2(changedTouch, e);
				}
			}
			var active = finger1Active||finger2Active;
			if(active)return true;
			documentElement.removeEventListener('touchmove', move);
			documentElement.removeEventListener('touchend', end);
			self.onEnd(e);
		};
		function doNothing(){}
	};
	return _TwoFingerTouch;
})();