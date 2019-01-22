var PmsMenu = new (function(){
	var _PmsMenu = function(params){
		var self = this;
		var ui = new UI();
		var pms = params.pms;
		var sortedFilteredEntries = new SortedFilteredEntries({getEntryId:getEntryId, element:ui.getEntries()});
		this.getElement = ui.getElement;
		this.setVisible = ui.setVisible;
		pms.addEventListener('add', add);
		pms.addEventListener('remove', remove);
		function add(e){
			sortedFilteredEntries.addEntry(new PmsEntry({room:e.room}));
		}
		function remove(e){
			sortedFilteredEntries.removeEntryById(e.room.getUserTo().getId());
		}
		function getEntryId(pmsEntry){
			return pmsEntry.getId();
		}
	};
	return _PmsMenu;
	function UI(){
		EventEnabledBuilder(this);
		var self = this;
		var element = E.DIV();
		element.classList.add('pms-menu');
		var entriesWrapper = E.DIV();
		entriesWrapper.classList.add('entries-wrapper');
		var entries = E.DIV();
		entries.classList.add('entries');
		element.appendChild(entriesWrapper); 
		entriesWrapper.appendChild(entries); 
		this.getElement = function(){return element;};
		this.setVisible=function(value){
			entries.style.display=value?'block':'none';
		};
		this.getEntries = function(){return entries;};
	}
})();