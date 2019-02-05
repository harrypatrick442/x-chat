var Cropper = (function(){
	var _Cropper=function(params){
		var self = this;
		var getImageWidth= params.getImageWidth;
		var getImageHeight = params.getImageHeight;
		var aspectRatio = params.aspectRatio;
		var corners=[];
		var startDimenions
		var startPosition;
		var minWidth = 50;
		var minHeight = 50;
		var element = E.DIV();
		element.classList.add('cropper');
		var middleCorners=[]
		each([true, false], function(topElseBottom){
			var className = 'corner-'+(topElseBottom?'top':'bottom');
			var corner = new Corner({className:className, topElseBottom:topElseBottom, leftElseRight:undefined, starting:starting,
			getConstraints:getResizeConstraints, setPosition:createSetPosition(topElseBottom, undefined), getX:zero, getY:topElseBottom?getTop:getBottom});
			corners.push(corner);
			middleCorners.push(corner);
			element.appendChild(corner.getElement());
			each([true, false], function(leftElseRight){
				className = 'corner-'+(topElseBottom?'top':'bottom')+'-'+(leftElseRight?'left':'right');
				corner = new Corner({className:className, topElseBottom:topElseBottom, leftElseRight:leftElseRight, starting:starting,
				getConstraints:getResizeConstraints, setPosition:createSetPosition(topElseBottom, leftElseRight), getX:leftElseRight?getLeft:getRight, getY:topElseBottom?getTop:getBottom});
				corners.push(corner);
				element.appendChild(corner.getElement());
			});
		});
		each([true, false], function(leftElseRight){
			var className = 'corner-'+(leftElseRight?'left':'right');
			var corner = new Corner({className:className, topElseBottom:undefined, leftElseRight:leftElseRight, starting:starting,
			getConstraints:getResizeConstraints, setPosition:createSetPosition(undefined,leftElseRight), getX:leftElseRight?getLeft:getRight, getY:zero});
			corners.push(corner);
			middleCorners.push(corner);
			element.appendChild(corner.getElement());
		});
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
			setMiddleCornersVisible(aspectRatio?false:true);
		};
		this.getElement = function(){return element;};
		this.getConstraints= getMoveConstraints;
		this.getPosition = function(e){
			//var absolute = getAbsolute(element);
			return {left:e.pageX, top:e.pageY};//{left:absolute.left+(getWidth()/2), top:absolute.top+(getHeight()/2)};
		};
		this.getX = function(){
			return getLeft()+(getWidth()/2);
		};
		this.getY = function(){
			return getTop()+(getHeight()/2);
		};
		this.setPosition = function(p){
			element.style.left=String(p.x - (getWidth()/2))+'px';
			element.style.top=String(p.y - (getHeight()/ 2))+'px';
		};
		var dragManager = new DragManager({handle:self});
		dragManager.onStart = function(){
			
		};
		dragManager.onMove= function(){
			
		};
		function setMiddleCornersVisible(value){
			each(middleCorners, function(middleCorner){
				middleCorner.setVisible(value);
			});
		}
		function getMoveConstraints(){
			var cropperWidth = getWidth();
			var cropperHeight = getHeight();
			var halfWidth = cropperWidth/2;
			var halfHeight = cropperHeight/2;
			var minX = halfWidth;
			var minY = halfHeight;
			var maxX = getImageWidth()- halfWidth;
			var maxY = getImageHeight() - halfHeight;
			return {minX:minX, minY:minY, maxX:maxX, maxY:maxY};
		}
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
			return getLeft()+getWidth();
		}
		function getTop(){
			return element.offsetTop;
		}
		function getBottom(){
			return getTop()+getHeight();
		}
		function getWidth(){
			return element.clientWidth;
		}
		function getHeight(){
			return element.clientHeight;
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
		function getResizeConstraints(topElseBottom, leftElseRight){
			if(!aspectRatio){
				if(leftElseRight){
					if(topElseBottom)
						return {minX:0, maxX:getRight(), minY:0, maxY:getBottom()};
					return {minX:0, maxX:getRight(), minY:getTop(), maxY:getImageHeight()};
				}
				if(topElseBottom)
					return {minX:getLeft(), maxX:getImageWidth(), minY:0, maxY:getBottom()};
				return {minX:getLeft(), maxX:getImageWidth(), minY:getTop(), maxY:getImageHeight()};
			}
			var maxDistanceX;
			var maxDistanceY;
			var maxNegativeDistanceX;
			var maxNegativeDistanceY;
			var maxX;
			var maxY;
			var minX;
			var minY;
			if(leftElseRight){
					maxNegativeDistanceX = getLeft();
					maxDistanceX = getRight()-(getLeft()+ minWidth);
				if(topElseBottom){
					maxDistanceY = getBottom()-(getTop()+minHeight);
					maxNegativeDistanceY = getTop();
					var maxDistanceYTimesAspectRatio=(maxDistanceY*aspectRatio);
					var maxNegativeDistanceYTimesAspectRatio= maxNegativeDistanceY*aspectRatio;
					if(maxDistanceX>maxDistanceYTimesAspectRatio)
						maxDistanceX = maxDistanceYTimesAspectRatio;
					else{
						maxDistanceY = maxDistanceX/aspectRatio;
					}
					if(maxNegativeDistanceX>maxNegativeDistanceYTimesAspectRatio)
						maxNegativeDistanceX = maxNegativeDistanceYTimesAspectRatio;
					else{
						maxNegativeDistanceY = maxNegativeDistanceX/aspectRatio;
					}
					maxY = maxDistanceY + getTop();
					minY = getTop() - maxNegativeDistanceY;
				}
				else
				{
					maxDistanceY = getImageHeight()-getBottom();
					maxNegativeDistanceY = getBottom() - (getTop() +minHeight);
					var maxDistanceYTimesAspectRatio=maxDistanceY*aspectRatio;
					var maxNegativeDistanceYTimesAspectRatio= maxNegativeDistanceY*aspectRatio;
					if(maxDistanceX>maxNegativeDistanceYTimesAspectRatio)
						maxDistanceX = maxNegativeDistanceYTimesAspectRatio;
					else{
						maxNegativeDistanceY = maxDistanceX/aspectRatio;
					}
					if(maxNegativeDistanceX>maxDistanceYTimesAspectRatio)
						maxNegativeDistanceX = maxDistanceYTimesAspectRatio;
					else{
						maxDistanceY = maxNegativeDistanceX/aspectRatio;
					}
					maxY = maxDistanceY + getBottom();
					minY = getBottom() - maxNegativeDistanceY;
					
				}
				maxX = maxDistanceX+ getLeft();
				minX = getLeft() - maxNegativeDistanceX;
			}
			else
			{
				maxDistanceX = getImageWidth()-getRight();
				maxNegativeDistanceX = getRight() - (getLeft() + minWidth);
				if(topElseBottom){
					maxDistanceY = getBottom()-(getTop()+minHeight);
					maxNegativeDistanceY = getTop();
					var maxDistanceYTimesAspectRatio=(maxDistanceY*aspectRatio);
					var maxNegativeDistanceYTimesAspectRatio= maxNegativeDistanceY*aspectRatio;
					if(maxDistanceX>maxNegativeDistanceYTimesAspectRatio)
						maxDistanceX = maxNegativeDistanceYTimesAspectRatio;
					else{
						maxNegativeDistanceY = maxDistanceX/aspectRatio;
					}
					if(maxNegativeDistanceX>maxDistanceYTimesAspectRatio)
						maxNegativeDistanceX = maxDistanceYTimesAspectRatio;
					else{
						maxDistanceY = maxNegativeDistanceX/aspectRatio;
					}
					maxY = maxDistanceY + getTop();
					minY = getTop() - maxNegativeDistanceY;
				}
				else
				{
					maxDistanceY = getImageHeight()- getBottom();
					maxNegativeDistanceY = getBottom() - (getTop()+minHeight);
					var maxDistanceYTimesAspectRatio=(maxDistanceY*aspectRatio);
					var maxNegativeDistanceYTimesAspectRatio= maxNegativeDistanceY*aspectRatio;
					if(maxDistanceX>maxDistanceYTimesAspectRatio)
						maxDistanceX = maxDistanceYTimesAspectRatio;
					else{
						maxDistanceY = maxDistanceX/aspectRatio;
					}
					if(maxNegativeDistanceX>maxNegativeDistanceYTimesAspectRatio)
						maxNegativeDistanceX = maxNegativeDistanceYTimesAspectRatio;
					else{
						maxNegativeDistanceY = maxNegativeDistanceX/aspectRatio;
					}
					maxY = maxDistanceY + getBottom();
					minY = getBottom() - maxNegativeDistanceY;
				}
				maxX = maxDistanceX+ getRight();
				minX = getRight() - maxNegativeDistanceX;
			}
			return {minX:minX, minY:minY, maxX:maxX, maxY:maxY};
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