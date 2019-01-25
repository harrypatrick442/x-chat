var NotificationsMenu = (function(){
	var _NotificationsMenu = funciton(){
		EventEnabledBuilder(this);
		var self = this;
		var popup = new Popup({});
		var ui = new UI({popup:popup});
		this.show = ui.show;
	};
	return _NotificationsMenu;
	function UI(params){
		var element = params.popup.getElement();
		element.classList.add('notifications-menu');
		var entries = E.DIV();
		entries.classList.add('entries');
		element.appendChild(entries);
		this.show = function(){
			popup.show();
		};
	}
})();