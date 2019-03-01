var UsersMenues = (function(){
	var _UsersMenues = function(){
		EventEnabledBuilder(this);
		var self = this;
		var popup;
		if(isMobile){
			popup = new Popup({});
		}
		var ui = new UI({popupElement:isMobile?popup.getElement():undefined, getTopEntry:getTopEntry});
		var overlappingEntries = new OverlappingEntries({element:ui.getEntries()});
		this.getElement = ui.getElement;
		this.setVisible = ui.setVisible;
		this.add=function(usersMenu){
			overlappingEntries.add(usersMenu);
			usersMenu.addEventListener('showpm',function(e){ return self.dispatchEvent(e);});
			usersMenu.addEventListener('show',show);
			usersMenu.addEventListener('hide',hide);
			if(isMobile)
				usersMenu.addEventListener('hidepopup', hidePopup);
		};
		this.remove=function(usersMenu){
			overlappingEntries.remove(usersMenu);
		};
		this.setUsers = function(usersMenu){
			overlappingEntries.set(usersMenu);
		};
		this.show = function(){
			popup.show();
			console.log(overlappingEntries.getTopEntry().getEntry());
			overlappingEntries.getTopEntry().getEntry().resize();
		};
		function getTopEntry(){
			return overlappingEntries.getTopEntry();
		}
		function hidePopup(){
			popup.hide();
		}
		function hide(e){
			overlappingEntries.hide(e.entry);
		}
		function show(e){
			overlappingEntries.show(e.entry);
		}
	};
	return _UsersMenues;
	function UI(params){
		var element = params.popupElement;
		var getTopEntry = params.getTopEntry;
		if(!element) element = E.DIV();
		else document.body.appendChild(element);
		element.classList.add('users-menues');
		this.getElement=function(){return element;};
		this.getEntries = function(){return entries;};
		var entries = E.DIV();
		entries.classList.add('users-menues-entries');
		element.appendChild(entries);
		if(!isMobile){
			ResizeManager.add({element:element, onResized:onResized});
		}
		this.setVisible = function(value){
			entries.style.display=value?'block':'none';
		};
		function onResized(){console.log('a');
			getTopEntry().getEntry().resize();
		}
	}
})();