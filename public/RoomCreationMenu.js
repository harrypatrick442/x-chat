window['RoomCreationMenu']=function(params){
		window['EventEnabledBuilder'](this);
		var self = this;
		var sendMessage = params['sendMessage'];
		this['create']= function(params){
			sendMessage({'type':'create_room', 'name':params['name']});
		};
		this['incomingCreateRoom']=function(msg){
			var successful = msg['successful'];
			if(!successful){
				dispatchFailed(msg['message']);
				return;
			}
			dispatchCreated();
		};
		function dispatchFailed(message){
			self['dispatchEvent']({'type':'failed', 'message':message});
		}
		function dispatchCreated(){
			self['dispatchEvent']({'type':'created'});
		}
};
