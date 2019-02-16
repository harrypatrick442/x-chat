module.exports = (function(){
	var handler = require('./handler').handler;
	var channelFactory = require('./MysocketChannelFactory');
	var idCount=0;
	var EventEnabledBuilder=require('./EventEnabledBuilder').EventEnabledBuilder;
	var _Mysocket = function(params){
		var self = this;
		var channel;
		updateChannel(params);
		EventEnabledBuilder(this);
		this.sendMessage = channel.sendMessage;
		channel.onClose=this.close;
		channel.onMessage=onMessage;
		this.close=function(){
			dispatchClose();
		};
		this.setWebsocket = updateChannel;
		function updateChannel(params){
			channel = channelFactory.create(params);
		};
		this.getId = function(){
			return params.id;
		};
		function dispatchClose(){
			self.dispatchEvent({type:'close', mysocket:self});
		}
		function onMessage(msg){
			handler.process(JSON.parse(msg), self, function(res){channel.sendMessage(res);});
		}
	};
	_Mysocket.fromWebsocket = function(params){
		return new _Mysocket(params);
	};
	return _Mysocket;
})();
