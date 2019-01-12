exports.Mysocket = (function(){
	var EventEnabledBuilder=require('./EventEnabledBuilder').EventEnabledBuilder;
	var _Mysocket = function(params){
		var self = this;
		EventEnabledBuilder(this);
		this.sendMessage = params.sendMessage;
		this.close=function(){
			dispatchClose();
		};
		function dispatchClose(){
			self.dispatchEvent({type:'close', mysocket:self});
		}
	};
	_Mysocket.fromWebsocket = function(websocket){
		return new _Mysocket(new Websocket(websocket));
	};
	function Websocket(websocket){
		this.sendMessage=function(msg){
			try{websocket.send(JSON.stringify(msg));}catch(ex){console.log(ex);}
		};
	}
	return _Mysocket;
})();
