var NotificationsMenu = (function(){
	var _NotificationsMenu = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var notifications = params.notifications;
		var pms = params.pms;
		var seenNotificationsManager = params.seenNotificationsManager;
		var popup = new Popup({});
		var buttonClose = new Button({className:'button-close'});
		var ui = new UI({popup:popup, buttonClose:buttonClose, getEntries:getEntries});
		var sortedFilteredEntries = new SortedFilteredEntries({compare:compare, getEntryId:getEntryId, element:ui.getEntries()});
		this.show = ui.show;
		this.getElement = ui.getElement
		buttonClose.addEventListener('click', popup.hide);
		notifications.addEventListener('added', added);
		notifications.addEventListener('removed', removed);
		pms.addEventListener('showingpm', showingPm);
		function getEntries(){
			return sortedFilteredEntries.getEntries();
		}
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
			notificationEntry.addEventListener('showpm', showPm);
			notificationEntry.addEventListener('dispose', dispose);
			sortedFilteredEntries.addEntry(notificationEntry);
		}
		function showPm(e){
			self.dispatchEvent(e);
			if(popup)popup.hide();
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
		var getEntries = params.getEntries;
		element.classList.add('notifications-menu');
		var entries = E.DIV();
		var entriesWrapper = E.DIV();
		var heading = new Heading({title:'&nbsp;PM Notifications'});
		var headingWrapper = E.DIV();
		var inner = E.DIV();
		inner.classList.add('notifications-menu-inner');
		entries.classList.add('entries');
		entriesWrapper.classList.add('entries-wrapper');
		headingWrapper.classList.add('heading-wrapper');
		
		
		heading.getEntries().appendChild(buttonClose.getElement());
		
		headingWrapper.appendChild(heading.getElement());
		
		inner.appendChild(headingWrapper);
		inner.appendChild(entriesWrapper);
		entriesWrapper.appendChild(entries); 
		element.appendChild(inner);
		
		
		this.show = function(){
			popup.show();
			resized();
		};
		function resized(){
			var clientWidth = entries.clientWidth;
			each(getEntries(), function(notificationEntry){
				console.log(notificationEntry);
				notificationEntry.parentWidth(clientWidth);
			});
		}
		this.addEntry = function(entry){
			entries.appendChild(entry.getElement());
		};
		this.removeEntry = function(){
			entries.removeChild(entry.getElement());
		};
		this.getElement = function(){return element;};
		this.getEntries = function(){return entries;};
		resizeWatched = ResizeManager.add({element:element, onResized:resized, staggered:true});
		resizeWatched.manual(true);
	}
})();