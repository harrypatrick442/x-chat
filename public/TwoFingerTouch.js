var TwoFingerTouch=(function(){
	var _TwoFingerTouch=function(params){
		var element = params.element;
		var efficientMovingCycle = new EfficientMovingCycle({element:element});
		var finger2Active=false;
		var finger1Active = false;
		//onStartFinger1-2
		//onMoveFinger1-2
		//onEndFinger1-2
		//onStart when both fingers are down
		//onEnd when both fingers are up.
		efficientMovingCycle.onStart = function(e){
			
			var changedTouches = e.changedTouches;
			for(var i=0; i<changedTouches.length; i++){
				var changedTouch = changedTouches[i];
			console.log('identifier: '+changedTouch.identifier);
				if(changedTouch.identifier ==0){
					finger1Active=true;
					self.onStartFinger1&&self.onStartFinger1(changedTouch,  e);
				}
				if(changedTouch.identifier==1){
					finger2Active=true;
					self.onStartFinger2&&self.onStartFinger2(changedTouch, e);
				}
			}
			if(finger1Active&&finger2Active)
				self.onStart&&self.onStart(e);
		};
		efficientMovingCycle.onMove = function(e){
			console.log('onMove');
			var changedTouches = e.changedTouches;
			for(var i=0; i<changedTouches.length; i++){
				var changedTouch = changedTouches[i];
				console.log('identifier: '+changedTouch.identifier);
				if(changedTouch.identifier ==0){
					self.onMoveFinger1&&self.onMoveFinger1(changedTouch,  e);
				}
				if(changedTouch.identifier==1){
					self.onMoveFinger2&&self.onMoveFinger2(changedTouch, e);
				}
			}
		};
		efficientMovingCycle.onEnd= function(e){
				console.log('onEnd');
			var changedTouches = e.changedTouches;
			for(var i=0; i<changedTouches.length; i++){
				var changedTouch = changedTouches[i];
				console.log('identifier: '+changedTouch.identifier);
				if(changedTouch.identifier ==0){
					finger1Active=false;
					self.onEndFinger1&&self.onEndFinger1(changedTouch,  e);
				}
				if(changedTouch.identifier==1){
					finger2Active=false;
					self.onEndFinger2&&self.onEndFinger2(changedTouch, e);
				}
			}
			if(!finger1Active||finger2Active)
				self.onEnd&&self.onEnd(e);
		};
	};
	return _TwoFingerTouch;
})();