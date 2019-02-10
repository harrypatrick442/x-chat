var ImageProcessing= new (function(){
	this.crop = function(img, imgWidthRaw, imgHeightRaw, cropperWidth, cropperHeight, cropperLeft, cropperTop, format, 
	croppedImageWidth, croppedImageHeight){
		var portionCanvas = E.CANVAS();	
		var portionCanvasContext = portionCanvas.getContext('2d');
		var finalCroppedWidth = croppedImageWidth?croppedImageWidth:cropperWidth;
		var finalCroppedHeight = croppedImageHeight?croppedImageHeight:cropperHeight;
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
		document.documentElement.appendChild(bufferCanvas);
	bufferCanvas.style='poition:absolute; width:100px; height:100px; z-index:1000;';
		document.documentElement.appendChild(portionCanvas);
	portionCanvas.style='poition:absolute; width:100px; height:100px; z-index:1000;';
		return portionCanvas.toDataURL(format);
	};
})();