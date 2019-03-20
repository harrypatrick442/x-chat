module.exports =(function() {
	var Rooms=require('./Rooms');
	var dalRooms=require('./Dal/DalRooms').dalRooms;
	var CallbackGrouper=require('./CallbackGrouper');
	var each=require('./each');
	var _ListedRooms = function(params){
		var self = this;
		var rooms = params.rooms;
		var roomInfos;
		this.getInfos = function(callback){
			if(!roomInfos)
			{
				update(callback);
				return;
			}
			callback(roomInfos);
		};
		function update(callback){
			var handle = CallbackGrouper.add('ListedRooms.update', update, callback);
			if(!handle)return;
			dalRooms.getRoomsToList(function(rInfos){
				roomInfos = rInfos;
				addLiveRooms(roomInfos);
				handle.call(rInfos);
			});
		}
		function addLiveRooms(roomInfos){
			var ids = roomInfos.select(x=>x.id).toList();
			each(rooms.getPublicRooms(), function(room){
				var roomId = room.getId();
				if(ids.indexOf(roomId)<0)
					roomInfos.push(room.getInfo());
				
			});
		}
	};
	return _ListedRooms;
})();
