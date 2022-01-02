module.exports= new (function(){
	const fs = require('fs');
	const Room = require('./../Room');
	const FilePaths = require('./../FilePaths');
	const rooms = load();
	this.getRoomsToList = function(callback){
		callback(rooms);
	}
	this.getRoom = function(id, callback){
		callback(rooms.filter(room=>room.getId()===id)[0]);
	};
	this.search = function(text, callback){
		const normalizedText = text.toLowerCase();
		const matchingRooms =  rooms.filter(room.getName().toLowerCase().indexOf(normalizedText)>=0);
		callback(matchingRooms);
	};
	this.createRoom = function(name, callback){
	};
	this.save = save;
	
	function save(){
		return new Promise((resolve, reject)=>{
			const jArray = rooms.map(room=>room.toJSON());
			fs.writeFile(FilePaths.getRooms(),
				JSON.stringify(jArray), 
				(err)=>{
					if(err)
						return reject(err);
					resolve();
			});
		});
	}
	function load(){
		try{
			const jArray = JSON.parse(fs.readFileSync(FilePaths.getRooms()));
			const rooms =  jArray.map(jObjectRoom=>Room.fromJSON(jObjectRoom));
			return rooms.length<1?createDefaultRoom():rooms;
		}
		catch(err){
			console.error(err);
			return creatDefaultRoom();
		}
	}
	function createDefaultRoom(){
		return [Room.fromJSON({name:"Lounge", isPm:false, id:1})];
	}
})();
