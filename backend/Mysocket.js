module.exports = (function(){
	const TIMEOUT_CLOSED_CHANNEL_MINUTES = 2;
	var handler = require('./handler').handler;
	var ChannelType = require('./ChannelType');
	var channelFactory = require('./MysocketChannelFactory');
	var EventEnabledBuilder=require('./EventEnabledBuilder');
	
	var _Mysocket = function(params){
		var self = this;
		var id = params.id;
		var channel;
		var timeChannelClosed=getTime();
		updateChannel(params);
		EventEnabledBuilder(this);
		
		this.close=function(){
			console.log('close called');
			channel&&channel.close&&channel.close();
			dispatchClose();
		};
		this.setWebsocket = updateChannel;
		this.setToLongpoll = function(longpoll){
			console.log(channel);
			if(channel&&channel.channelType==ChannelType.LONGPOLL)return;
			updateChannel({longpoll:longpoll});
		};
		this.getId = function(){
			return params.id;
		};
		this.sendMessage = sendMessage;
		this.incomingMessage = onMessage;
		this.isActive = function(time){
			if(channel)
				return channel.isAlive(time);
			return getTimeSinceChannelClosedMinutes()<TIMEOUT_CLOSED_CHANNEL_MINUTES;
		};
		function updateChannel(params){
			console.log(new Error().stack);
			channel = channelFactory.create(params);
			channel.onClose=onClose;
			channel.onMessage=onMessage;
			onOpen();
		}
		function getTimeSinceChannelClosedMinutes(){
			return (getTime()-timeChannelClosed)/60000;
		}
		function getTime(){
			return new Date().getTime();
		}
		function dispatchClose(){
			self.dispatchEvent({type:'close', mysocket:self});
		}
		function onMessage(msg){
			handler.process(msg, self, sendMessage);
		}
		function onOpen(){
			sendMessage({type:'mysocket_id', id:id});
		}
		function onClose(){
			channel = null;
			timeChannelClosed = getTime();
		}
		function sendMessage(msg){
			channel&&channel.sendMessage(msg);
		}
		function nothing(){}
	};
	_Mysocket.fromWebsocket = function(params){
		return new _Mysocket(params);
	};
	_Mysocket.fromLongpoll=function(params){
		return new _Mysocket(params);
	};
	return _Mysocket;
})();
