exports.Rooms = new (function(){
	var dalRooms = require('./Dal/DalRooms').dalRooms;
	var each = require('./each').each;
	var _Rooms = function(){
		var self = this;
		var mapUuidToRoom={};
		this.getRoom=function(roomId){
			return mapUuidToRoom[roomId];
		};
		this.createRoom=function(name){
			var room = new Room({name:name});
			mapUuidToRoom[room.getUuid()]=room;
			return room;
		};
		initialize();
		function initialize(){
			loadRooms();
		}
		function loadRooms(){
			console.log('loading rooms');
			var rooms = dalRooms.getRooms();
			each(rooms, function(room){
				mapUuidToRoom[room.getId()]=room;
			});
		}
	};
	return _Rooms;
})();