var dalRooms = require('./DAL/DalRooms');
var CallbackGrouper = require('./CallbackGrouper');
var Rooms = function(){
	var self = this;
	var mapIdToRoom=new Map();
	this.getRoom=function(roomId, callback){
		var room = mapIdToRoom.get(roomId);
		if(room){
			callback(room);
			return;
		}
		var handle = CallbackGrouper.add(roomId, self.getRoom, callback);
		if(!handle)return;/* already called*/
		dalRooms.getRoom(roomId, function(room){
			mapIdToRoom.set(room.getId(), room);
			handle.call(room);
		});
	};
	this.getPublicRooms = function(){
		var list =[];
		Array.from(mapIdToRoom.keys()).forEach(i=>{
			console.log('i');
			console.log(i);
			var room = mapIdToRoom.get(i);
			if(room.isPm())return;
			list.push(room);
		});
		return list;
	};
	/* Rooms with most users show first...
	
	ListedRooms consumes Rooms and calls a method to get current public rooms.
	If not already included, rooms which are set to alwaysshow
	Finally rooms with the highest chat history. if a room has one or more user in it, it will for now remain in memory even if its no longer keeplisted..
	Any room which is listed in the RoomsMenu will always be in memory while listed.
	when to dispose a room 
	Rooms have keeplisted property.
	*/
	this.setRoomsDeviceIsIn=function (device, roomIds){
		var roomIdsUserIsIn = device.getRoomIdsIsIn();
		var roomIdsUserIsNotIn = roomIds.where(x=>roomIdsUserIsIn.indexOf(x)<0);
		roomIdsUserIsNotIn.each(function(roomId){
			self.getRoom(roomId, function(room){
				if(room&&(!room.isPm()||room.userAllowed(device.getUser())))
					room.join(device);
			});
		});
		var roomIdsUserShouldntBeIn = roomIdsUserIsIn.where(x=>roomIds.indexOf(x)<0);
		roomIdsUserShouldntBeIn.each(function(roomId){
			self.getRoom(roomId, function(room){
				room.leave(device);
			});
		});
	};
};
module.exports = Rooms;