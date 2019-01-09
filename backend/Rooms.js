exports.Rooms = (function(){
	var dalRooms = require('./Dal/DalRooms').dalRooms;
	var each = require('./each').each;
	var _Rooms = function(){
		var self = this;
		var mapIdToRoom={};
		var loaded=false;
		this.getRoom=function(roomId){
			return mapIdToRoom[roomId];
		};
		this.createRoom=function(name){
			var room = new Room({name:name});
			mapIdToRoom[room.getId()]=room;
			return room;
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