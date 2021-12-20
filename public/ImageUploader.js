var ImageUploader = new (function(){
	var _ImageUploader = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var {aspectRatio, profiles, getSessionId, desiredSizes,
			requestUploadUrl, url}
			= params;
			console.log('requestUploadUrl');
			console.log(requestUploadUrl);
		var buttonClose = new Button({ className:'button-close'});
		var buttonAccept = new Button({className:'button-accept'});
		var buttonReject = new Button({className:'button-reject'});
		var fileUploader = new FileUploader({accept:'image/*'});
		var fileSender = new FileSender({url:params.url});
		var popup = new Popup({});
		var fileName;
		var dataUrl = null;
		var croppingFrame = new CroppingFrame({aspectRatio:aspectRatio});
		var ui = new UI({popup:popup, buttonClose:buttonClose, buttonAccept:buttonAccept, buttonReject:buttonReject, croppingFrame:croppingFrame, fileUploader:fileUploader, fileSender:fileSender});
		buttonClose.addEventListener('click', hide);
		fileUploader.addEventListener('file', gotFile);
		croppingFrame.addEventListener('error', croppingFrameError);
		fileSender.addEventListener('done', fileSenderDone);
		this.show = ui.show;
		this.hide = ui.hide;
		buttonAccept.addEventListener('click', cropAndUpload);
		buttonReject.addEventListener('click', showFileUploader);
		function hide(){
			popup.hide();
			showFileUploader();
		}
		function gotFile(e){
			fileName = e.file.name;
			dataUrl = e.dataUrl;
			showCroppingFrame(e.dataUrl);
		}
		function croppingFrameError(e){
			console.log(e.error);
			croppingFrame.hide();
			fileUploader.setVisible(false);
		}
		function cropAndUpload(){
			const cropValues = croppingFrame.getValues();
			console.log('cropValues is ');
			console.log(cropValues);
			requestUploadImage({cropValues}).then((uniqueToken)=>{				
				fileSender.queue({
					data:dataUrl, 
					fileName,
					urlParameters:{uniqueToken}
				});
				showUploading();
			}).catch((err)=>{
				console.error(err);
			});
		}
		function requestUploadImage({cropValues}){
			return new Promise((resolve, reject)=>{
				const handle = Ajax.post({
					url:requestUploadUrl,
					timeout:5000,
					data:JSON.stringify({
						sessionId:getSessionId(),
						cropValues
					})
				});
				handle.onDone=()=>{
					console.log(handle.getResponse());
					const res = JSON.parse(handle.getResponse());
					console.log(res);
					resolve(res.uniqueToken);
				};
				handle.onError=()=>{
					reject(handle.getError());
				};
			});
		}
		function fileSenderDone(){
			console.log('fileSenderDone');
			new Timer({callback:function(){
					ui.clearFileSender();
					hide();
				}
			, delay:1000, nTicks:1}).start();
		}
		function showFileUploader(){fileUploader.setVisible(true);croppingFrame.hide();ui.setCroppingMenuVisible(false);ui.setFileSenderVisible(false);}
		function showCroppingFrame(imgDataUrl){
			fileUploader.setVisible(false);
			croppingFrame.load(imgDataUrl);
			ui.setCroppingMenuVisible(true); 
			ui.setFileSenderVisible(false);
		}
		function showUploading(){fileUploader.setVisible(false); croppingFrame.hide(); ui.setCroppingMenuVisible(false); ui.setFileSenderVisible(true);}
	};
	return _ImageUploader;
	function UI(params){
		var popup = params.popup;
		var buttonClose = params.buttonClose;
		var buttonAccept = params.buttonAccept;
		var buttonReject = params.buttonReject;
		var croppingFrame = params.croppingFrame;
		var fileUploader = params.fileUploader;
		var fileSender = params.fileSender;
		var fileSenderUI = new FileSenderUI({fileSender:fileSender});
		ImagePreloader.preloadRange([
		'/images/upload-file.jpg', 
		'/images/tick.jpg',
		'/images/cross.jpg',
		'/images/tick-hover.jpg',
		'/images/cross-hover.jpg'
		]);
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
		this.show = popup.show;
		this.hide = popup.hide;
		this.setHeading = function(text){
			heading.innerHTML = text;
		};
		this.setCroppingMenuVisible = function(value){
			croppingMenu.style.display=value?'table-row':'none';
		};
		this.setFileSenderVisible = fileSenderUI.setVisible;
		this.clearFileSender= fileSenderUI.clear;
		function buttonWrapper(){
			var element = E.DIV();
			element.classList.add('button-wrapper');
			return element;
		}
	}
})();