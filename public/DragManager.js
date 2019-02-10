var DragManager = (function(){
	var _DragManager= function(params){
		var self = this;
		var handle = params.handle;
		var stopPropagation = params.stopPropagation;
		var efficientMovingCycle = new EfficientMovingCycle({element:handle.getElement(), stopPropagation:stopPropagation});
		var localConstraints;
		var offsets;
		efficientMovingCycle.onStart = function(e){
			self.onStart&&self.onStart(e);
			offsets = getOffsets(e);
			localConstraints = handle.getConstraints();
		};
		efficientMovingCycle.onMove = function(e){
			var newLocalPosition = getNewLocalPosition(e);
			console.log(offsets);
			console.log(newLocalPosition);
			constrainNewLocalPosition(newLocalPosition);
			handle.setPosition(newLocalPosition);
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
		function getOffsets(e){
			var absolute = handle.getAbsolutePosition(e);
			return {x:handle.getX() - absolute.left, 
					y:handle.getY() - absolute.top};
		}
		function getNewLocalPosition(e){
			return {x:e.pageX + offsets.x, y:e.pageY + offsets.y};
		}
	};
	return _DragManager;
})();