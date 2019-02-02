var ImageUploader = new (function(){
	var _ImageUploader = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var aspectRatio = params.aspectRatio;
		var buttonClose = new Button({ className:'button-close'});
		var fileUploader = new FileUploader({accept:'image/*'});
		var popup = new Popup({});
		var croppingFrame = new CroppingFrame({aspectRatio:aspectRatio});
		var ui = new UI({popup:popup, buttonClose:buttonClose, croppingFrame:croppingFrame, fileUploader:fileUploader});
		buttonClose.addEventListener('click', hide);
		fileUploader.addEventListener('file', gotFile);
		croppingFrame.addEventListener('error', croppingFrameError);
		this.show = function(){
			popup.show();
		};
		function hide(){
			popup.hide();
		}
		function gotFile(e){
			croppingFrame.load(e.dataUrl);
			fileUploader.setVisible(false);
		}
		function croppingFrameError(e){
			console.log(e.error);
			croppingFrame.hide();
			fileUploader.setVisible(false);
		}
	};
	return _ImageUploader;
	function UI(params){
		var buttonClose = params.buttonClose;
		var croppingFrame = params.croppingFrame;
		var fileUploader = params.fileUploader;
		var element = params.popup.getElement();
		element.classList.add('image-uploader');
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
		inner.appendChild(fileUploader.getElement());
		//inner.appendChild(bottom);
		this.setHeading = function(text){
			heading.innerHTML = text;
		};
	}
})();