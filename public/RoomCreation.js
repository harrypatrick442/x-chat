window['RoomCreation']=function(params){
		window['EventEnabledBuilder'](this);
		var self = this;
		var sendMessage = params['sendMessage'];
		var getSessionId = params['getSessionId'];
		this['create']= function(params){
			sendMessage({'type':'create_room', 'name':params['name'], 'sessionId':getSessionId()});
		};
		this['incomingCreateRoom']=function(msg){
			console.log(msg);
			var successful = msg['successful'];
			if(!successful){
				dispatchFailed(msg['message']);
				return;
			}
			dispatchCreated(msg.room);
		};
		function dispatchFailed(message){
			self['dispatchEvent']({'type':'failed', 'message':message});
		}
		function dispatchCreated(roomInfo){
			self['dispatchEvent']({'type':'created', roomInfo:roomInfo});
		}
};
