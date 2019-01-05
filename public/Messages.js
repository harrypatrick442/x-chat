var Messages = new (function(){
	var uniqueIdCount=0;
	var _Messages = function(params){
		var self = this;
		var userId = params.useId;
		var element = params.element;
		var messages=[];
		var mapUniqueIdToMessage={};
		this.addSending = function(message){
			append(message);
		};
		this.addReceived=function(message){
			var mappedMessage = mapUniqueIdToMessage[message.getUniqueId()];
			if(mappedMessage){
				mappedMessage.confirm();
			}
			else{
				mapUniqueIdToMessage[message.getUniqueId()]=message;
				insertInPlace(message);
			}
		};
		this.remove = function(message){
			var index = messages.indexOf(message);
			if(index<0)return;
			messages.splice(index, 1);
			delete mapUniqueIdToMessage[message.getUniqueId()];
		};
		this.nextUniqueId=function(){
			return userId+'_'+uniqueIdCount++;
		};
		function insertInPlace(message){
			var serverAssignedNmessage = message.getServerAssignedNMessage();
			if(messages.length<1)
			{
				element.appendChild(message.getElement());
				return;
			}
			for(var i=messages.length-1; i>=0; i--){
				var placedMessage = messages[i];
				if(placedMessage.getServerAssignedNMessage()<serverAssignedNmessage){
					
					var insertIndex = i+1;
					if(insertIndex>=messages.length)
						element.appendChild(message.getElement());
					else
						messages[insertIndex].getElement().insertBefore(message.getElement());
					return;
				}
			}
			messages[0].getElement().insertBefore(message.getElement());
		}
		function append(message){
			messages.push(message);
			mapUniqueIdToMessage[message.getUniqueId()]=message;
			element.appendChild(message.getElement());
		}
	};
	return _Messages;
})();