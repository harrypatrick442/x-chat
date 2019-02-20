function Logo(){
	EventEnabledBuilder(this);
	var self = this;
	var element = E.DIV();
	element.classList.add('logo');
	this.getElement = function(){
		return element;
	};
	function dispatchClickpe(){
		self.dispatchEvent({type:'click'});
	}
}