var debug = new(function(){
	var mysocket;
	this.setMysocket = function(value){
		mysocket = value;
	};
	this.log=function(obj){
		if(mysocket)
		mysocket.send({type:'debug', str:String(obj)});
	};
	console.log = this.log;
})();