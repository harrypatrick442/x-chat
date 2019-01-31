var PmsMenu = new (function(){
	var _PmsMenu = function(params){
		var self = this;
		var popup = isMobile?new Popup({}):undefined;
		var buttonClose = isMobile?new Button({className:'button-close'}):undefined;
		var ui = new UI({popupElement:isMobile?popup.getElement():undefined, buttonClose:buttonClose});
		var pms = params.pms;
		var sortedFilteredEntries = new SortedFilteredEntries({getEntryId:getEntryId, element:ui.getEntries(), compare:compare});
		this.getElement = ui.getElement;
		this.setVisible = ui.setVisible;
		this.show= function(){
			popup.show();
		};
		var tabPortal;
		pms.addEventListener('add', add);
		pms.addEventListener('remove', remove);
		pms.addEventListener('addclosed', addClosed);
		WindowResizeManager.addEventListener('resized', resized);
		if(buttonClose)buttonClose.addEventListener('click',popup.hide);
		function add(e){
			_add(e);
		}
		function addClosed(e){
			console.log('add closed');
			_add(e);
		}
		function _add(e){
			var pmEntry= new PmEntry({userTo:e.userTo});
			pmEntry.parentWidth(ui.getElement().clientWidth);
			pmEntry.addEventListener('showpm', showPm);
			pmEntry.addEventListener('closepm', closePm);
			sortedFilteredEntries.addEntry(pmEntry);
		}
		function remove(e){
			sortedFilteredEntries.removeEntryById(e.userTo.getId());
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
			sortedFilteredEntries.removeEntry(e.pmEntry);
			pms.closePmWithUser(e.user);
		}
	};
	return _PmsMenu;
	function UI(params){
		EventEnabledBuilder(this);
		var self = this;
		var element = params.popupElement;
		var buttonClose = params.buttonClose;
		var entries = E.DIV();
		if(!isMobile)
			element = E.DIV();
		else
		{
			document.body.appendChild(params.popupElement);
			var heading=E.DIV();
			heading.innerHTML='&nbsp;Pms ';
			heading.classList.add('heading');
			heading.appendChild(buttonClose.getElement());
			element.appendChild(heading);
		}
		element.classList.add('pms-menu');
		var entriesWrapper = E.DIV();
		entriesWrapper.classList.add('entries-wrapper');
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