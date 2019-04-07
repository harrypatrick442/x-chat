var TrafficLights = new (function(){
	var sents = [];
	this.isSpam = function(str){
	var now = new Date().getTime();
	var nWithinFrame=0;
	for(var i=0,sent; sent=sents[i]; i++){
			if(sent.str&&(sent.str==str)&&sent.str.length>3){
				return "Please don't spam the same message!";
			}
			if(now - sent.at<2000){
				nWithinFrame++;
			}
			if(nWithinFrame>1){
				return "Slow down!";
			}
		}
		sents.splice(0, 0,{str:str, at:now});
		while(sents.length>3){
			sents.splice(sents.length-1, 1);
		}
	};
})();