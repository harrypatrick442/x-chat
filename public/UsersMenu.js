var UsersMenu =(function(){
	var _UsersMenu = function(){
		var self = this;
		var ui = new UI();
		var sortedFilteredEntries = new SortedFilteredEntries({compare:compare, getEntryId:getEntryId, element:ui.getElement()});
		this.getElement = ui.getElement;
		this.add=function(userEntry){
			sortedFilteredEntries.add(userEntry);
		};
		this.remove=function(userEntry){
			sortedFilteredEntries.remove(userEntry);
		};
		function compare(userEntryA, userEntryB){
			
		}
		function getEntryId(userEntry){
			return userEntry.getId();
		}
	};
	return _UsersMenu;
	function UI(params){
		var element = E.DIV();
		element.classList.add('users-menu');
		this.getElement=function(){return element;};
	}
})();