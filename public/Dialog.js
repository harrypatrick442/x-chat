var Dialog = (function(){
	var _Dialog = function(params){
		var self = this;
		var disposeOnHide=params.disposeOnHide;
		var message = params.message;
		var buttons = createButtons(params);
		var popup = new Popup({});
		var element = popup.getElement();
		var inner = E.DIV();
		var message = E.DIV();
		element.classList.add('dialog');
		inner.classList.add('inner');
		message.classList.add('message');
		function hide(){
			if(disposeOnHide){
				dispose();
				return;
			}
		}
		function setVisible(value){
			element.style.display=value?'block':'none';
		}
		function dispose(){
			popup.dispose();
		}
		function createButtons(params){
			each(params.buttons, function(buttonProfile){
				var button = new Button({text:buttonProfile.text, className:'dialog-button');
				button.addEventListener('click', buttonProfile.callback?function(){
					hide();
					buttonProfile.callback();
				}:hide);
				inner.appendChild(button);
			});
		}
	};
})();