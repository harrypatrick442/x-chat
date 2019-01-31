var NotificationsButton = (function(){
	var _NotificationsButton = function(params){
		var self = new Button({classNames:['button-notifications']});
		var notifications = params.notifications;
		var ui = new UI({button:self});
		notifications.addEventListener('added', countChanged);
		notifications.addEventListener('removed', countChanged);
		countChanged();
		function countChanged(){
			ui.setCount(notifications.getCount());
		}
		return self;
	};
	return _NotificationsButton;
	function UI(params){
		var element = params.button.getElement();
		var count = E.DIV();
		count.classList.add('count');
		element.appendChild(count);
		this.setCount = function(value){
			count.innerHTML = value>9?'!':String(value);
		};
	}
})();