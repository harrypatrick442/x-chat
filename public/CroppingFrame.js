var CroppingFrame = new (function () {
	var _CroppingFrame=function(params){
		EventEnabledBuilder(this);
		var self = this;
		var aspectRatio = params.aspectRatio;
		var element = E.DIV();
		element.classList.add('cropping-frame');
		var imageWidthRaw;
		var imageHeightRaw;
		var imageAspectRatio;
		var img;
		var imgWrapper = E.DIV();
		imgWrapper.classList.add('img-wrapper');
		var cropper = new Cropper({getImageWidth:getImageWidth, getImageHeight:getImageHeight, aspectRatio:aspectRatio});
		imgWrapper.appendChild(cropper.getElement());
		element.appendChild(imgWrapper);
		this.getElement = function(){return element;};
		this.show = function(){
			element.style.display='flex';
		};
		this.hide = function(){
			element.style.display='none';
		};
		this.load = load;
		function getImageWidth(){
			return imgWrapper.clientWidth;
		}
		function getImageHeight(){
			return imgWrapper.clientHeight;
		}
		function load(url){
			clear();
			self.show();
			img = E.IMG();
			img.onload = function() {
				imageWidthRaw = this.width;
				imageHeightRaw = this.height;
				imageAspectRatio = imageWidthRaw/imageHeightRaw;
				sizeImage();
				imgWrapper.appendChild(img);
			};
			img.onerror=error;
			img.src = url;
		}
		function clear(){
			if(img)
			{
				element.removeChild(img);
			}
			img=undefined;
		}
		function error(e){
			dispatchError(e);
		}
		function dispatchError(error){
			self.dispatchEvent({type:'error', error:error});
		}
		function sizeImage(){
			var croppingFrameAspectRatio = getCroppingFrameAspectRatio();
			if(croppingFrameAspectRatio>imageAspectRatio) sizeImageConstrainedByHeight();
			else sizeImageConstrainedByWidth(croppingFrameAspectRatio);
		}
		function sizeImageConstrainedByHeight(){
			var height = getCroppingFrameHeight();
			var width = imageAspectRatio * height;
			setImageWidthHeight(width, height);	
		}
		function sizeImageConstrainedByWidth(){
			var width = getCroppingFrameWidth();
			var height = width / imageAspectRatio;
			setImageWidthHeight(width, height);	
		}
		function setImageWidthHeight(width, height){
			imgWrapper.style.width = String(width)+'px';
			imgWrapper.style.height = String(height)+'px';
			var croppingFrameWidth = getCroppingFrameWidth();
			var croppingFrameHeight = getCroppingFrameHeight();
			var verticalMargin = (croppingFrameHeight-height)/2;
			var horizontalMargin = (croppingFrameWidth-width)/2;
			imgWrapper.style.marginTop=String(verticalMargin)+'px';
			imgWrapper.style.marginLeft=String(horizontalMargin)+'px';
		}
		function getCroppingFrameAspectRatio(){return element.clientWidth/element.clientHeight;}
		function getCroppingFrameHeight(){return element.clientHeight;}
		function getCroppingFrameWidth(){return element.clientWidth;}
	};
	return _CroppingFrame;
	function Cropper(params){
		var self = this;
		var getImageWidth= params.getImageWidth;
		var getImageHeight = params.getImageHeight;
		var aspectRatio = params.aspectRatio;
		var element = E.DIV();
		element.classList.add('cropper');
		var corners=[];
		each([true, false], function(topElseBottom){
			var className = 'corner-'+(topElseBottom?'top':'bottom');
			var corner = new Corner({className:className, topElseBottom:topElseBottom, leftElseRight:undefined, starting:starting,
			getConstraints:getConstraints, setPosition:createSetPosition(topElseBottom, undefined), getX:zero, getY:topElseBottom?getTop:getBottom});
			corners.push(corner);
			element.appendChild(corner.getElement());
			each([true, false], function(leftElseRight){
				className = 'corner-'+(topElseBottom?'top':'bottom')+'-'+(leftElseRight?'left':'right');
				corner = new Corner({className:className, topElseBottom:topElseBottom, leftElseRight:leftElseRight, starting:starting,
				getConstraints:getConstraints, setPosition:createSetPosition(topElseBottom, leftElseRight), getX:leftElseRight?getLeft:getRight, getY:topElseBottom?getTop:getBottom});
				corners.push(corner);
				element.appendChild(corner.getElement());
			});
		});
		each([true, false], function(leftElseRight){
			var className = 'corner-'+(leftElseRight?'left':'right');
			var corner = new Corner({className:className, topElseBottom:undefined, leftElseRight:leftElseRight, starting:starting,
			getConstraints:getConstraints, setPosition:createSetPosition(undefined,leftElseRight), getX:leftElseRight?getLeft:getRight, getY:zero});
			corners.push(corner);
			element.appendChild(corner.getElement());
		});
		this.positionDefault= function(imageWidth, imageHeight){
			
		};
		this.getElement = function(){return element;};
		var startDimenions
		var startPosition;
		function zero(){
			return 0;
		}
		function starting(){
			var width = element.clientWidth;
			var height = element.clientHeight;
			startDimensions = {width:width, height:height};
			var left = element.offsetLeft;
			var top = element.offsetTop;
			startPosition = {left:left, top:top, right:left+width, bottom:top+height};
		}
		function createSetPosition(topElseBottom, leftElseRight){
			var vertical;
			if(topElseBottom!=undefined){
				vertical = (function(setVertical){ return function(p){setVertical(p.y);};})(topElseBottom?setTop:setBottom);
			}
			var horizontal;
			if(leftElseRight!=undefined){
				horizontal = (function(setHorizontal){ return function(p){setHorizontal(p.x);};})(leftElseRight?setLeft:setRight);
			}
			var setPosition;
			if(vertical)
			{
				if(!horizontal)
					setPosition = vertical;
				else
					setPosition = (function(vertical, horizontal){ return function(p){ vertical(p); horizontal(p);};})(vertical, horizontal);
			}
			else
				setPosition = horizontal;
			if(aspectRatio)
				return createAspectRatioFixer(setPosition, leftElseRight,topElseBottom);
			return setPosition;
		}
		function createAspectRatioFixer(setPosition, leftElseRight, topElseBottom){
			return (function(setPosition){
				if(leftElseRight&&!topElseBottom)
					return function(p){
						var averageDistanceFromStart = ((p.x-startPosition.left)+((startPosition.bottom-p.y)*aspectRatio))/2;
						var newWidth = startDimensions.width - averageDistanceFromStart;
						var newHeight = newWidth / aspectRatio;
						setPosition({x:averageDistanceFromStart +startPosition.left, y:(newHeight +startPosition.top)});
					};
				if(!leftElseRight&&topElseBottom)
					return function(p){
						var averageDistanceFromStart = ((startPosition.right-p.x)+((p.y-startPosition.top)*aspectRatio))/2;
						var newHeight = startDimensions.height - averageDistanceFromStart;
						var newWidth = newHeight * aspectRatio;
						setPosition({x:startPosition.left + newWidth, y:averageDistanceFromStart + startPosition.top });
					};
				return function(p){
					var z = ((p.x - startPosition.left)+((p.y-startPosition.top)*aspectRatio))/2;
					setPosition({x:startPosition.left + z, y:(startPosition.top+z)/aspectRatio});
				};
			})(setPosition);
		}
		function getLeft(){
			return element.offsetLeft;
		}
		function getRight(){
			return getLeft()+element.clientWidth;
		}
		function getTop(){
			return element.offsetTop;
		}
		function getBottom(){
			return getTop()+element.clientHeight;
		}
		
		function setLeft(x){
			element.style.left=String(x)+'px';
			element.style.width = String(startDimensions.width + startPosition.left - x)+'px';
		}
		function setRight(x){
			element.style.width = String(x - startPosition.left)+'px';
		}
		function setTop(y){
			element.style.top=String(y)+'px';
			element.style.height = String(startDimensions.height +  startPosition.top - y)+'px';
		}
		function setBottom(y){
			element.style.height = String(y - startPosition.top)+'px';
		}
		function getConstraints(topElseBottom, leftElseRight){
			if(aspectRatio){
					var maxDistanceX;
					var maxDistanceY;
					var maxNegativeDistanceX;
					var maxNegativeDistanceY;
					var maxX;
					var maxY;
					var minX;
					var minY;
				if(leftElseRight){
					if(topElseBottom){
						console.log('doing it that way');
						maxDistanceX = getRight()-getLeft();
						console.log('maxDistanceX: '+maxDistanceX);
						maxDistanceY = getBottom()-getTop();
						console.log('maxDistanceY: '+maxDistanceY);
						maxNegativeDistanceX = getLeft();
						console.log('maxNegativeDistanceX: '+maxNegativeDistanceX);
						maxNegativeDistanceY = getTop();
						console.log('maxNegativeDistanceY: '+maxNegativeDistanceY);
						var maxDistanceYTimesAspectRatio=(maxDistanceY*aspectRatio);
						var maxNegativeDistanceYTimesAspectRatio= maxNegativeDistanceY*aspectRatio;
						if(maxDistanceX>maxDistanceYTimesAspectRatio)
							maxDistanceX = maxDistanceYTimesAspectRatio;
						else{
							maxDistanceY = maxDistanceX/aspectRatio;
						}
						if(maxNegativeDistanceX>maxNegativeDistanceYTimesAspectRatio)
							maxNegativeDistanceX = maxNegativeDistanceYTimesAspectRatio 	;
						else{
							maxNegativeDistanceY = maxNegativeDistanceX/aspectRatio;
						}
						maxX = maxDistanceX+ getLeft();
						maxY = maxDistanceY + getTop();
						minX = getLeft() - maxNegativeDistanceX;
						minY = getTop() - maxNegativeDistanceY;
					}
					else{
						maxDistanceX = getRight()-getLeft();
						maxDistanceY = getImageHeight()-getBottom();
						maxNegativeDistanceX = getLeft();
						maxNegativeDistanceY = getBottom() - getTop();
						var maxDistanceYTimesAspectRatio=maxDistanceY*aspectRatio;
						var maxNegativeDistanceYTimesAspectRatio= maxNegativeDistanceY*aspectRatio;
						if(maxDistanceX>maxNegativeDistanceYTimesAspectRatio)
							maxDistanceX = maxNegativeDistanceYTimesAspectRatio;
						else{
							maxNegativeDistanceY = maxDistanceX/aspectRatio;
						}
						if(maxNegativeDistanceX>maxDistanceYTimesAspectRatio)
							maxNegativeDistanceX = maxDistanceYTimesAspectRatio 	;
						else{
							maxDistanceY = maxNegativeDistanceX/aspectRatio;
						}
						maxX = maxDistanceX+ getLeft();
						maxY = maxDistanceY + getBottom();
						minX = getLeft() - maxNegativeDistanceX;
						minY = getBottom() - maxNegativeDistanceY;
						
					}
				}
				else{
					if(topElseBottom){
						maxDistanceX = getImageWidth()-getRight();
						maxDistanceY = getBottom()-getTop();
						maxNegativeDistanceX = getRight() - getLeft();
						maxNegativeDistanceY = getTop();
						var maxDistanceYTimesAspectRatio=(maxDistanceY*aspectRatio);
						var maxNegativeDistanceYTimesAspectRatio= maxNegativeDistanceY*aspectRatio;
						if(maxDistanceX>maxNegativeDistanceYTimesAspectRatio)
							maxDistanceX = maxNegativeDistanceYTimesAspectRatio;
						else{
							maxNegativeDistanceY = maxDistanceX/aspectRatio;
						}
						if(maxNegativeDistanceX>maxDistanceYTimesAspectRatio)
							maxNegativeDistanceX = maxDistanceYTimesAspectRatio 	;
						else{
							maxDistanceY = maxNegativeDistanceX/aspectRatio;
						}
						maxX = maxDistanceX+ getRight();
						maxY = maxDistanceY + getTop();
						minX = getRight() - maxNegativeDistanceX;
						minY = getTop() - maxNegativeDistanceY;
					}else{
						maxDistanceX = getImageWidth()-getRight();
						maxDistanceY = getImageHeight()-getBottom();
						maxNegativeDistanceX = getRight() - getLeft();
						maxNegativeDistanceY = getBottom() - getTop();
						var maxDistanceYTimesAspectRatio=(maxDistanceY*aspectRatio);
						var maxNegativeDistanceYTimesAspectRatio= maxNegativeDistanceY*aspectRatio;
						if(maxDistanceX>maxDistanceYTimesAspectRatio)
							maxDistanceX = maxDistanceYTimesAspectRatio;
						else{
							maxDistanceY = maxDistanceX/aspectRatio;
						}
						if(maxNegativeDistanceX>maxNegativeDistanceYTimesAspectRatio)
							maxNegativeDistanceX = maxNegativeDistanceYTimesAspectRatio 	;
						else{
							maxNegativeDistanceY = maxNegativeDistanceX/aspectRatio;
						}
						maxX = maxDistanceX+ getRight();
						maxY = maxDistanceY + getBottom();
						minX = getRight() - maxNegativeDistanceX;
						minY = getBottom() - maxNegativeDistanceY;
					}
				}
				return {minX:minX, minY:minY, maxX:maxX, maxY:maxY};
				console.log('doing it that way');
				var maxDistanceX = leftElseRight?getRight()-getLeft():getImageWidth()-getRight();
				console.log('maxDistanceX: '+maxDistanceX);
				var maxDistanceY = topElseBottom? getBottom()-getTop(): getImageHeight()-getBottom();
				console.log('maxDistanceY: '+maxDistanceY);
				var maxNegativeDistanceX = leftElseRight?getLeft():getRight() - getLeft();
				console.log('maxNegativeDistanceX: '+maxNegativeDistanceX);
				var maxNegativeDistanceY = topElseBottom?getTop():getBottom() - getTop();
				console.log('maxNegativeDistanceY: '+maxNegativeDistanceY);
				var distanceYTimesAspectRatio=(topElseBottom^leftElseRight?maxNegativeDistanceY:maxDistanceY)*aspectRatio;
				if(maxDistanceX>distanceYTimesAspectRatio)
					maxDistanceX = distanceYTimesAspectRatio;
				else{
						maxDistanceY = ((topElseBottom^leftElseRight)?maxNegativeDistanceX:maxDistanceX)/aspectRatio;
				}
				var maxDistanceYTimesAspectRatio= (topElseBottom^leftElseRight?maxDistanceY:maxNegativeDistanceY)*aspectRatio;
				if(maxDistanceYTimesAspectRatio)
					maxNegativeDistanceX = maxDistanceYTimesAspectRatio 	;
				else{
					maxNegativeDistanceY = ((topElseBottom^leftElseRight)?maxNegativeDistanceX:maxDistanceX)/aspectRatio;
				}
				console.log('maxDistanceX: '+maxDistanceX);
				console.log('maxDistanceY: '+maxDistanceY);
				console.log('maxNegativeDistanceX: '+maxNegativeDistanceX);
				console.log('maxNegativeDistanceY: '+maxNegativeDistanceY);
				var maxX = leftElseRight?maxDistanceX+ getLeft():maxDistanceX+getRight();
				var maxY = topElseBottom?maxDistanceY + getTop():maxDistanceY+getBottom();
				var minX = leftElseRight? getLeft() - maxNegativeDistanceX:getRight() - maxNegativeDistanceX;
				var minY = topElseBottom?getTop() - maxNegativeDistanceY:getBottom() - maxNegativeDistanceY;
				console.log({mimX:minX, minY:minY, maxX:maxX, maxY:maxY});
				return {minX:minX, minY:minY, maxX:maxX, maxY:maxY};
			}
			if(leftElseRight){
				if(topElseBottom)
					return {minX:0, maxX:getRight(), minY:0, maxY:getBottom()};
				return {minX:0, maxX:getRight(), minY:getTop(), maxY:getImageHeight()};
			}
			if(topElseBottom)
				return {minX:getLeft(), maxX:getImageWidth(), minY:0, maxY:getBottom()};
			return {minX:getLeft(), maxX:getImageWidth(), minY:getTop(), maxY:getImageHeight()};
			
		}
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
				return getConstraints(topElseBottom, leftElseRight);
			};
			this.setPosition = setPosition;
			this.getElement = function(){return element;};
			this.getAbsolute= function(){
				return getAbsolute(element);
			}
			var dragManager = new DragManager({handle:self});
			dragManager.onStart = starting;
		}
	}
})();