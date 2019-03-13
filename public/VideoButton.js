var VideoButton = (function(){
	var _VideoButton = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var button = new Button(params);
		var on=false;
		this.setOn = function(value){
			if(on==value)return;
			if(value)
				button.getElement().classList.add('on');
			else
				button.getElement().classList.remove('on');
			on=value;
		};
		this.getElement = button.getElement;
		button.addEventListener('click', dispatchClick);
		function dispatchClick(){
			self.dispatchEvent({type:'click'});
		}
	};
	return _VideoButton;
})();