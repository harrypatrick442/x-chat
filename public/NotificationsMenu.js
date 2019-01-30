var NotificationsMenu = (function(){
	var _NotificationsMenu = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var notifications = params.notifications;
		var pms = params.pms;
		var seenNotificationsManager = params.seenNotificationsManager;
		var popup = new Popup({});
		var buttonClose = new Button({className:'button-close'});
		var ui = new UI({popup:popup, buttonClose:buttonClose});
		var sortedFilteredEntries = new SortedFilteredEntries({compare:compare, getEntryId:getEntryId, element:ui.getEntries()});
		this.show = ui.show;
		this.getElement = ui.getElement
		buttonClose.addEventListener('click', popup.hide);
		notifications.addEventListener('added', added);
		notifications.addEventListener('removed', removed);
		pms.addEventListener('showingpm', showingPm);
		function showingPm(e){
			var userId = e.user.getId();
			var notification = notifications.getById(userId);
			if(!notification)return;
			notifications.remove(notification);
			seenNotificationsManager.seen(notification);
		}
		function added(e){
			var notification = e.notification;
			notification.addEventListener('seen', seen);
			var notificationEntry = new NotificationEntry(notification);
			notificationEntry.addEventListener('showpm', e=>self.dispatchEvent(e));
			notificationEntry.addEventListener('dispose', dispose);
			sortedFilteredEntries.addEntry(notificationEntry);
		}
		function seen(e){
			seenNotificationsManager.seen(e.notification);
		}
		function removed(e){
			console.log(e);
			var notification = e.notification;
			sortedFilteredEntries.removeEntryById(notification.getId());
		}
		function compare(notificationEntryA, notificationEntryB){
			
		}
		function getEntryId(notificationEntry){
			return notificationEntry.getId();
		}
		function dispose(e){
			notifications.remove(e.notification);
		}
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
		this.addEntry = function(entry){
			entries.appendChild(entry.getElement());
		};
		this.removeEntry = function(){
			entries.removeChild(entry.getElement());
		};
		this.getElement = function(){return element;};
		this.getEntries = function(){return entries;};
	}
})();