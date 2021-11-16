const dalRooms=require('./DAL/DalRooms');
const CallbackGrouper=require('./CallbackGrouper');
const Timer=require('./Timer');
const DELAY_UPDATE_MILLISECONDS = 10000;
const Rooms=require('./Rooms');
module.exports =function(params) {
	var rooms = params.rooms;
	var roomInfos;
	var timerUpdate;
	this.getInfos = function(callback){
		if(!roomInfos)
		{
			update(callback);
			return;
		}
		callback(roomInfos);
	};
	timerUpdate = new Timer({callback:update,
		delay:DELAY_UPDATE_MILLISECONDS}).start();
	function update(callback){
		var handle = CallbackGrouper.add('ListedRooms.update', update, callback);
		if(!handle)return;
		dalRooms.getRoomsToList(function(rInfos){
		var mapIdToRoomInfo = rInfos.toMap(x=>x.id, y=>y);
			addLiveRooms(mapIdToRoomInfo);
			roomInfos = [];
			for(var i in mapIdToRoomInfo){
				roomInfos.push(mapIdToRoomInfo[i]);
			}
			handle.call(roomInfos);
		});
	}
	function addLiveRooms(mapIdToRoomInfo){
		rooms.getPublicRooms().forEach(function(room){
			mapIdToRoomInfo[room.getId()]=room.getInfo();
		});
	}
};
