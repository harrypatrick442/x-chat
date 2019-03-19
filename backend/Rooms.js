exports.Rooms = (function(){
	var dalRooms = require('./Dal/DalRooms').dalRooms;
	var CallbackGrouper = require('./CallbackGrouper');
	var each = require('./each');
	var _Rooms = function(){
		var self = this;
		var mapIdToRoom={};
		var loaded=false;
		this.getRoom=function(roomId, callback){
			var room = mapIdToRoom[roomId];
			if(room){
				callback(room);
				return;
			}
			var handle = CallbackGrouper.add(roomId, self.getRoom, callback);
			if(!handle)return;/* already called*/
			dalRooms.getRoom(roomId, function(room){
				mapIdToRoom[room.getId()]=room;
				handle.call(room);
			});
		};
		/* Rooms with most users show first...
		If not already included, rooms which are set to alwaysshow
		Finally rooms with the highest chat history. if a room has one or more user in it, it will for now remain in memory even if its no longer keeplisted..
		Any room which is listed in the RoomsMenu will always be in memory while listed.
		when to dispose a room 
		Rooms have keeplisted property.
		*/
		this.addNew = function(room){
			mapIdToRoom[room.getId()]=room;
		};
		this.getInfos= function(callback){
			if(!loaded){
				loadRooms(function(){
					callback(_getInfos());
					loaded=true;
				});
				return;
			}
			callback(_getInfos());
		};
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
		function _getInfos(){
			var list =[];
			for(var id in mapIdToRoom){
				var room = mapIdToRoom[id];
				if(!room.isPm()){
					list.push(room.getInfo());
				}
			}
			return list;
		}
		function loadRooms(callback){
			dalRooms.getRooms(function(rooms){
				each(rooms, function(room){
					mapIdToRoom[room.getId()]=room;
				});
				callback();
			});
		}
	};
	return _Rooms;
})();