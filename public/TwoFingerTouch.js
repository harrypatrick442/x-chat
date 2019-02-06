var TwoFingerTouch=(function(){
	var _TwoFingerTouch=function(params){
		var self = this;
		var element = params.element;
		var efficientMovingCycle = new EfficientMovingCycle({element:element});
		var finger2Active=false;
		var finger1Active = false;
		var touch1;
		var touch2;
		//onStartFinger1-2
		//onMoveFinger1-2
		//onEndFinger1-2
		//onStart when both fingers are down
		//onEnd when both fingers are up.
		efficientMovingCycle.onStart = function(e){
			
			var changedTouches = e.changedTouches;
			for(var i=0; i<changedTouches.length; i++){
				var changedTouch = changedTouches[i];
				if(changedTouch.identifier ==0){
					finger1Active=true;
					touch1 = changedTouch;
					self.onStartFinger1&&self.onStartFinger1(changedTouch,  e);
				}
				if(changedTouch.identifier==1){
					finger2Active=true;
					touch2 = changedTouch;
					self.onStartFinger2&&self.onStartFinger2(changedTouch, e);
				}
			}
			if(finger1Active&&finger2Active)
				self.onStart&&self.onStart({touch1:touch1, touch2:touch2, e:e});
		};
		efficientMovingCycle.onMove = function(e){
			var changedTouches = e.changedTouches;
			for(var i=0; i<changedTouches.length; i++){
				var changedTouch = changedTouches[i];
				if(changedTouch.identifier ==0){
					self.onMoveFinger1&&self.onMoveFinger1(changedTouch,  e);
				}
				if(changedTouch.identifier==1){
					self.onMoveFinger2&&self.onMoveFinger2(changedTouch, e);
				}
			}
		};
		efficientMovingCycle.onEnd= function(e){
			var changedTouches = e.changedTouches;
			for(var i=0; i<changedTouches.length; i++){
				var changedTouch = changedTouches[i];
				if(changedTouch.identifier ==0){
					finger1Active=false;
					self.onEndFinger1&&self.onEndFinger1(changedTouch,  e);
				}
				if(changedTouch.identifier==1){
					finger2Active=false;
					self.onEndFinger2&&self.onEndFinger2(changedTouch, e);
				}
			}
			var active = finger1Active||finger2Active;
			if(active)return true;
			console.log('onEnd finally');
			self.onEnd&&self.onEnd(e);
		};
	};
	return _TwoFingerTouch;
})();