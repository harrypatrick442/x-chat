function Logo(){
	EventEnabledBuilder(this);
	var self = this;
	var element = E.DIV();
	element.classList.add('logo');
	var inner = E.DIV();
	element.appendChild(inner);
	this.getElement = function(){
		return element;
	};
	function dispatchClickpe(){
		self.dispatchEvent({type:'click'});
	}
}