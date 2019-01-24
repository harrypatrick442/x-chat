function ReferenceCounter(callbackDispose){
	var referers =[];
	this.add=function(referer){
		var index = referers.indexOf(referer);
		if(index>=0)return;
		referers.push(referer);
	};
	this.remove= function(referer){
		var index = referers.indexOf(referer);
		if(index<0)return;
		referers.splice(index, 1);
		if(referers.length<1)
			callbackDispose();
	};
}