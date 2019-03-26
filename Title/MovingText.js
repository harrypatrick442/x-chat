var MovingText = (function(){
	var _MovingText = function(params){
		var approximateLength = params['approximateLength'];
		var items=[];
		this['append']=function(movingTextItem){
			if(items.indexOf(movingTextItem)>=0)return;
			items.push(movingTextItem);
		};
	};
})();