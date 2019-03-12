var Popup= new (function(){
	//var active;
	var _Popup = function(params){
		params=params||{};
		EventEnabledBuilder(this);
		var self = this;
		var clickedOffHandle;
		var childPopups = [];
		var element = E.DIV();
		var showing = false;
		var closeOnClickOff = params.closeOnClickOff==undefined?true:params.closeOnClickOff;
		element.classList.add('popup');
		this.show = function(){
			//if(active)
				//active.hide();
			if(closeOnClickOff)
				clickedOffHandle = ClickedOff.register(element, hide);
			setVisible(true);
			showing = true;
			//active = self;
		};
		this.hide = function(){
			showing = false;
			if(closeOnClickOff)
				clickedOffHandle.dispose();
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
		};
		this.dispose = function(){
			if(closeOnClickOff)
				ClickedOff.dispose();
			element.parentNode.removeChild(element);
		};
		this.addChildPopup = function(childPopup){//a child control which can be outside the bounds but will not trigger a click off when its clicked on.
			if(!showing)throw new Error('Cant add child while popup is not showing. Children should be added when made visible only');
			if(!clickedOffHandle)return;
			childPopup.addEventListener('hide', childHidden);
			clickedOffHandle.addAdditionalElement(childPopup.getElement());
			childPopups.push(childPopup);
		};
		this.getElement = function(){return element;};
		function childHidden(e){
			removeChildPopup(e.popup);
		}
		function removeChildPopup(childPopup){
			clickedOffHandle.removeAdditionalElement(childPopup.getElement());
			var index = childPopups.indexOf(childPopup);
			if(index<0)return;
			childPopups.splice(index, 1);
		}
		function hide(){
			setVisible(false);
			each(childPopups.slice(), removeChildPopup);
			dispatchHide();
		}
		function setVisible(value){
			element.style.display=value?'block':'none';
		}
		function dispatchHide(){
			self.dispatchEvent({type:'hide', popup:self});
		}
	};
	return _Popup;
})();