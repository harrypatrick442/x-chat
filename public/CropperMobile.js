var Cropper = (function(){
	const MIN_FINGER_SPACING_FOR_RESIZE_COMPONENT = 30;
	const MIN_WIDTH_HEIGHT=70;
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
		var movedFinger1 = doNothing;
		var movedFinger2 = doNothing;
		var leftDistanceFromMiddle;
		var topDistanceFromMiddle;
		var rightDistanceFromMiddle;
		var bottomDistanceFromMiddle;
		var imageWidth;
		var imageHeight;
		var startPositionFingerWithOffset;
		var moveBounds;
		twoFingerTouch.onStart= function(e){
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
			var hasHorizontalResize = (finger1IsRightFinger?(touch1.pageX-touch2.pageX):(touch2.pageX-touch1.pageX))>MIN_FINGER_SPACING_FOR_RESIZE_COMPONENT;
			var hasVerticalResize = (finger1IsLowFinger?(touch1.pageY-touch2.pageY):(touch2.pageY- touch1.pageY))>MIN_FINGER_SPACING_FOR_RESIZE_COMPONENT;
			console.log('hasHorizontalResize: '+hasHorizontalResize);
			console.log('hasVerticalResize: '+hasVerticalResize);
			if(!hasHorizontalResize){
				if(!hasVerticalResize){
					movedFinger1 = move;
					movedFinger2 = doNothing;
					return;
				}
				if(finger1IsLowFinger){
					movedFinger1 = movedBottomFingerVerticalResize;
					movedFinger2 = movedTopFingerVerticalResize;
				}
				else{
					movedFinger1 = movedTopFingerVerticalResize;
					movedFinger2 = movedBottomFingerVerticalResize;
				}
				return;
			}
			if(!hasVerticalResize){
				if(finger1IsRightFinger){
					movedFinger1 = movedRightFingerHorizontalResize;
					movedFinger2 = movedLeftFingerHorizontalResize;
				}
				else{
					movedFinger1 = movedLeftFingerHorizontalResize;
					movedFinger2 = movedRightFingerHorizontalResize;
				}
				return;
			}
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
		twoFingerTouch.onStartFinger1= function(touch){
			calculateMoveBounds();
			startPositionFingerWithOffset = getStartPositionWithOffsetForMove(touch);
			movedFinger1 = move;
		};
		twoFingerTouch.onEndFinger1= function(touch){
			calculateMoveBounds();
			startPositionFingerWithOffset = getStartPositionWithOffsetForMove(touch);
			movedFinger1 = doNothing;
			movedFinger2 = move;
		};
		twoFingerTouch.onEndFinger2= function(touch){
			calculateMoveBounds();
			startPositionFingerWithOffset = getStartPositionWithOffsetForMove(touch);
			movedFinger1 = move;
			movedFinger2 = doNothing;
		};
		twoFingerTouch.onMoveFinger1 = function(touch){
			movedFinger1(touch, startDistanceFromMiddleToFinger1);
		};
		twoFingerTouch.onMoveFinger2= function(touch){
			movedFinger2(touch, startDistanceFromMiddleToFinger2);
		};
		twoFingerTouch.onEnd = function(touch){
			movedFinger1 = doNothing;
			movedFinger2 = doNothing;
			//calculateMoveBounds();
		};
		function getStartPositionWithOffsetForMove(touch){
			return {x:element.offsetLeft - touch.pageX, y:element.offsetTop - touch.pageY};
		}
		function calculateMoveBounds(){
			moveBounds = {left:0, top:0, right:getImageWidth() - element.clientWidth, bottom:getImageHeight() - element.clientHeight};
		}
		function move(touch, startDistanceFromMiddleToFinger){
			var x = touch.pageX + startPositionFingerWithOffset.x;
			var y = touch.pageY + startPositionFingerWithOffset.y;
			if(x>moveBounds.right)
				x=moveBounds.right;
			else
				if(x<moveBounds.left)
					x = moveBounds.left;
				
			if(y>moveBounds.bottom)
				y=moveBounds.bottom;
			else if (y<moveBounds.left)
				y=moveBounds.left;
			element.style.left=String(x)+'px';
			element.style.top=String(y)+'px';
		}
		function doNothing(){}
		function movedLeftHighFinger(touch, startDistanceFromMiddleToFinger){
			var proportionChange = getProportionChangeDistanceFromMiddle(touch, startDistanceFromMiddleToFinger, startMiddleFingers);
			leftDistanceFromMiddle = (proportionChange.x*startDimensions.halfWidth);
			if(leftDistanceFromMiddle <MIN_WIDTH_HEIGHT)leftDistanceFromMiddle= MIN_WIDTH_HEIGHT;
			topDistanceFromMiddle = (proportionChange.y*startDimensions.halfHeight);
			if(topDistanceFromMiddle <MIN_WIDTH_HEIGHT)topDistanceFromMiddle= MIN_WIDTH_HEIGHT;
			resize();
		}
		function movedLeftLowFinger(touch, startDistanceFromMiddleToFinger){
			var proportionChange = getProportionChangeDistanceFromMiddle(touch, startDistanceFromMiddleToFinger, startMiddleFingers);
			leftDistanceFromMiddle = (proportionChange.x*startDimensions.halfWidth);
			if(leftDistanceFromMiddle <MIN_WIDTH_HEIGHT)leftDistanceFromMiddle= MIN_WIDTH_HEIGHT;
			bottomDistanceFromMiddle = (proportionChange.y*startDimensions.halfHeight);
			if(bottomDistanceFromMiddle <MIN_WIDTH_HEIGHT)bottomDistanceFromMiddle= MIN_WIDTH_HEIGHT;
			resize();
		}
		function movedRightHighFinger(touch, startDistanceFromMiddleToFinger){
			var proportionChange = getProportionChangeDistanceFromMiddle(touch, startDistanceFromMiddleToFinger, startMiddleFingers);
			rightDistanceFromMiddle = (proportionChange.x*startDimensions.halfWidth);
			if(rightDistanceFromMiddle <MIN_WIDTH_HEIGHT)rightDistanceFromMiddle= MIN_WIDTH_HEIGHT;
			topDistanceFromMiddle = (proportionChange.y*startDimensions.halfHeight);
			if(topDistanceFromMiddle <MIN_WIDTH_HEIGHT)topDistanceFromMiddle= MIN_WIDTH_HEIGHT;
			resize();
		}
		function movedRightLowFinger(touch, startDistanceFromMiddleToFinger){
			var proportionChange = getProportionChangeDistanceFromMiddle(touch, startDistanceFromMiddleToFinger, startMiddleFingers);
			rightDistanceFromMiddle = (proportionChange.x*startDimensions.halfWidth);
			if(rightDistanceFromMiddle <MIN_WIDTH_HEIGHT)rightDistanceFromMiddle= MIN_WIDTH_HEIGHT;
			bottomDistanceFromMiddle= (proportionChange.y*startDimensions.halfHeight);
			if(bottomDistanceFromMiddle <MIN_WIDTH_HEIGHT)bottomDistanceFromMiddle= MIN_WIDTH_HEIGHT;
			resize();
		}
		function movedRightFingerHorizontalResize (touch, startDistanceFromMiddleToFinger){
			rightDistanceFromMiddle = (getProportionChangeDistanceFromMiddleHorizontal(touch, startDistanceFromMiddleToFinger, startMiddleFingers)
			*startDimensions.halfWidth);
			if(rightDistanceFromMiddle <MIN_WIDTH_HEIGHT)rightDistanceFromMiddle= MIN_WIDTH_HEIGHT;
			resizeHorizontal();
		}
		function movedLeftFingerHorizontalResize(touch, startDistanceFromMiddleToFinger){
			leftDistanceFromMiddle = (getProportionChangeDistanceFromMiddleHorizontal(touch, startDistanceFromMiddleToFinger, startMiddleFingers)
			*startDimensions.halfWidth);
			if(leftDistanceFromMiddle <MIN_WIDTH_HEIGHT)leftDistanceFromMiddle= MIN_WIDTH_HEIGHT;
			resizeHorizontal();
		}
		function movedTopFingerVerticalResize(touch, startDistanceFromMiddleToFinger){
			topDistanceFromMiddle = (getProportionChangeDistanceFromMiddleVertical(touch, startDistanceFromMiddleToFinger, startMiddleFingers)
			*startDimensions.halfHeight);
			if(topDistanceFromMiddle <MIN_WIDTH_HEIGHT)topDistanceFromMiddle= MIN_WIDTH_HEIGHT;
			resizeVertical();
		}
		function movedBottomFingerVerticalResize(touch, startDistanceFromMiddleToFinger){
			bottomDistanceFromMiddle = (getProportionChangeDistanceFromMiddleVertical(touch, startDistanceFromMiddleToFinger, startMiddleFingers)
			*startDimensions.halfHeight);
			if(bottomDistanceFromMiddle <MIN_WIDTH_HEIGHT)bottomDistanceFromMiddle= MIN_WIDTH_HEIGHT;
			resizeVertical();
		}
		function resize(){
			resizeHorizontal();
			resizeVertical();
			
				
		}
		function resizeHorizontal(){
			var left = (startPositionMiddle.x - leftDistanceFromMiddle);
			if(left<0)left=0;
			var right = rightDistanceFromMiddle + startPositionMiddle.x;
			if(right>imageWidth)right = imageWidth;
			element.style.left = String(left)+'px';
			element.style.width = String(right -left)+'px';
		}
		function resizeVertical(){
			var top = startPositionMiddle.y - topDistanceFromMiddle;
			if(top<0)top = 0;
			var bottom = bottomDistanceFromMiddle + startPositionMiddle.y;
			if(bottom>imageHeight)bottom=imageHeight;
			element.style.top=String(top)+'px';
			element.style.height = String(bottom - top)+'px';
		}
		function getProportionChangeDistanceFromMiddle(touch, startDistanceFromMiddleToFinger, startMiddleFingers){
			var x = (touch.pageX - startMiddleFingers.x)/
			startDistanceFromMiddleToFinger.x;
			var y = (touch.pageY - startMiddleFingers.y)/startDistanceFromMiddleToFinger.y;
			return {x:x, y:y};
		}
		function getProportionChangeDistanceFromMiddleHorizontal(touch, startDistanceFromMiddleToFinger, startMiddleFinger){
			return (touch.pageX - startMiddleFingers.x)/
			startDistanceFromMiddleToFinger.x;
		}
		function getProportionChangeDistanceFromMiddleVertical(touch, startDistanceFromMiddleToFinger, startMiddleFinger){
			return (touch.pageY - startMiddleFingers.y)/startDistanceFromMiddleToFinger.y;
		}
		function getCropperDimensions(){
			return {halfWidth:element.clientWidth/2, halfHeight:element.clientHeight/2};
		}
		function getCropperPosition(){
			return {left:element.offsetLeft, x:element.offsetLeft+(element.clientWidth/2), top:element.offsetTop, y:element.offsetTop+(element.clientHeight/2)};
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