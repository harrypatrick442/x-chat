var NotificationsMenu = (function(){
	var _NotificationsMenu = function(){
		EventEnabledBuilder(this);
		var self = this;
		var popup = new Popup({});
		var buttonClose = new Button({className:'button-close'});
		var ui = new UI({popup:popup, buttonClose:buttonClose});
		this.show = ui.show;
		this.getElement = ui.getElement
		buttonClose.addEventListener('click', popup.hide);
	};
	return _NotificationsMenu;
	function UI(params){
		var popup = params.popup;
		var buttonClose = params.buttonClose;
		var element = popup.getElement();
		element.classList.add('notifications-menu');
		var entries = E.DIV();
		entries.classList.add('entries');
		var heading = E.DIV();
		heading.classList.add('heading');
		heading.innerHTML='PM Notifications';
		heading.appendChild(buttonClose.getElement());
		element.appendChild(heading);
		element.appendChild(entries);
		this.show = function(){
			popup.show();
		};
		this.getElement = function(){return element;};
	}
})();