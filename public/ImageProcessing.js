var ImageProcessing= new (function(){
	this.getImagePortion = function(img, newWidth, newHeight, startX, startY, ratio){
		console.log(newWidth);
		console.log(newHeight);
		console.log(startX);
		console.log(startY);
		console.log(ratio);
		var portionCanvas = E.CANVAS();
		var portionCanvasContext = portionCanvas.getContext('2d');
		portionCanvas.width = newWidth;
		portionCanvas.height = newHeight;
		var bufferCanvas = E.CANVAS();
		var bufferCanvasContext = bufferCanvas.getContext('2d');
		bufferCanvas.width = img.width;
		bufferCanvas.height = img.height;
		bufferCanvasContext.drawImage(img, 0, 0);
		portionCanvasContext.drawImage(bufferCanvas, startX, startY, newWidth*ratio, newHeight*ratio, 0, 0, newWidth, newHeight);
		return portionCanvas.toDataURL();
	};
})();