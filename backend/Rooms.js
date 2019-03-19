exports.Rooms = (function(){
	var dalRooms = require('./Dal/DalRooms').dalRooms;
	var CallbackGrouper = require('./CallbackGrouper');
	var each = require('./each');
	var _Rooms = function(){
		var self = this;
		var mapIdToRoom={};
		var loaded=false;
		this.getRoom=function(roomId, callback){
			console.log('this in getrooms is');
			console.log(this);
			var room = mapIdToRoom[roomId];
			if(room){
				callback(room);
				return;
			}
			var handle = CallbackGrouper.add(self.getRoom, roomId, callback);
			if(!handle)return;/* already called*/
			dalRooms.getRoom(roomId, function(room){
				mapIdToRoom[room.getId()]=room;
				handle.call();
				console.log('room that should only be seen once is: ');
				console.log(room);
			});
		};
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
					if(room&&!room.isPm()||room.userAllowed(device.getUser()))
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