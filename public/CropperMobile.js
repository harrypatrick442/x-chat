var Cropper = (function(){
	const MIN_FINGER_SPACING_FOR_RESIZE_COMPONENT = 45;
	const MIN_WIDTH_HEIGHT=70;
	var _Cropper=function(params){
		var self = this;
		var aspectRatio = params.aspectRatio;
		var getImageWidth= params.getImageWidth;
		var getImageHeight = params.getImageHeight;
		var aspectRatio = params.aspectRatio;
		var minWidth = 50;
		var minHeight = 50;
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
		this.getPosition = function(e){
			return {left:element.offsetLeft, top:element.offsetTop};//{left:absolute.left+(getWidth()/2), top:absolute.top+(getHeight()/2)};
		};
		var twoFingerTouch = new TwoFingerTouch({element:element});
		var startMiddleFingers;
		var startPosition;
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
		var touch1;
		var touch2;
		twoFingerTouch.onStart= aspectRatio?onStartAspectRatioFixed:onStartAspectRatioNotFixed;
		
		twoFingerTouch.onStartFinger1= function(touch){
			calculateMoveBounds();
			touch1 = touch;
			startPositionFingerWithOffset = getStartPositionWithOffsetForMove(touch);
			movedFinger1 = move;
		};
		twoFingerTouch.onEndFinger1= function(touch){
			calculateMoveBounds();
			if(touch2){
				movedFinger2 = move;
				startPositionFingerWithOffset = getStartPositionWithOffsetForMove(touch2);
			}
			else
				movedFinger2 = doNothing;
			movedFinger1 = doNothing;
		};
		twoFingerTouch.onEndFinger2= function(touch){
			calculateMoveBounds();
			startPositionFingerWithOffset = getStartPositionWithOffsetForMove(touch1);
			movedFinger1 = move;
			movedFinger2 = doNothing;
		};
		twoFingerTouch.onMoveFinger1 = aspectRatio?onMoveFinger1AspectRatioFixed:onMoveFinger1AspectRatioNotFixed;
		twoFingerTouch.onMoveFinger2= aspectRatio?onMoveFinger2AspectRatioFixed:onMoveFinger2AspectRatioNotFixed;
		twoFingerTouch.onEnd = function(touch){
			touch1 = undefined;
			touch2 = undefined;
			//calculateMoveBounds();
		};
		function onMoveFinger1AspectRatioNotFixed(touch){
			touch1 = touch;
			movedFinger1(touch, startDistanceFromMiddleToFinger1);
		};
		function onMoveFinger2AspectRatioNotFixed(touch){
			touch2 = touch;
			movedFinger2(touch, startDistanceFromMiddleToFinger2);
		};
		function onMoveFinger1AspectRatioFixed(touch){
			touch1 = touch;
			movedFinger1(touch);
		}
		function onMoveFinger2AspectRatioFixed(touch){
			touch2 = touch;
			movedFinger2(touch);
		}
		function onStart(e){
			imageWidth = getImageWidth();
			imageHeight = getImageHeight();
			startPosition = getCropperPosition();
			startDimensions = getCropperDimensions();
		}
		function onStartAspectRatioFixed(e){
			onStart(e);
			touch1 = e.touch1;
			touch2 = e.touch2;
			startFingerDistance= getFingerDistance(touch1, touch2);
			maxTimesFingerDistance= getMaxTimesFingerDistance();
			if(startFingerDistance<MIN_FINGER_SPACING_FOR_RESIZE_COMPONENT)
			{
				movedFinger1 = move;
				movedFinger2 = doNothing;
				calculateMoveBounds();
			}
			movedFinger1 = movedFixedAspectRatio;
			movedFinger2 = movedFixedAspectRatio;
		}
		function onStartAspectRatioNotFixed(e){
			onStart(e);
			touch1 = e.touch1;
			touch2 = e.touch2;
			startMiddleFingers = {x:(touch1.pageX+touch2.pageX)/2, y:(touch1.pageY+touch2.pageY)/2};
			startDistanceFromMiddleToFinger1= {x:touch1.pageX - startMiddleFingers.x, y:touch1.pageY-startMiddleFingers.y};
			startDistanceFromMiddleToFinger2= {x:touch2.pageX - startMiddleFingers.x, y:touch2.pageY-startMiddleFingers.y};
			var finger1IsRightFinger=touch1.pageX>touch2.pageX;
			var finger1IsLowFinger = touch1.pageY>touch2.pageY; 
			var isRightFingerHigh = (finger1IsRightFinger^finger1IsLowFinger);
			var hasHorizontalResize = (finger1IsRightFinger?(touch1.pageX-touch2.pageX):(touch2.pageX-touch1.pageX))>MIN_FINGER_SPACING_FOR_RESIZE_COMPONENT;
			var hasVerticalResize = (finger1IsLowFinger?(touch1.pageY-touch2.pageY):(touch2.pageY- touch1.pageY))>MIN_FINGER_SPACING_FOR_RESIZE_COMPONENT;
			if(!hasHorizontalResize){
				if(!hasVerticalResize){
					movedFinger1 = move;
					movedFinger2 = doNothing;
					calculateMoveBounds();
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
				return;
			}
			
			var finger1IsLeftHigh = touch1.pageX>touch2.pageX;
			if(finger1IsRightFinger){
				movedFinger1 = movedRightLowFinger
				movedFinger2 = movedLeftHighFinger;
			}
			else{
				movedFinger1 = movedLeftHighFinger;
				movedFinger2 = movedRightLowFinger;
			}
		};
		function getFingerDistance(){
			return Math.sqrt(Math.pow(touch1.pageX-touch2.pageX, 2)+Math.pow(touch1.pageY-touch2.pageY, 2));
		}
		function getMaxTimesFingerDistance(){
			if(imageWidth>imageHeight*aspectRatio)
				return imageHeight*aspectRatio/startDimensions.width;
			return imageHeight/startDimensions.width;
		}
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
		function movedFixedAspectRatio(){
			var distance = getFingerDistance();
			var timesFingerDistance = distance/startFingerDistance;
			console.log(timesFingerDistance);
			console.log(maxTimesFingerDistance);
			if(timesFingerDistance>maxTimesFingerDistance)
				timesFingerDistance=maxTimesFingerDistance;
			var newWidth = startDimensions.width*timesFingerDistance;
			var newHeight = newWidth/aspectRatio;
			var dWidthOverTwo = (newWidth - startDimensions.width)/2;
			var dHeightOverTwo = dWidthOverTwo/aspectRatio;
			var left = startPosition.left-dWidthOverTwo;
			var top = startPosition.top - dHeightOverTwo;
			if(left<0)
				left=0;
			else if(left+newWidth>imageWidth)
				left = imageWidth-newWidth;
			if(top<0)
				top=0;
			else if(top + newHeight>imageHeight)
				top = imageHeight - newHeight;
			element.style.width = String(newWidth)+'px';
			element.style.height=String(newHeight)+'px';
			element.style.left = String(left)+'px';
			element.style.top=String(top)+'px';
		}
		function resize(){
			resizeHorizontal();
			resizeVertical();
			
				
		}
		function resizeHorizontal(){
			var left = (startPosition.x - leftDistanceFromMiddle);
			if(left<0)left=0;
			var right = rightDistanceFromMiddle + startPosition.x;
			if(right>imageWidth)right = imageWidth;
			element.style.left = String(left)+'px';
			element.style.width = String(right -left)+'px';
		}
		function resizeVertical(){
			var top = startPosition.y - topDistanceFromMiddle;
			if(top<0)top = 0;
			var bottom = bottomDistanceFromMiddle + startPosition.y;
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
			return {width:element.clientWidth, halfWidth:element.clientWidth/2, height:element.clientHeight, halfHeight:element.clientHeight/2};
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