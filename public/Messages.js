var Messages = new (function(){
	var uniqueIdCount=0;
	var _Messages = function(params){
		var self = this;
		var getUserId = params.getUserId;
		var ignoreManager = params.ignoreManager;
		var element = params.element;
		var maxNMessages = params.maxNMessages;
		var messages=[];
		var mapUniqueIdToMessage={};
		var overflowManager = new OverflowManager({getMessages:getMessages, remove:remove, maxNMessages:maxNMessages});
		this.addSending = function(message){
			append(message);
			overflow();
		};
		this.addReceived=function(message){
			var mappedMessage = mapUniqueIdToMessage[message.getUniqueId()];
			if(mappedMessage){
				mappedMessage.confirm(message);
			}
			else{
				mapUniqueIdToMessage[message.getUniqueId()]=message;
				insertInPlace(message);
			}
			if(ignoreManager.userIdIsIgnored(message.getUserId()))
				message.setIgnored(true);
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
				messages.push(message);
				element.appendChild(message.getElement());
				return;
			}
			var reverseIterator = new ReverseIterator(messages);
			while(reverseIterator.hasNext()){
				var placedMessage = reverseIterator.next();
				if(placedMessage.getServerAssignedNMessage()<serverAssignedNMessage){
					if(reverseIterator.hasPrevious())
					{
						var nextSibling = reverseIterator.previous().getElement().nextSibling;
						if(nextSibling){
							element.insertBefore(message.getElement(), nextSibling);
							reverseIterator.insertAfter(message);
							return;
						}
					}
					element.appendChild(message.getElement());
					reverseIterator.append(message);
					return;
				}
			}
			element.insertBefore(message.getElement(), messages[0].getElement());
			reverseIterator.insert(message);
		}
		function append(message){
			messages.push(message);
			mapUniqueIdToMessage[message.getUniqueId()]=message;
			element.appendChild(message.getElement());
		}
		function overflow(){
			overflowManager.trigger();
		}
		function getMessages(){return messages;}
		function remove(message){
			var index = messages.indexOf(message);
			if(index<0)return;
			messages.splice(index, 1);
			delete mapUniqueIdToMessage[message.getUniqueId()];
			element.removeChild(message.getElement());
		}
	};
	return _Messages;
})();