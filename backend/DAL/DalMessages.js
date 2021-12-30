const Message = require('./../Message');
const FilePaths = require('./../FilePaths');
	module.exports= new (function(){
	const fs = require('fs');
	const MAX_N_ROOM_MESSAGES=100;
	const Messages = require('./../Messages');
	const mapRoomIdToMessages = new Map();
	let serverAssignedNMessage=0;
	load();
	this.getMessages = function(roomId, nMessages, callbackGotMessages){
		let roomMessages = mapRoomIdToMessages.get(roomId);
		if(!roomMessages){
			roomMessages = [];
			mapRoomIdToMessages.set(roomId, roomMessages);
			callbackGotMessages(roomMessages);
			return;
		}
		callbackGotMessages( roomMessages);//.slice((roomMessages.length - 5), roomMessages.length);
	};
	this.addMessage= function(roomId, message){
		//todo might have to check if userId is string or int was a cast to string in message.,
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
		return new Promise((resolve, reject)=>{
			const jObject = {entries:{}, serverAssignedNMessage:serverAssignedNMessage};
			Array.from(mapRoomIdToMessages.keys()).forEach(
				roomId=>{
					const messages = mapRoomIdToMessages.get(roomId).map(message=>message.toJSON());
					console.log(messages);
					jObject.entries[roomId]=messages;
				}
			);
			const path = FilePaths.getMessages();
			fs.writeFile(path, JSON.stringify(jObject), (err)=>{
				if(err){
					return reject(err);
				}
				resolve();
			});
		});
	}
	function load(){
		try{
			const jObject = JSON.parse(fs.readFileSync(FilePaths.getMessages()));
			serverAssignedNMessage = jObject.serverAssignedNMessage;
			if(serverAssignedNMessage===undefined||serverAssignedNMessage===null)serverAssignedNMessage=0;
			for (const [roomId, jArrayMessages] of Object.entries(jObject.entries)) {
				mapRoomIdToMessages.set(parseInt(roomId), jArrayMessages.map(jObjectMessage=>Message.fromJSON(jObjectMessage)));
				console.log(roomId);
				console.log(jArrayMessages);
			}
		}
		catch(err){
			console.log(err);
		}
	}
})();
