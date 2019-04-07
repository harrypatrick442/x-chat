var TrafficLights = new (function(){
	var sents = [];
	this.isSpam = function(str){
		var now = new Date().getTime();
		each(sents, function(sent){
			if(sent.str&&sent.str==str){
				return "Please don't spam the same message!";
			}
			if(now - sent.at<1500){
				return "Slow down!";
			}
		});
		sents.splice(0, 0 {str:str, at:now});
		while(sents.length>3){
			sents.splice(sents.length-1, 1);
		}
	};
})();