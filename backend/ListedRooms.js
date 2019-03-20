module.exports =(function() {
	const Rooms=require('./Rooms');
	const dalRooms=require('./Dal/DalRooms').dalRooms;
	const CallbackGrouper=require('./CallbackGrouper');
	const each=require('./each');
	const Timer=require('./Timer');
	const DELAY_UPDATE_MILLISECONDS = 10000;
	var _ListedRooms = function(params){
		var self = this;
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
		timerUpdate = new Timer({callback:update, delay:DELAY_UPDATE_MILLISECONDS}).start();
		function update(callback){
			console.log('Updating listed rooms');
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
			each(rooms.getPublicRooms(), function(room){
				mapIdToRoomInfo[room.getId()]=room.getInfo();
			});
		}
	};
	return _ListedRooms;
})();
