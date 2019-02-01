var ImageUploader = new (function(){
	var _ImageUploader = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var buttonClose = new Button({ className:'button-close'});
		var popup = new Popup({});
		var croppingFrame = new CroppingFrame({});
		var ui = new UI({popup:popup, buttonClose:buttonClose, croppingFrame:croppingFrame});
		function openFile(file) {
			var input = file.target;
			var fileReader = new FileReader();
			fileReader.onload = function(){
				var dataUrl = reader.result;
				croppingFrame.load(dataUrl);
			};
			reader.readAsDataURL(input.files[0]);
		}
	};
	return _ImageUploader;
	function UI(params){
		var buttonClose = params.buttonClose;
		var croppingFrame = params.croppingFrame;
		var element = params.popup.getElement();
		element.classList.add('image-uploader');
		var inputFile = E.FILE();
		inputFile.accept='';
		var inner = E.DIV();
		inner.classList.add('inner');
		var heading = E.DIV();
		heading.classList.add('heading');
		var bottom = E.DIV();
		bottom.classList.add('bottom');
		document.body.appendChild(element);
		element.appendChild(inner);
		inner.appendChild(heading);
		heading.appendChild(buttonClose.getElement());
		inner.appendChild(croppingFrame.getElement());
		inner.appendChild(bottom);
		this.setHeading = function(text){
			heading.innerHTML = text;
		};
	}
})();