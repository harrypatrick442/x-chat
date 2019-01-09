var UsersMenues = (function(){
	var _UsersMenues = function(){
		var self = this;
		var ui = new UI();
		var overlappingEntries = new OverlappingEntries({element:ui.getElement()});
		this.getElement = ui.getElement;
		this.add=function(usersMenu){
			overlappingEntries.add(usersMenu);
		};
		this.remove=function(usersMenu){
			overlappingEntries.add(usersMenu);
		};
		this.setUsers = function(usersMenu){
			overlappingEntries.set(usersMenu);
		};
	};
	return _UsersMenues;
	function UI(params){
		var element = E.DIV();
		element.classList.add('users-menues');
		this.getElement=function(){return element;};
	}
})();