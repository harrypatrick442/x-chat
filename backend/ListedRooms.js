module.exports =(function() {
	var Rooms=require('./Rooms');
	var dalRooms=require('./Dal/DalRooms').dalRooms;
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
				handle.call(rInfos);
			});
		}
	};
	return _ListedRooms;
})();
