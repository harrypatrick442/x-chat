function OnlineIndicatorUI(onlineIndicator, params){
	params = params ||{};
	var element = E.DIV();
	element.classList.add('online-indicator');
	this.getElement = function(){
		return element;
	};
	onlineIndicator.addEventListener('cameonline', cameOnline);
	onlineIndicator.addEventListener('wentoffline', wentOffline);
	onlineIndicator.addEventListener('haspm', hasPm);
	onlineIndicator.addEventListener('doesnthavepm', doesntHavePm);
	(onlineIndicator.getOnline()?cameOnline:wentOffline)();
	this.dispose = function(){
		onlineIndicator.addEventListener('cameonline', cameOnline);
		onlineIndicator.addEventListener('wentoffline', wentOffline);
	};
	function hasPm(e){
		element.classList.add('pm');
	}	
	function doesntHavePm(e){
		element.classList.remove('pm');
	}
	function cameOnline(e){
		element.classList.add('online');
		element.classList.remove('offline');
	}
	function wentOffline(e){
		element.classList.remove('online');
		element.classList.add('offline');
	}
}