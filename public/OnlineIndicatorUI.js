function OnlineIndicatorUI(onlineIndicator){
	var element = E.DIV();
	element.classList.add('online-indicator');
	this.getElement = function(){
		return element;
	};
	onlineIndicator.addEventListener('cameonline', cameOnline);
	onlineIndicator.addEventListener('wentoffline', wentOffline);
	(onlineIndicator.getOnline()?cameOnline:wentOffline)();
	this.dispose = function(){
		onlineIndicator.addEventListener('cameonline', cameOnline);
		onlineIndicator.addEventListener('wentoffline', wentOffline);
	};
	function cameOnline(e){
		element.classList.add('online');
		element.classList.remove('offline');
	}
	function wentOffline(e){
		element.classList.remove('online');
		element.classList.add('offline');
	}
}