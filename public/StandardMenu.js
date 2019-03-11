var StandardMenu = new (function(){
	var _StandardMenu = function(params){
		var self = this;
		var title = params.title;
		var popup = new Popup({});
		var buttonClose = new Button({className:'button-close'});
		var ui = new UI({popup:popup, buttonClose:buttonClose,
		entries:[], title:title});
		var pms = params.pms;
		this.getElement = ui.getElement;
		this.getEntries = ui.getEntries;
		this.setVisible = ui.setVisible;
		this.show= function(){
			console.log('show');
			popup.show();
		};
		if(buttonClose)buttonClose.addEventListener('click',hide);
		function hide(){
			popup.hide();
		}
	};
	return _StandardMenu;
	function UI(params){
		var title = params.title;
		EventEnabledBuilder(this);
		var self = this;
		var title = params.title;
		var element = params.popup.getElement();
		var inner = E.DIV();
		var entries = E.DIV();
		entries.classList.add('entries');
		inner.classList.add('standard-menu-inner');
		var buttonClose = params.buttonClose;
		var heading=E.DIV();
		heading.innerHTML='&nbsp;'+title;
		heading.classList.add('heading');
		heading.appendChild(buttonClose.getElement());
		element.appendChild(inner);
		inner.appendChild(heading);
		inner.appendChild(entries);
		element.classList.add('standard-menu');
		each(params.entries, function(entry){
			entries.appendChild(entry.getElement());
		});
		document.body.appendChild(element);
		this.getElement = function(){return element;};
		this.getEntries = function(){return entries;};
		this.setVisible=function(value){
			entries.style.display=value?'block':'none';
		};
	}
})();