var Cropper = (function(){
	var _Cropper=function(params){
		var self = this;
		var getImageWidth= params.getImageWidth;
		var getImageHeight = params.getImageHeight;
		var aspectRatio = params.aspectRatio;
		var minWidth = 50;
		var minHeight = 50;
		var finger1Position;
		var finger2Position;
		var element = E.DIV();
		element.classList.add('cropper');
		this.positionDefault= function(imageWidth, imageHeight){
			var width = imageWidth;
			var height = imageHeight;
			if(aspectRatio){
				if(imageHeight*aspectRatio>imageWidth){
					height = width/aspectRatio;
				}
				else{
					width = height * aspectRatio;
				}
			}
			element.style.left = '0px';
			element.style.top='0px';
			element.style.width=String(width)+'px';
			element.style.height=String(height)+'px';
			
		};
		this.onShow = function(){
		};
		this.getElement = function(){return element;};
		var twoFingerTouch = new TwoFingerTouch({element:element});
		var startMiddleFingers;
		var startPositionMiddle;
		var startDimensions;
		var startDistanceFromMiddleToFinger1;
		var startDistanceFromMiddleToFinger2;
		var movedFinger1;
		var movedFinger2;
		var leftDistanceFromMiddle;
		var topDistanceFromMiddle;
		var rightDistanceFromMiddle;
		var bottomDistanceFromMiddle;
		var imageWidth;
		var imageHeight;
		twoFingerTouch.onStart= function(e){console.log('start');
			imageWidth = getImageWidth();
			imageHeight = getImageHeight();
			var touch1 = e.touch1;
			var touch2 = e.touch2;
			startMiddleFingers = {x:(touch1.pageX+touch2.pageX)/2, y:(touch1.pageY+touch2.pageY)/2};
			startDimensions = getCropperDimensions();
			startPositionMiddle = getCropperPosition();
			startDistanceFromMiddleToFinger1= {x:touch1.pageX - startMiddleFingers.x, y:touch1.pageY-startMiddleFingers.y};
			startDistanceFromMiddleToFinger2= {x:touch2.pageX - startMiddleFingers.x, y:touch2.pageY-startMiddleFingers.y};
			var finger1IsRightFinger=touch1.pageX>touch2.pageX;
			var finger1IsLowFinger = touch1.pageY>touch2.pageY; 
			var isRightFingerHigh = (finger1IsRightFinger^finger1IsLowFinger);
			console.log('finger1IsRightFinger: '+finger1IsRightFinger);
			console.log('finger1IsLowFinger: '+finger1IsLowFinger);
			console.log('isRightFingerHigh: '+isRightFingerHigh);
			if(isRightFingerHigh){
				if(finger1IsRightFinger){
					movedFinger1 = movedRightHighFinger;
					movedFinger2 = movedLeftLowFinger;
				}
				else{
					movedFinger1 = movedLeftLowFinger;
					movedFinger2 = movedRightHighFinger;
				}
			}
			else{
				var finger1IsLeftHigh = touch1.pageX>touch2.pageX;
				if(finger1IsRightFinger){
					movedFinger1 = movedRightLowFinger
					movedFinger2 = movedLeftHighFinger;
				}
				else{
					movedFinger1 = movedLeftHighFinger;
					movedFinger2 = movedRightLowFinger;
				}
			}
			
		};
		
		twoFingerTouch.onMoveFinger1 = function(touch){
			movedFinger1(touch, startDistanceFromMiddleToFinger1);
		};
		twoFingerTouch.onMoveFinger2= function(touch){
			movedFinger2(touch, startDistanceFromMiddleToFinger2);
		};
		function movedLeftHighFinger(touch, startDistanceFromMiddleToFinger){
			var proportionChange = getProportionChangeDistanceFromMiddle(touch, startDistanceFromMiddleToFinger, startMiddleFingers);
			leftDistanceFromMiddle = (proportionChange.x*startDimensions.width/2);
			topDistanceFromMiddle = (proportionChange.x*startDimensions.height/2);
			resize();
		}
		function movedLeftLowFinger(touch, startDistanceFromMiddleToFinger){
			var proportionChange = getProportionChangeDistanceFromMiddle(touch, startDistanceFromMiddleToFinger, startMiddleFingers);
			leftDistanceFromMiddle = (proportionChange.x*startDimensions.width/2);
			bottomDistanceFromMiddle = (proportionChange.x*startDimensions.height/2);
			resize();
		}
		function movedRightHighFinger(touch, startDistanceFromMiddleToFinger){
			var proportionChange = getProportionChangeDistanceFromMiddle(touch, startDistanceFromMiddleToFinger, startMiddleFingers);
			rightDistanceFromMiddle = (proportionChange.x*startDimensions.width/2);
			topDistanceFromMiddle = (proportionChange.x*startDimensions.height/2);
			resize();
		}
		function movedRightLowFinger(touch, startDistanceFromMiddleToFinger){
			var proportionChange = getProportionChangeDistanceFromMiddle(touch, startDistanceFromMiddleToFinger, startMiddleFingers);
			rightDistanceFromMiddle = (proportionChange.x*startDimensions.width/2);
			bottomDistanceFromMiddle= (proportionChange.x*startDimensions.height/2);
			resize();
		}
		function resize(){
			var left = (startPositionMiddle.x - leftDistanceFromMiddle);
			if(left<0)left=0;
			var top = startPositionMiddle.y - topDistanceFromMiddle;
			if(top<0)top = 0;
			var right = rightDistanceFromMiddle + startPositionMiddle.x;
			if(right>imageWidth)right = imageWidth;
			
			var bottom = bottomDistanceFromMiddle + startPositionMiddle.y;
			if(bottom>imageHeight)bottom=imageHeight;
			
			element.style.left = String(left)+'px';
			element.style.top=String(top)+'px';
			element.style.height = String(bottom - top)+'px';
			element.style.width = String(right -left)+'px';
			
				
		}
		function getProportionChangeDistanceFromMiddle(touch, startDistanceFromMiddleToFinger, startMiddleFingers){
			var x = (touch.pageX - startMiddleFingers.x)/
			startDistanceFromMiddleToFinger.x;
			var y = (touch.pageY - startMiddleFingers.y)/startDistanceFromMiddleToFinger.y;
			return {x:x, y:y};
		}
		function getCropperDimensions(){
			return {width:element.clientWidth, height:element.clientHeight};
		}
		function getCropperPosition(){
			return {x:element.offsetLeft+(element.clientWidth/2), y:element.offsetTop+(element.clientHeight/2)};
		}
	};
	return _Cropper;
	function Corner(params){
		var self = this;
		var getConstraints = params.getConstraints;
		var starting = params.starting;
		var setPosition = params.setPosition;
		var topElseBottom = params.topElseBottom;
		var leftElseRight = params.leftElseRight;
		this.getX = params.getX;
		this.getY = params.getY;
		var element = E.DIV();
		element.classList.add('corner');
		element.classList.add(params.className);
		this.getElement = function(){return element;};
		this.getConstraints = function(){
			var constraints = getConstraints(topElseBottom, leftElseRight);
			return constraints;
		};
		this.setPosition = setPosition;
		this.setVisible = function(value){
			element.style.display=value?'block':'none';
		};
		this.getElement = function(){return element;};
		this.getPosition= function(){
			return getAbsolute(element);
		}
		var dragManager = new DragManager({handle:self, stopPropagation:true});
		dragManager.onStart = starting;
	}
})();