var Lobby = new (function(){
	var _Lobby = function(){
		var self = this;
		var rooms = new Rooms();
		this.getRoom = function(){return rooms;};
	};
	return _Lobby;
})();