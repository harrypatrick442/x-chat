
var Rooms = new (function(){
	var _Rooms = function(){
		var self = this;
		var ui = new UI();
		this.getElement = ui.getElement;
		this.getRoom = function(roomUuid){
			return mapUuidToRoom[roomUuid];
		};
		this.createRoom=function(name){
			
		};
	};
	return _Rooms;
	function UI(){
		var element = E.DIV();
		element.classList.add('rooms');
		var entries = E.DIV();
		entries.classList.add('entries');
		element.appendChild(entries);
		this.getElement = function(){return element;};
	}
})();