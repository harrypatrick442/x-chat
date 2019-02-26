module.exports = (function(){
	const TIMEOUT_CLOSED_CHANNEL_MINUTES = 0.4;
	var handler = require('./handler').handler;
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
			channel&&channel.close&&channel.close();
			dispatchClose();
		};
		this.setWebsocket = updateChannel;
		this.setToAjax = function(){
			if(channel.channelType==Mysocket.AJAX)return;
			channel.close();
			updateChannel();
		};
		this.getId = function(){
			return params.id;
		};
		this.sendMessage = sendMessage;
		this.isActive = function(){
			if(channel)
				return channel.isAlive();
			return getTimeSinceChannelClosedMinutes()<TIMEOUT_CLOSED_CHANNEL_MINUTES;
		};
		function updateChannel(params){
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
			handler.process(JSON.parse(msg), self, sendMessage);
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
	
	_Mysocket.JSONP='jsonp';
	_Mysocket.LONGPOLL='longpoll';
	_Mysocket.WEBSOCKET='websocket';
	_Mysocket.fromWebsocket = function(params){
		return new _Mysocket(params);
	};
	_Mysocket.fromAjax=function(params){
		return new _Mysocket(params);
	};
	return _Mysocket;
})();
