window['MovingTextItem'] = (function(){
	var _MovingTextItem = function(params){
		var text = params['text'];
		this['getText']= function(){
			return text;
		};
	};
})();