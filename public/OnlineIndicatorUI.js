function OnlineIndicatorUI(onlineIndicator){
	var element = E.DIV();
	element.classList.add('online-indicator');
	onlineIndicator.addEventListener('cameonline', cameOnline);
	onlineIndicator.addEventListener('wentofline', wentOffline);
	(onlineIndicator.getOnline()?cameOnline:wentOffline)();
	function cameOnline(e){
		element.classList.add('online');
		element.classList.remove('offline');
	}
	function wentOffline(e){
		element.classList.remove('online');
		element.classList.add('offline');
	}
}