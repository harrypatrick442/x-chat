module.exports = (function(){
	var handler = require('./handler').handler;
	var channelFactory = require('./MysocketChannelFactory');
	var idCount=0;
	var EventEnabledBuilder=require('./EventEnabledBuilder').EventEnabledBuilder;
	var _Mysocket = function(params){
		var self = this;
		var id = params.id;
		var channel;
		updateChannel(params);
		EventEnabledBuilder(this);
		
		this.close=function(){
			channel&&channel.close&&cannel.close();
			dispatchClose();
		};
		this.setWebsocket = updateChannel;
		function updateChannel(params){
			channel = channelFactory.create(params);
			channel.onClose=onClose;
			channel.onMessage=onMessage;
			channel.onOpen = onOpen;
		};
		this.getId = function(){
			return params.id;
		};
		this.sendMessage = sendMessage;
		function dispatchClose(){
			self.dispatchEvent({type:'close', mysocket:self});
		}
		function onMessage(msg){
			handler.process(JSON.parse(msg), self, sendMessage);
		}
		function onOpen(){
			sendMessage({type:'mysocket_id', id:id});
		}
		function onClose(){
			console.log('ONCLOSEd');
			channel = null;
		}
		function sendMessage(msg){
			channel&&channel.sendMessage(msg);
		}
		function nothing(){}
	};
	_Mysocket.fromWebsocket = function(params){
		params.id = newId();
		return new _Mysocket(params);
	};
	return _Mysocket;
	function newId(){
		return String(idCount++);
	}
})();
