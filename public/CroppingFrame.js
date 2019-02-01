var CroppingFrame = new (function () {
	var _CroppingFrame=function(){
		EventEnabledBuilder(this);
		var self = this;
		var element = E.DIV();
		var cropper = E.DIV();
		cropper.classList.add('cropper');
		element.classList.add('cropping-frame');
		var imageWidthRaw;
		var imageHeightRaw;
		var imageAspectRatio;
		var img;
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
				element.appendChild(img);
			};
			img.onerror=error;
			img.src = url;
		}
		function clear(){
			if(img)
			{
				element.removeChild(img);
				img.removeChild(cropper);
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
			img.style.width = String(width)+'px';
			img.style.height = String(height)+'px';
			var croppingFrameWidth = getCroppingFrameWidth();
			var croppingFrameHeight = getCroppingFrameHeight();
			var verticalMargin = (croppingFrameHeight- height)/2;
			var horizontalMargin = (croppingFrameWidth-width)/2;
			img.style.marginTop=String(verticalMargin)+'px';
			img.style.marginLeft=String(horizontalMargin)+'px';
		}		
		function getCroppingFrameAspectRatio(){return element.clientWidth/element.clientHeight;}
		function getCroppingFrameHeight(){return element.clientHeight;}
		function getCroppingFrameWidth(){return element.clientWidth;}
	};
	return _CroppingFrame;
})();