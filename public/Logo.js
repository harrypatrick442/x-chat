function Logo(){
	EventEnabledBuilder(this);
	var self = this;
	var element = E.DIV();
	var isBrexitChat=location.href.indexOf('brexit')>=0;
	element.classList.add(!isBrexitChat?'logo':'logo-brexit-chat');
	var inner = E.DIV();
	element.appendChild(inner);
		ImagePreloader.preloadRange(!isBrexitChat?['/logo.gif', '/logo-hover.gif']:['/logo-brex-chat-logo.gif', '/logo-brexit-chat-hover.gif']);
	this.getElement = function(){
		return element;
	};
	element.addEventListener('click', dispatchClick);
	function dispatchClick(){
		self.dispatchEvent({type:'click'});
	}
}