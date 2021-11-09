exports.dalPms= new (function(){
	const fs = require('fs');
	const FilePaths = require('./FilePaths');
	const Message = require('./../Message');
	const MAX_N_PMS= 300;
	const mapLowestUserIdToMapHighestUserIdToMessages = new Map();
	this.getMessages = function(userMeId, userToId, nMessages, callbackGotMessages){
		loadPmIntoMemoryForUserPair().then(messages=>{
			callbackGotMessages(messages);
		});
	};
	
	this.addMessage= function(userMeId, userToId, message, callback){
		loadPmIntoMemoryForUserPair(userMeId, userToId).then(messages=>{
			messages.push(message);
			while(messages.length>MAX_N_PMS){
				messages.splice(0, 1);
			}
			callback();
		});
	};
	function loadPmIntoMemoryForUserPair(userMeId, userToId){
		return new Promise((resolve, reject)=>{
			userMeId = parseInt(userMeId);
			userToId = parseInt(userToId);
			let lowestUserId, highestUserId;
			if(userMeId<userToId){
				lowestUserId = userMeId;
				highestUserId = userToId;
			}
			else{
				highestUserId = userMeId;
				lowestUserId = userToId;
			}
			const path = getPmPath(lowestUserId, highestUserId);
			let mapHighestUserIdToMessages = mapLowestUserIdToMapHighestUserIdToMessages.get(lowestUserId);
			let messages;
			if(mapHighestUserIdToMessages){
				messages = mapHighestUserIdToMessages.get(highestUserId);
				if(messages){
					resolve(messages);
					return;
				}
				messages = loadPmFromFile(lowestUserId, highestUserId);
				mapHighestUserIdToMessages.set(highestUserId, messages);
				resolve(messages);
				return;
			}
			mapHighestUserIdToMessages= new Map();
			messages = loadPmFromFile(lowestUserId, highestUserId)
			mapHighestUserIdToMessages.set(highestUserId, messages);
			mapLowestUserIdToMapHighestUserIdToMessages.set(lowestUserId, mapHighestUserIdToMessages);
			resolve(messages);
		});
	}
	this.save = save;
	function save(){
		for (const [lowestUserId, mapHighestUserIdToMessages] of mapLowestUserIdToMapHighestUserIdToMessages.entries()) {
			for (const [highestUserId, messages] of mapHighestUserIdToMessages.entries()) {
				savePmToFile(lowestUserId, highestUserId, messages);
			}
		}
	}
	function loadPmFromFile(lowestUserId, highestUserId){
		try{
			const jArray = JSON.parse(fs.readFileSync(getPmPath(lowestUserId, highestUserId)));
			const messages = jArray.map(jObjectMessage=>Message.fromJSON(jObjectMessage));
			return messages;
		}
		catch{
			return [];
		}
	}
	function savePmToFile(lowestUserId, highestUserId, messages){
		const path = getPmPath(lowestUserId, highestUserId);
		const jArray = messages.map(message=>message.toJSON());
		fs.writeFileSync(path, JSON.stringify(jArray));
	}
	function getPmPath(lowestUserId, highestUserId){
		return `${FilePaths.pmsRoot}/${String(lowestUserId)}/${String(highestUserId)}.json`;
	}
})();
