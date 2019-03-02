var Dialog = (function(){
	var _Dialog = function(params){
		var self = this;
		var disposeOnHide=params.disposeOnHide;
		var message = params.message;
		var popup = new Popup({});
		var element = popup.getElement();
		var inner = E.DIV();
		var message = E.DIV();
		element.classList.add('dialog');
		inner.classList.add('inner');
		message.classList.add('message');
		message.innerHTML = params.message;
		document.body.appendChild(popup.getElement());
		popup.getElement().appendChild(inner);
		inner.appendChild(message);
		var buttons = createButtons(params);
		this.show = function(){
			setVisible(true);
		};
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
				var button = new Button({text:buttonProfile.text, className:'dialog-button'});
				button.addEventListener('click', buttonProfile.callback?function(){
					hide();
					buttonProfile.callback();
				}:hide);
				inner.appendChild(button.getElement());
			});
		}
	};
	_Dialog.show = function(params){
		params.disposeOnHide = true;
		var dialog = new _Dialog(params);
		dialog.show();
		return dialog;
	};
	return _Dialog;
})();

setTimeout(function(){
new Dialog({message:'tsdffdfds', buttons:[{text:'dsffds'}]}).show();
}, 0);