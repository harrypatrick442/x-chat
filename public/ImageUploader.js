var ImageUploader = new (function(){
	var _ImageUploader = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var aspectRatio = params.aspectRatio;
		var profiles = params.profiles;
		var desiredSizes = params.desiredSizes;
		var buttonClose = new Button({ className:'button-close'});
		var buttonAccept = new Button({className:'button-accept'});
		var buttonReject = new Button({className:'button-reject'});
		var fileUploader = new FileUploader({accept:'image/*'});
		var fileSender = new FileSender({url:params.url});
		var popup = new Popup({});
		var croppingFrame = new CroppingFrame({aspectRatio:aspectRatio});
		var ui = new UI({popup:popup, buttonClose:buttonClose, buttonAccept:buttonAccept, buttonReject:buttonReject, croppingFrame:croppingFrame, fileUploader:fileUploader, fileSender:fileSender});
		buttonClose.addEventListener('click', hide);
		fileUploader.addEventListener('file', gotFile);
		croppingFrame.addEventListener('error', croppingFrameError);
		this.show = function(){
			popup.show();
		};
		buttonAccept.addEventListener('click', cropAndUpload);
		buttonReject.addEventListener('click', showFileUploader);
		function hide(){
			popup.hide();
		}
		function gotFile(e){
			console.log(e);
			console.log(e);
			showCroppingFrame(e.dataUrl);
		}
		function croppingFrameError(e){
			console.log(e.error);
			croppingFrame.hide();
			fileUploader.setVisible(false);
		}
		function cropAndUpload(){
			each(profiles, function(profile){
				var dataUrl = croppingFrame.getCroppedImage({ profile:profile});
				fileSender.queue(JSON.stringify({dataUrl:dataUrl, profile:profile}));
				showUploading();
			});
		}
		function showFileUploader(){fileUploader.setVisible(true);croppingFrame.hide();ui.setCroppingMenuVisible(false);}
		function showCroppingFrame(imgDataUrl){fileUploader.setVisible(false);croppingFrame.load(imgDataUrl);ui.setCroppingMenuVisible(true);}
		function showUploading(){fileUploader.setVisible(false); croppingFrame.hide(); ui.setCroppingMenuVisible(false);}
	};
	return _ImageUploader;
	function UI(params){
		var buttonClose = params.buttonClose;
		var buttonAccept = params.buttonAccept;
		var buttonReject = params.buttonReject;
		var croppingFrame = params.croppingFrame;
		var fileUploader = params.fileUploader;
		var fileSender = params.fileSender;
		var fileSenderUI = new FileSenderUI({fileSender:fileSender});
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
		inner.appendChild(fileSenderUI.getElement());
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