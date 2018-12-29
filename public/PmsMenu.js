var PmsMenu = new (function(){
	var _PmsMenu = function(){
		var self = this;
		var ui = new UI();
		ui.addEventListener('show', show);
		ui.addEventListener('hide', hide);
		this.getElement = ui.getElement;
		function show(){
			ui.setEntriesVisible(true);
		}
		function hide(){
			ui.setEntriesVisible(false);
		}
	};
	return _PmsMenu;
	function UI(){
		EventEnabledBuilder(this);
		var self = this;
		var element = E.DIV();
		element.classList.add('pms-menu');
		var entries = E.DIV();
		entries.classList.add('entries');
		element.appendChild(entries); 
		var divButtonShowHideWrapper = E.DIV();
		divButtonShowHideWrapper.classList.add('button-show-hide-wrapper');
		var buttonShowHide = new Button({toggle:true, classNames:['button-show-hide'], classNameToggled:'button-hide'});
		divButtonShowHideWrapper.appendChild(buttonShowHide.getElement());
		buttonShowHide.addEventListener('toggled', toggled);
		element.appendChild(divButtonShowHideWrapper	);
		this.getElement = function(){return element;};
		this.setEntriesVisible=function(value){
			entries.style.display=value?'block':'none';
		};
		function toggled(e){
			(e.toggled?dispatchShow:dispatchHide)();
		}
		function dispatchShow(){
			self.dispatchEvent({type:'show'});
		}
		function dispatchHide(){
			self.dispatchEvent({type:'hide'});
		}
	}
})();