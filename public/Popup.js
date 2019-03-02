var Popup= new (function(){
	var active;
	var _Popup = function(params){
		var self = this;
		var element = E.DIV();
		element.classList.add('popup');
		this.show = function(){
			if(active)
				active.hide();
			ClickedOff.register(element, hide);
			setVisible(true);
			active = self;
		};
		this.hide = function(){
			ClickedOff.remove(element);
			hide();
		};
		this.setPosition=function(params){
			if(params.left)
				element.style.left=String(params.left)+'px';
			if(params.top)
				element.style.top=String(params.top)+'px';
			if(params.right)
				element.style.right=String(params.right)+'px';
			if(params.bottom)
				element.style.bottom=String(params.bottom)+'px';
			console.log(params);
		};
		this.dispose = function(){
			ClickedOff.remove(element);
			element.parentNode.removeChild(element);
		};
		this.getElement = function(){return element;};
		function hide(){
			setVisible(false);
		}
		function setVisible(value){
			element.style.display=value?'block':'none';
		}
	};
	return _Popup;
})();