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
		function show(){
			element.style.display='table-row';
			cropper.onShow();
		};
		this.hide = function(){
			element.style.display='none';
		};
		this.load = load;
		this.getCroppedImage = function(params){
			console.log(params);
			var position = cropper.getPosition();
			var dimensions = cropper.getDimensions();
			var format = params.format?params.format:"image/jpeg";
			var quality = params.quality?params.quality:1;
			var dataUrl = ImageProcessing.crop({
				img:img, imgWidthRaw:imageWidthRaw, imgHeightRaw:imageHeightRaw, cropperWidth:dimensions.width, cropperHeight:dimensions.height, 
			cropperLeft:position.left, cropperTop:position.top, format:format, profile:params.profile});
			return dataUrl;
		};
		function getImageWidth(){
			return imgWrapper.getBoundingClientRect().width;
		}
		function getImageHeight(){
			return imgWrapper.getBoundingClientRect().height;
		}
		function load(url){
			clear();
			img = E.IMG();
			img.onload = function() {
				imageWidthRaw = this.width;
				imageHeightRaw = this.height;
				imageAspectRatio = imageWidthRaw/imageHeightRaw;
				show();
				sizeImage();
				imgWrapper.appendChild(img);
				cropper.positionDefault(img.clientWidth, img.clientHeight);
			};
			img.onerror=error;
			img.src = url;
		}
		function clear(){
			if(img)
			{
				imgWrapper.removeChild(img);
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
})();