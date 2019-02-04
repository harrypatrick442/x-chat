var debug = new(function(){
	var self = this;
	var mysocket;
	var oldConsole = console;
	this.setMysocket = function(value){
		mysocket = value;
	};
	this.log=function(msg){
		oldConsole.log(msg);
		if(mysocket)
		mysocket.send({type:'debug', str:isObject(msg)?JSON.stringify(msg):msg});
	};
	console = {log:self.log};7
	window.onerror = function myErrorHandler(errorMsg, url, lineNumber){
		self.log(errorMsg);
	}
	function isObject(val) {
    if (val === null) { return false;}
    return ( (typeof val === 'function') || (typeof val === 'object') );
}
})();