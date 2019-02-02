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
		var cropper = new Cropper();
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
	function Cropper(){
		var element = E.DIV();
		element.classList.add('cropper');
		var cornerTopLeft = new Corner({className:'corner-top-left'});
		var cornerTopRight = new Corner({className:'corner-top-right'});
		var cornerBottomLeft = new Corner({className:'corner-bottom-left'});
		var cornerBottomRight = new Corner({className:'corner-bottom-right'});
		var cornerTop = new Corner({className:'corner-top'});
		var cornerLeft = new Corner({className:'corner-left'});
		var cornerRight = new Corner({className:'corner-right'});
		var cornerBottom = new Corner({className:'corner-bottom'});
		each([cornerTopLeft, cornerTopRight, cornerBottomLeft, cornerBottomRight, cornerTop, cornerRight, cornerLeft, cornerBottom], function(corner){
			element.appendChild(corner.getElement());
		});
		this.positionDefault= function(imageWidth, imageHeight){
			
		};
		this.getElement = function(){return element;};
		function Corner(params){
			var element = E.DIV();
			element.classList.add('corner');
			element.classList.add(params.className);
			this.getElement = function(){return element;};
		}
	}
})();