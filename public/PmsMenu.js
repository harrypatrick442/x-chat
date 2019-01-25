var PmsMenu = new (function(){
	var _PmsMenu = function(params){
		var self = this;
		var popup = isMobile?new Popup({}):undefined;
		var ui = new UI({popupElement:isMobile?popup.getElement():undefined});
		var pms = params.pms;
		var sortedFilteredEntries = new SortedFilteredEntries({getEntryId:getEntryId, element:ui.getEntries(), compare:compare});
		this.getElement = ui.getElement;
		this.setVisible = ui.setVisible;
		this.show= function(){
			popup.show();
		};
		pms.addEventListener('add', add);
		pms.addEventListener('remove', remove);
		WindowResizeManager.addEventListener('resized', resized);
		function add(e){
			var pmEntry= new PmEntry({room:e.room});
			pmEntry.parentWidth(ui.getElement().clientWidth);
			pmEntry.addEventListener('showpm', showPm);
			pmEntry.addEventListener('closepm', closePm);
			sortedFilteredEntries.addEntry(pmEntry);
		}
		function remove(e){
			sortedFilteredEntries.removeEntryById(e.room.getUserTo().getId());
		}
		function getEntryId(pmEntry){
			return pmEntry.getId();
		}
		function compare(pmEntryA, pmEntryB){
			return pmEntryA.getUsername()>pmEntryB.getUsername();
		}
		function resized(){
			each(sortedFilteredEntries.getEntries(), function(pmEntry){
				var clientWidth = ui.getElement().clientWidth;
				pmEntry.parentWidth(clientWidth);
			});
		}
		function showPm(e){
			pms.showPmWithUser(e.user);
		}
		function closePm(e){
			pms.closePmWithUser(e.user);
		}
	};
	return _PmsMenu;
	function UI(params){
		EventEnabledBuilder(this);
		var self = this;
		var element = params.popupElement;
		if(!element)
			element = E.DIV();
		else
			document.body.appendChild(params.popupElement);
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