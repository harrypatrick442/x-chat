var ImageUploader = new (function(){
	var _ImageUploader = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var aspectRatio = params.aspectRatio;
		var buttonClose = new Button({ className:'button-close'});
		var buttonAccept = new Button({className:'button-accept'});
		var buttonReject = new Button({className:'button-reject'});
		var fileUploader = new FileUploader({accept:'image/*'});
		var popup = new Popup({});
		var croppingFrame = new CroppingFrame({aspectRatio:aspectRatio});
		var ui = new UI({popup:popup, buttonClose:buttonClose, buttonAccept:buttonAccept, buttonReject:buttonReject, croppingFrame:croppingFrame, fileUploader:fileUploader});
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
			ui.setCroppingMenuVisible(true);
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
		var buttonAccept = params.buttonAccept;
		var buttonReject = params.buttonReject;
		var croppingFrame = params.croppingFrame;
		var fileUploader = params.fileUploader;
		var element = params.popup.getElement();
		element.classList.add('image-uploader');
		var inner = E.DIV();
		inner.classList.add('inner');
		var heading = E.DIV();
		heading.classList.add('heading');
		var buttonWrapperAccept = buttonWrapper();
		var buttonWrapperReject = buttonWrapper();
		var croppingMenu = E.DIV();
		croppingMenu.classList.add('cropping-menu');
		document.body.appendChild(element);
		element.appendChild(inner);
		inner.appendChild(heading);
		heading.appendChild(buttonClose.getElement());
		buttonWrapperAccept.appendChild(buttonAccept.getElement());
		buttonWrapperReject.appendChild(buttonReject.getElement());
		croppingMenu.appendChild(buttonWrapperReject);
		croppingMenu.appendChild(buttonWrapperAccept);
		inner.appendChild(croppingFrame.getElement());
		inner.appendChild(fileUploader.getElement());
		inner.appendChild(croppingMenu);
		this.setHeading = function(text){
			heading.innerHTML = text;
		};
		this.setCroppingMenuVisible = function(value){
			croppingMenu.style.display=value?'flex':'none';
		};
		function buttonWrapper(){
			var element = E.DIV();
			element.classList.add('button-wrapper');
			return element;
		}
	}
})();