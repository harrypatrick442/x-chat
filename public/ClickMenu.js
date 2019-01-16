 
var ClickMenu = new (function () {
	var _ClickMenu= function(params){
		if(params.options)setOption(params.option);
		console.log(new Error().stack);
		var currentOptionEntries=[];
		var popup = new Popup();
		var element = popup.getElement();
		document.body.appendChild(element);
		var ui = new UI({element:element});
		this.show = function(params){
			if(params.options){
				clearOptions();
				showOptions(params.options);
			}
		};
		this.setPosition = popup.setPosition;
		function dispatchSelected(option){
			self.dispatchEvent({type:'selected', option:option});
		}
		function setOptions(options){
			ui.clearOptionEntries();
			each(options, function(option){
				var optionEntry=new OptionEntry(option);
				ui.addOptionEntries(optionEntry);
				optionEntry.addEventListener('selected', callbackSelected);
			});
		}
		function clearOptions(){
			each(currentOptionEntries, function(){
				ui.removeOptionEntry();
			});
		}
		function callbackSelected(e){
			dispatchSelected(e.option);
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
	var OptionEntry=(function(){
		var _OptionEntry=function(params){
			var text = params.text;
			var tooltip = params.tooltip;
			var ui = new UI({text:text, tooltip:tooltip});
			this.getElement = ui.getElement;
		};
		return _OptionEntry;
		function UI(params){
			var element = E.DIV();
			element.classList.add('option-entry');
			this.getElement = function(){return element;};
		}
	})();
})();