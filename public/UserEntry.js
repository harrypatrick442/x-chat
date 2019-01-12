var UserEntry =(function(){
	var _UserEntry = function(){
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
		function dispose(){
			dipatchDispose();
		}
		function dispatchDispose(){
			self.dispatchEvent({type:'dispose', userEntry:self});
		}
	};
	return _UserEntry;
	function UI(params){
		var element = E.DIV();
		element.classList.add('user-entry');
		this.getElement=function(){return element;};
	}
})();