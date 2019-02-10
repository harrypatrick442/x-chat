var ImageProcessing= new (function(){
	this.crop = function(img, imgWidthRaw, imgHeightRaw, cropperWidth, cropperHeight, cropperLeft, cropperTop, ratio, format, 
	croppedImageWidth, croppedImageHeight){
		var portionCanvas = E.CANVAS();	
		var portionCanvasContext = portionCanvas.getContext('2d');
		portionCanvas.width = cropperWidth;
		portionCanvas.height = cropperHeight;
		var bufferCanvas = E.CANVAS();
		var bufferCanvasContext = bufferCanvas.getContext('2d');
		bufferCanvas.width = img.width;
		bufferCanvas.height = img.height;
		bufferCanvasContext.drawImage(img, 0, 0,imgWidthRaw, imgHeightRaw,0,0, img.width, img.height);
		
		console.log(cropperWidth);
		console.log(cropperHeight);
		console.log(cropperLeft);
		console.log(cropperTop);
		portionCanvasContext.drawImage(bufferCanvas, cropperLeft, cropperTop, cropperWidth, cropperHeight, 0, 0, cropperWidth, cropperHeight);
		document.documentElement.appendChild(bufferCanvas);
	bufferCanvas.style='poition:absolute; width:100px; height:100px; z-index:1000;';
		document.documentElement.appendChild(portionCanvas);
	portionCanvas.style='poition:absolute; width:100px; height:100px; z-index:1000;';
		return portionCanvas.toDataURL(format);
	};
})();