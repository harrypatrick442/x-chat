exports.dalMessages= new (function(){
	const fs = require('fs');
	const MAX_N_ROOM_MESSAGES=100;
	const Message = require('./../Message');
	const mapRoomIdToMessages = new Map();
	let serverAssignedNMessage=0;
	load();
	this.getMessages = function(roomId, nMessages, callbackGotMessages){
		const roomMessages = mapRoomIdToMessages.get(roomId);
		if(!roomMessages)return [];
		return roomMessages;//.slice((roomMessages.length - 5), roomMessages.length);
	};
	this.addMessage= function(roomId, message){
		message.setServerAssignedNMessage(serverAssignedNMessage);
		message.setUniqueId(serverAssignedNMessage++);//todo might have to check if userId is string or int was a cast to string in message.,
		let roomMessages = mapRoomIdToMessages.get(roomId);
		if(!roomMessages){
			mapRoomIdToMessages.set(roomId, [message]);
			return;
		}
		roomMessages.push(message);
		while(roomMessages.length>MAX_N_ROOM_MESSAGES){
			roomMessages.splice(0, 1);
		}
	};
	this.save = save;
	
	function save(){
		const jObject = {entries:{}, serverAssignedNMessage:serverAssignedNMessage};
		mapRoomIdToMessages.keys().forEach(
			roomId=>{
				jObject.entries[roomId]=mapRoomIdToMessages[roomId].map(message=>message.toJSON());
			}
		);
		fs.writeFileSync(FilePaths.getMessages(), JSON.stringify(jObject));
	}
	function load(){
		try{
			const jObject = JSON.parse(fs.readFileSync(FilePaths.getMessages()));
			serverAssignedNMessage = jObject.serverAssignedNMessage;
			if(serverAssignedNMessage===undefined||serverAssignedNMessage===null)serverAssignedNMessage=0;
			for (const [roomId, jArrayMessages] of Object.entries(jObject.entries)) {
				mapRoomIdToMessages.set(roomId, jArrayMessages.map(jObjectMessage=>Message.fromJSON(jObjectMessage)));
			}
		}
		catch{
			
		}
	}
})();
