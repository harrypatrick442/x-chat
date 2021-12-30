module.exports= new (function(){
	const fs = require('fs');
	const FilePaths = require('./../FilePaths');
	const Message = require('./../Message');
	const DirectoryHelper = require('./../DirectoryHelper');
	const MAX_N_PMS= 300;
	let serverAssignedNMessage=0;
	const mapLowestUserIdToMapHighestUserIdToMessages = new Map();
	this.getMessages = function(userMeId, userToId, nMessages, callbackGotMessages){
		loadPmIntoMemoryForUserPair(userMeId, userToId).then(messages=>{
			callbackGotMessages(messages);
		});
	};
	
	this.addMessage= function(userMeId, userToId, message, callback){
		loadPmIntoMemoryForUserPair(userMeId, userToId).then(messages=>{
			message.setServerAssignedNMessage(serverAssignedNMessage++);
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
			const atomicDirectoryPath={};
			const path = getPmPath(lowestUserId, highestUserId, atomicDirectoryPath);
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
		return new Promise((resolve, reject)=>{
			for (const [lowestUserId, mapHighestUserIdToMessages] of mapLowestUserIdToMapHighestUserIdToMessages.entries()) {
				for (const [highestUserId, messages] of mapHighestUserIdToMessages.entries()) {
					savePmToFile(lowestUserId, highestUserId, messages);
				}
			}
			resolve();
		});
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
		const atomicDirectoryPath={};
		const path = getPmPath(lowestUserId, highestUserId,
			atomicDirectoryPath);
		const jArray = messages.map(message=>message.toJSON());
		console.log(`Saving pms to ${path}`);
		DirectoryHelper.makeDirectoryIfDoesntExist(atomicDirectoryPath.value);
		fs.writeFileSync(path, JSON.stringify(jArray));
	}
	function getPmPath(lowestUserId, highestUserId,
		atomicDirectoryPath){
		atomicDirectoryPath.value = `${FilePaths.getPmsRoot()}/${String(lowestUserId)}/`;
		return `${atomicDirectoryPath.value}${String(highestUserId)}.json`;
	}
})();
