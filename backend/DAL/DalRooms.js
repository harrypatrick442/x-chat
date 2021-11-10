exports.dalRooms= new (function(){
	const fs = require('fs');
	const Room = require('./../Room').Room;
	const FilePaths = require('./FilePaths');
	const rooms = load();
	this.getRoomsToList = function(callback){
		callback(rooms);
	};
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
		const jArray = rooms.map(room=>room.toJSON());
		fs.writeFileSync(FilePaths.getRooms(), JSON.stringify(jArray));
	}
	function load(){
		try{
			const jArray = JSON.parse(fs.readFileSync(FilePaths.getRooms()));
			return jArray.map(jObjectRoom=>Room.fromJSON(jObjectRoom));
		}
		catch{
			return [Room.fromJSON({name:"Lounge", isPm:false, id:1})];
		}
	}
})();
