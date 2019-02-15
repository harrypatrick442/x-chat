var ImageProcessing= new (function(){
	this.crop = function(params){
		var img = params.img;
		var imgWidthRaw = params.imgWidthRaw;
		var imgHeightRaw= params.imgHeightRaw;
		var cropperWidth = params.cropperWidth;
		var cropperHeight = params.cropperHeight;
		var cropperLeft= params.cropperLeft;
		var cropperTop = params.cropperTop;
		var format = params.format;
		var quality = params.quality;
		var profile = params.profile;
		var portionCanvas = E.CANVAS();	
		var portionCanvasContext = portionCanvas.getContext('2d');
		var finalCroppedDimensions = getFinalCroppedDimensions(profile, cropperWidth, cropperHeight);
		var finalCroppedWidth = finalCroppedDimensions.width;
		var finalCroppedHeight = finalCroppedDimensions.height;
		portionCanvas.width = finalCroppedWidth;
		portionCanvas.height = finalCroppedHeight;
		var bufferCanvas = E.CANVAS();
		var bufferCanvasContext = bufferCanvas.getContext('2d');
		bufferCanvas.width = img.width;
		bufferCanvas.height = img.height;
		bufferCanvasContext.drawImage(img, 0, 0,imgWidthRaw, imgHeightRaw,0,0, img.width, img.height);
		portionCanvasContext.drawImage(bufferCanvas, cropperLeft, cropperTop, cropperWidth, cropperHeight, 0, 0,
		finalCroppedWidth,
		finalCroppedHeight);
		/*
		document.documentElement.appendChild(bufferCanvas);
	bufferCanvas.style='poition:absolute; width:100px; height:100px; z-index:1000;';
		document.documentElement.appendChild(portionCanvas);
	portionCanvas.style='poition:absolute; width:100px; height:100px; z-index:1000*/
		return portionCanvas.toDataURL(format, quality);
	};
	function getFinalCroppedDimensions(profile, canvasWidth, canvaHeight){
		var finalCroppedWidth;
		var finalCroppedHeight;
		if(profile.desiredWidth){
			finalCroppedWidth = profile.desiredWidth;
			if(profile.aspectRatio){
				finalCroppedHeight = finalCroppedWidth/profile.aspectRatio;
			}
			else if(profile.finalCroppedHeight){
				finalCroppedHeight = profile.finalCroppedHeight;
			}
		}
		else{
			if(profile.finalCroppedHeight){
				finalCroppedHeight = profile.finalCroppedHeight;
				if(aspectRatio){
					finalCroppedWidth = finalCroppedHeight * profile.aspectRatio;
				}
			}
		}
		console.log({width:finalCroppedWidth, height:finalCroppedHeight});
		return {width:finalCroppedWidth, height:finalCroppedHeight};
	}
})();