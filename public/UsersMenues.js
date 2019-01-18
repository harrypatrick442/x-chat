var UsersMenues = (function(){
	var _UsersMenues = function(){
		EventEnabledBuilder(this);
		var self = this;
		var ui = new UI();
		var overlappingEntries = new OverlappingEntries({element:ui.getEntries()});
		this.getElement = ui.getElement;
		this.setVisible = ui.setVisible;
		this.add=function(usersMenu){
			overlappingEntries.add(usersMenu);
			usersMenu.addEventListener('showpm',e=>self.dispatchEvent(e));
		};
		this.remove=function(usersMenu){
			overlappingEntries.remove(usersMenu);
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
		this.getEntries = function(){return entries;};
		var entries = E.DIV();
		entries.classList.add('entries');
		element.appendChild(entries);
		this.setVisible = function(value){
			entries.style.display=value?'block':'none';
		};
	}
})();