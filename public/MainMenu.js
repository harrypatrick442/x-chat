var MainMenu = new (function(){
		ImagePreloader.preloadRange([
		'/images/close.jpg', 
		'/images/close-hover.jpg'
		]);
	var _MainMenu = function(params){
		var self = this;
		var popup = new Popup({});
		var buttonClose = isMobile?new Button({className:'button-close'}):undefined;
		var entrySignOut = new Entry({text:'Sign Out'});
		var ui = new UI({popup:popup, buttonClose:buttonClose,
		entries:[entrySignOut]});
		var pms = params.pms;
		this.getElement = ui.getElement;
		this.setVisible = ui.setVisible;
		this.show= function(){
			popup.show();
		};
		if(buttonClose)buttonClose.addEventListener('click',popup.hide);
	};
	return _MainMenu;
	function UI(params){
		EventEnabledBuilder(this);
		var self = this;
		var element = params.popup.getElement();
		var entries = E.DIV();
		entries.classList.add('entries');
		var buttonClose = params.buttonClose;
		if(isMobile){
			var heading=E.DIV();
			heading.innerHTML='&nbsp;Main Menu';
			heading.classList.add('heading');
			heading.appendChild(buttonClose.getElement());
			element.appendChild(heading);
		}
		element.appendChild(entries);
		element.classList.add('main-menu');
		each(params.entries, function(entry){
			entries.appendChild(entry.getElement());
		});
		this.getElement = function(){return element;};
		this.setVisible=function(value){
			entries.style.display=value?'block':'none';
		};
	}
	function Entry(params){
		EventEnabledBuilder(this);
		var self = this;
		var text = params.text;
		var element = E.DIV();
		element.classList.add('entry');
		if(text)element.innerHTML=text;
		this.getElement = function(){
			return element;
		};
		element.addEventListener('click', dispatchClick);
		function dispatchClick(){
			self.dispatchEvent({type:'click'});
		}
	}
})();