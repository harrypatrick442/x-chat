 
var ClickMenu = new (function () {
	var OptionEntry=(function(){
		var _OptionEntry=function(params){
			EventEnabledBuilder(this);
			var self = this;
			var text = params.text;
			var tooltip = params.tooltip;
			var ui = new UI({text:text, tooltip:tooltip});
			this.getElement = ui.getElement;
			ui.getElement().addEventListener('click', click);
			function click(){
				params.callback();
				dispatchHide();
			}
			function dispatchHide(){
				self.dispatchEvent({type:'hide'});
			}
		};
		return _OptionEntry;
		function UI(params){
			var element = E.DIV();
			element.classList.add('option-entry');
			element.innerText = params.text;
			this.getElement = function(){return element;};
		}
	})();
	var _ClickMenu= function(params){
		EventEnabledBuilder(this);
		var self = this;
		if(params.options)setOptions(params.options);
		console.log(new Error().stack);
		var currentOptionEntries=[];
		var popup = new Popup();
		var element = popup.getElement();
		document.body.appendChild(element);
		var ui = new UI({element:element});
		this.show = function(params){
			if(params.options){
				clearOptions();
				setOptions(params.options);
			}
			popup.show();
		};
		this.setPosition = popup.setPosition;
		function dispatchSelected(option){
			self.dispatchEvent({type:'selected', option:option});
		}
		function setOptions(options){
			each(options, function(option){
				var optionEntry=new OptionEntry(option);
				ui.addOptionEntry(optionEntry);
				optionEntry.addEventListener('hide', hide);
				currentOptionEntries.push(optionEntry);
			});
		}
		function clearOptions(){
			each(currentOptionEntries, function(optionEntry){
				ui.removeOptionEntry(optionEntry);
			});
			currentOptionEntries=[];
		}
		function hide(e){
			popup.hide();
		}
	};
	return _ClickMenu;
	function UI(params){
		var element = params.element;
		element.classList.add('click-menu');
		this.removeOptionEntry=function(optionEntry){
			element.removeChild(optionEntry.getElement());
		};
		this.addOptionEntry=function(optionEntry){
			element.appendChild(optionEntry.getElement());
		};
	}
})();