var UsersMenues = (function(){
	var _UsersMenues = function(){
		EventEnabledBuilder(this);
		var self = this;
		var popup;
		if(isMobile){
			popup = new Popup({});
		}
		var ui = new UI({popupElement:isMobile?popup.getElement():undefined});
		var overlappingEntries = new OverlappingEntries({element:ui.getEntries()});
		this.getElement = ui.getElement;
		this.setVisible = ui.setVisible;
		this.add=function(usersMenu){
			overlappingEntries.add(usersMenu);
			usersMenu.addEventListener('showpm',e=>self.dispatchEvent(e));
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
		};
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
		if(!element) element = E.DIV();
		else document.body.appendChild(element);
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