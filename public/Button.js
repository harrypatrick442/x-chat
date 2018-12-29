var Button = new (function(){
	var _Button = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var className = params.className;
		var classNames = params.classNames;
		var classNameToggled = params.classNameToggled;
		var isToggle = params.toggle;
		var toggled = params.toggled?true:false;
		
		var element = E.DIV();
		if(className)
			element.classList.add(className);
		if(classNames)
			each(classNames, function(className){
				element.classList.add(className);
			});
		_toggle();
		element.addEventListener('click', click);
		this.getElement = function(){return element;};
		function click(){
			dispatchClick();
			toggle();
		}
		function toggle(){
			if(isToggle&&classNameToggled){
				_toggle();
				dispatchToggled(toggled);
			}
		}
		function _toggle(){
				if(toggled){
					element.classList.remove(classNameToggled);
					toggled=false;
				}
				else{
					element.classList.add(classNameToggled);
					toggled = true;
				}
		}
		function dispatchClick(){
	        self.dispatchEvent({type:'click'});
		}
		function dispatchToggled(){
			self.dispatchEvent({type:'toggled', toggled:toggled});
		}
	};
	return _Button;
})();