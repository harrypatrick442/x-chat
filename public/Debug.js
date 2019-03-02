var debug = new(function(){
	var self = this;
	var mysocket;
	var oldConsole = console;
	this.setMysocket = function(value){
		mysocket = value;
	};
	this.log=function(msg){
		oldConsole.log(msg);
		oldConsole.log(new Error().stack);
		if(mysocket)
		mysocket.send({type:'debug', str:isObject(msg)?JSON.stringify(msg):msg});
	};
	console = {log:self.log};
	window.onerror = function myErrorHandler(errorMsg, url, lineNumber){
		self.log(errorMsg+' '+url+' '+lineNumber);
	}
	function isObject(val) {
    if (val === null) { return false;}
    return ( (typeof val === 'function') || (typeof val === 'object') );
}
})();