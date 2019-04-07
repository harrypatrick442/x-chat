function Logo(){
	EventEnabledBuilder(this);
	var self = this;
	var element = E.DIV();
	element.classList.add(!window.isBrexitChat?'logo':'logo-brexit-chat');
	var inner = E.DIV();
	element.appendChild(inner);
		ImagePreloader.preloadRange(!window.isBrexitChat?['/logo.gif', '/logo-hover.gif']:['/logo-brex-chat-logo.gif', '/logo-brexit-chat-hover.gif']);
	this.getElement = function(){
		return element;
	};
	element.addEventListener('click', dispatchClick);
	function dispatchClick(){
		self.dispatchEvent({type:'click'});
	}
}