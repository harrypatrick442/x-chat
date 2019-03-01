function Logo(){
	EventEnabledBuilder(this);
	var self = this;
	var element = E.DIV();
	element.classList.add('logo');
	var inner = E.DIV();
	element.appendChild(inner);
	ImagePreloader.preloadRange(['/logo.gif', '/logo-hover.gif']);
	this.getElement = function(){
		return element;
	};
	element.addEventListener('click', dispatchClick);
	function dispatchClick(){
		self.dispatchEvent({type:'click'});
	}
}