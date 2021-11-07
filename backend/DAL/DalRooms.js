exports.dalRooms= new (function(){
	const Room = require('./../Room').Room;
	const rooms = [];
	this.getRoomsToList = function(callback){
		return rooms;
	};
	this.getRoom = function(id, callback){
		return  rooms.filter(room=>room.id===id)[0];
	};
	this.search = function(text, callback){
		const normalizedText = text.toLowerCase();
		return rooms.filter(room.getName().toLowerCase().indexOf(normalizedText)>=0);
	};
	this.createRoom = function(name, callback){
	};
	this.save = save;
	
	function save(){
		const jArray rooms.map(room=>room.toJSON());
		fs.writeFileSync(FilePaths.getRooms(), JSON.stringify(jArray));
	}
	function load(){
		try{
			const jArray = JSON.parse(fs.readFileSync(FilePaths.getRooms()));
			rooms = jArray.map(jObjectRoom=>Room.fromJSON(jObjectRoom));
		}
		catch{
			
		}
	}
})();
