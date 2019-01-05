var Messages = new (function(){
	var uniqueIdCount=0;
	var _Messages = function(params){
		var self = this;
		var getUserId = params.getUserId;
		var element = params.element;
		var maxNMessages = params.maxNMessages;
		var messages=[];
		var mapUniqueIdToMessage={};
		this.addSending = function(message){
			append(message);
			overflow();
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
			overflow();
		};
		this.remove = function(message){
			var index = messages.indexOf(message);
			if(index<0)return;
			messages.splice(index, 1);
			delete mapUniqueIdToMessage[message.getUniqueId()];
			element.removeChild(message.getElement());
		};
		this.nextUniqueId=function(){
			return getUserId()+'_'+uniqueIdCount++;
		};
		this.dispose = function(){
			each(messages, function(message){
				message.dispose();
			});
		};
		function insertInPlace(message){
			var serverAssignedNMessage = message.getServerAssignedNMessage();
			if(messages.length<1)
			{
				element.appendChild(message.getElement());
				return;
			}
			var reverseIterator = new ReverseIterator(messages);
			while(reverseIterator.hasNext()){
				var placedMessage = reverseIterator.next();
				if(placedMessage.getServerAssignedNMessage()<serverAssignedNMessage){
					iterator.insert(message);
					if(!iterator.hasPrevious())
						element.appendChild(message.getElement());
					else
						iterator.previous().getElement().insertBefore(message.getElement());
					return;
				}
			}
			messages[0].getElement().insertBefore(message.getElement());
			mapUniqueIdToMessage[message.getUniqueId()]=message;
		}
		function append(message){
			messages.push(message);
			mapUniqueIdToMessage[message.getUniqueId()]=message;
			element.appendChild(message.getElement());
		}
		function overflow(){
			while(messages.length>maxNMessages){
				var message = messages.splice(0, 1)[0];
				delete mapUniqueIdToMessage[message.getUniqueId()];
				element.removeChild(message.getElement());
			}
		}
	};
	return _Messages;
})();