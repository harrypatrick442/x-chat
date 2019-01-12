exports.Mysocket = (function(){
	var _Mysocket = function(params){
		this.sendMessage = params.sendMessage;
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
