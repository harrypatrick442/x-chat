module.exports = function(){
	var sents = [];
	this.isSpam = function(str){
	var now = new Date().getTime();
	var nWithinFrame=0;
	var offences=[];
	for(var i=0,sent; sent=sents[i]; i++){
			if(sent.str&&(sent.str==str)&&sent.str.length>3){
				return true;
			}
			if(now - sent.at<2000){
				nWithinFrame++;
			}
			if(nWithinFrame>1){
				return true;
			}
		}
		sents.splice(0, 0,{str:str, at:now});
		while(sents.length>3){
			sents.splice(sents.length-1, 1);
		}
	};
};