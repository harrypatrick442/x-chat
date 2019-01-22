var PmsEntry= new (function(){
	var _PmsEntry = function(params){
		var self = this;
		var room = params.room;
		var userTo = room.getUserTo();
		var ui = new UI();
		this.getId = function(){
			return userTo.getId();
		};
		this.getElement = ui.getElement;
		this.setVisible = ui.setVisible;
	};
	return _PmsEntry;
	function UI(){
		var element = E.DIV();
		element.classList.add('pms-entry');
		this.getElement = function(){
			return element;
		};
	}
})();