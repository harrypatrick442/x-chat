var PmsMenu = new (function(){
		ImagePreloader.preloadRange([
		'/images/close.jpg', 
		'/images/close-hover.jpg'
		]);
	var _PmsMenu = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var popup = window.isMobile?new Popup({}):undefined;
		var buttonClose = window.isMobile?new Button({className:'button-close'}):undefined;
		var ui = new UI({popup:popup, buttonClose:buttonClose, getEntries:getEntries, onResized:onResized});
		var pms = params.pms;
		var sortedFilteredEntries = new SortedFilteredEntries({getEntryId:getEntryId, element:ui.getEntries(), compare:compare});
		this.getElement = ui.getElement;
		this.setVisible = ui.setVisible;
		this.show= ui.show;
		this.clear = function(){
			each(sortedFilteredEntries.getEntries().slice(), _remove);
		};
		this.resize = ui.resize;
		var tabPortal;
		pms.addEventListener('add', add);
		pms.addEventListener('remove', remove);
		pms.addEventListener('addclosed', addClosed);
		if(buttonClose)buttonClose.addEventListener('click',popup.hide);
		function getEntries(){
			return sortedFilteredEntries.getEntries();
		}
		function add(e){
			_add(e);
		}
		function addClosed(e){
			_add(e);
		}
		function _add(e){
			var pmEntry= new PmEntry({userTo:e.userTo});
			pmEntry.parentWidth(ui.getElement().clientWidth);
			pmEntry.addEventListener('showpm', showPm);
			pmEntry.addEventListener('closepm', closePm);
			sortedFilteredEntries.addEntry(pmEntry);
			ui.checkResized();
		}
		function remove(e){
			var pmEntry = sortedFilteredEntries.getByEntryId(e.userTo.getId());
			pmEntry.dispose();
			_remove(pmEntry);
		}
		function _remove(pmEntry){
			if(!pmEntry)return;
			sortedFilteredEntries.removeEntry(pmEntry);
			ui.checkResized();
			pmEntry.dispose();
		}
		function getEntryId(pmEntry){
			return pmEntry.getId();
		}
		function compare(pmEntryA, pmEntryB){
			return pmEntryA.getUsername()>pmEntryB.getUsername();
		}
		function showPm(e){
			pms.showPmWithUser(e.user);
			if(popup)popup.hide();
		}
		function closePm(e){
			sortedFilteredEntries.removeEntry(e.pmEntry);
			ui.checkResized();
			pms.closePmWithUser(e.user);
		}
		function onResized(){
			dispatchResized();
		}
		function dispatchResized(){
			self.dispatchEvent({type:'resized'});
		}
	};
	return _PmsMenu;
	function UI(params){
		var self = this;
		var popup = params.popup;
		var element = window.isMobile?popup.getElement():E.DIV();
		var buttonClose = params.buttonClose;
		var onResized = params.onResized;
		var getEntries = params.getEntries;
		var entries = E.DIV();
		var entriesWrapper = E.DIV();
		var inner = E.DIV();
		var resizeWatched;
		
		if(window.isMobile)
		{
			document.body.appendChild(popup.getElement());
			var heading= new Heading({title:'&nbsp;Pms '});
			var headingWrapper = E.DIV();
			headingWrapper.classList.add('heading-wrapper');
			heading.getEntries().appendChild(buttonClose.getElement());
			headingWrapper.appendChild(heading.getElement());
			inner.appendChild(headingWrapper);
		}
		inner.classList.add('pms-menu-inner');
		element.classList.add('pms-menu');
		entriesWrapper.classList.add('entries-wrapper');
		entries.classList.add('entries');
		
			entriesWrapper.appendChild(entries); 
			inner.appendChild(entriesWrapper);
		element.appendChild(inner); 
		this.getElement = function(){return element;};
		this.setVisible=function(value){
			entries.style.display=value?'block':'none';
		};
		this.getEntries = function(){return entries;};
		this.show = function(){
			popup.show();
			resize();
		};
		this.checkResized=function(){
			resizeWatched.manual(true);
		};
		resizeWatched = ResizeManager.add({element:element, onResized:resize, staggered:true});
		resizeWatched.manual(true);
		this.resize = resize;
		function resize(){
			var clientWidth = entries.clientWidth;
			each(getEntries(), function(pmEntry){
				pmEntry.parentWidth(clientWidth);
			});
			onResized();
		}
	}
})();