var RoomImage = new(function(){
	var _RoomImage = function(id){
		var __RoomImage = new ConnectedImage({def:'/images/room-default.gif', type:'room-image', id:id});
		return __RoomImage;
	};
	return _RoomImage;
})();