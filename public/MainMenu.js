var MainMenu = new (function(){
		ImagePreloader.preloadRange([
		'/images/close.jpg', 
		'/images/close-hover.jpg'
		]);
	var _MainMenu = function(params){
		var self = this;
		var popup = isMobile?new Popup({}):undefined;
		var buttonClose = isMobile?new Button({className:'button-close'}):undefined;
		var ui = new UI({popupElement:isMobile?popup.getElement():undefined, buttonClose:buttonClose});
		var pms = params.pms;
		this.getElement = ui.getElement;
		this.setVisible = ui.setVisible;
		this.show= function(){
			popup.show();
		};
		buttonClose.addEventListener('click',popup.hide);
	};
	return _MainMenu;
	function UI(params){
		EventEnabledBuilder(this);
		var self = this;
		var element = params.popupElement;
		var entries = E.DIV();
		entries.classList.add('entries');
		var buttonClose = params.buttonClose;
		document.body.appendChild(params.popupElement);
		var heading=E.DIV();
		heading.innerHTML='&nbsp;Main ';
		heading.classList.add('heading');
		heading.appendChild(buttonClose.getElement());
		element.appendChild(heading);
		element.appendChild(entries);
		element.classList.add('main-menu');
		this.getElement = function(){return element;};
		this.setVisible=function(value){
			entries.style.display=value?'block':'none';
		};
	}
})();