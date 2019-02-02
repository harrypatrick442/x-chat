var DragManager = (function(){
	var _DragManager= function(params){
		var handle = params.handle;
		var efficientMovingCycle = new EfficientMovingCycle(handle.getElement());
		var localConstraints;
		var offsets;
		efficientMovingCycle.onStart = function(){
			offsets = getOffsets();
			localConstraints = handle.getConstraints();
		};
		efficientMovingCycle.onMove = function(e){
			var newLocalPosition = getNewLocalPosition(e);
			constrainNewLocalPosition(newLocalPosition);
			handle.setPosition(localPosition);
		};
		efficientMovingCycle.onEnd = function(){
			handle.endDrag&&handle.endDrag();
		};
		function constrainNewLocalPosition(localPosition){
			if(localPosition.x>localConstraints.maxX)
				localPosition.x=localConstraints.maxX;
			else
				if(localPosition.x<localConstraints.minX)
					localPosition.x = localConstraints.minX;
			
			if(localPosition.y>localConstraints.maxY)
				localPosition.y=localConstraints.maxY;
			else
				if(localPosition.y<localConstraints.minY)
					localPosition.y = localConstraints.minY;
				
		}
		function getOffsets(){
			var absolute = handle.getAbsolute();
			return {x:handle.getLeft() - absolute.left, 
					y:handle.getTop() - absolute.top};
		}
		function getNewLocalPosition(e){
			return {x:e.pageX + offsets.x, y:e.pageY + offsets.y};
		}
	};
	return _DragManager;
})();