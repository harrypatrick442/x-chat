var CroppingFrame = new (function () {
	var _CroppingFrame=function(){
		EventEnabledBuilder(this);
		var self = this;
		var element = E.DIV();
		element.classList.add('cropping-frame');
		var imageWidthRaw;
		var imageHeightRaw;
		var imageAspectRatio;
		var img;
		var imgWrapper = E.DIV();
		imgWrapper.classList.add('img-wrapper');
		var cropper = new Cropper({getImageWidth:getImageWidth, getImageHeight:getImageHeight});
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
		var element = E.DIV();
		element.classList.add('cropper');
		var corners=[];
		each([true, false], function(topElseBottom){
			var className = 'corner-'+(topElseBottom?'top':'bottom');
			var corner = new Corner({className:className, topElseBottom:topElseBottom, leftElseRight:undefined, getConstraints:getConstraints, setPosition:getSetPosition(topElseBottom, undefined)});
			corners.push(corner);
			element.appendChild(corner.getElement());
			each([true, false], function(leftElseRight){
				className = 'corner-'+(topElseBottom?'top':'bottom')+'-'+(leftElseRight?'left':'right');
				corner = new Corner({className:className, topElseBottom:topElseBottom, leftElseRight:leftElseRight, getConstraints:getConstraints, setPosition:getSetPosition(topElseBottom, leftElseRight)});
				corners.push(corner);
				element.appendChild(corner.getElement());
			});
		});
		each([true, false], function(leftElseRight){
			var className = 'corner-'+(leftElseRight?'left':'right');
			var corner = new Corner({className:className, topElseBottom:undefined, leftElseRight:leftElseRight, getConstraints:getConstraints, setPosition:getSetPosition(undefined,leftElseRight)});
			corners.push(corner);
			element.appendChild(corner.getElement());
		});
		this.positionDefault= function(imageWidth, imageHeight){
			
		};
		this.getElement = function(){return element;};
		function getSetPosition(topElseBottom, leftElseRight){
			var vertical;
			if(topElseBottom!=undefined){
				vertical = (function(setVertical){ return function(p){setVertical(p.y);};})(topElseBottom?setTop:setBottom);
			}
			var horizontal;
			if(leftElseRight!=undefined){
				horizontal = (function(setHorizontal){ return function(p){setHorizontal(p.x);};})(leftElseRight?setLeft:setRight);
			}
			if(vertical)
			{
				if(!horizontal) return vertical;
				return (function(vertical, horizontal){ return function(p){ vertical(p); horizontal(p);};})(vertical, horizontal);
			}
			return horizontal;
		}
		function getLeft(){
			return element.offsetLeft;
		}
		function getRight(){
			return getLeft()+element.clientWidth;
		}
		function getTop(){
			return element.offestTop;
		}
		function getBottom(){
			return getTop()+element.clientHeight;
		}
		function setLeft(x){
			console.log('set left');
			element.style.left=String(x)+'px';
			element.style.width = String(element.clientWidth + getLeft() - x)+'px';
		}
		function setRight(x){
			console.log('set right');
			element.style.width = String(x - getLeft())+'px';
		}
		function setTop(y){
			console.log('set top');
			element.style.top=String(y)+'px';
			element.style.height = String(element.clientHeight + getTop() - y)+'px';
		}
		function setBottom(y){
			console.log('set bottom ');
			console.log(y);
			element.style.height = String(y - getTop())+'px';
		}
		function getConstraints(topElseBottom, leftElseRight){
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
			var setPosition = params.setPosition;
			var topElseBottom = params.topElseBottom;
			var leftElseRight = params.leftElseRight;
			var element = E.DIV();
			element.classList.add('corner');
			element.classList.add(params.className);
			this.getElement = function(){return element;};
			this.getConstraints = function(){
				return getConstraints(topElseBottom, leftElseRight);
			};
			this.getLeft = function(){return element.offsetLeft;};
			this.getTop = function(){return element.offsetTop;};
			this.setPosition = setPosition;
			this.getElement = function(){return element;};
			this.getAbsolute= function(){
				return getAbsolute(element);
			}
			var dragManager = new DragManager({handle:self});
			
		}
	}
})();