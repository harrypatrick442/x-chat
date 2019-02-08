var FileUploader = (function(){
	var _FileUploader = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var accept = params.accept;
		var button = new Button({className:'button'});
		var ui = new UI({accept:accept, button:button});
		this.getElement = ui.getElement;
		this.setVisible = ui.setVisible;
		ui.addEventListener('filechange', fileChange);
		function fileChange(e){
			console.log(e);
			var files = e.files;
			if(files.length<1)return;
			openFile(files[0]);
		}
		function openFile(file) {
			var input = file.target;
			var fileReader = new FileReader();
			fileReader.onload = function(){
				var dataUrl = fileReader.result;
				dispatchFile(dataUrl);
			};
			fileReader.readAsDataURL(file);
			ui.clearFile();
		}
		function dispatchFile(dataUrl){
			self.dispatchEvent({type:'file', dataUrl:dataUrl});
		}
	};
	return _FileUploader;
	function UI(params){
		var self = this;
		var button = params.button;
		EventEnabledBuilder(this);
		var accept = params.accept;
		console.log(accept);
		var element = E.DIV();
		element.classList.add('file-uploader');
		var fileInput = E.FILE();
		fileInput.accept=accept;
		fileInput.type='file';
		element.appendChild(button.getElement());
		button.addEventListener('click', function(){fileInput.click();});
		this.getElement = function(){return element;};
		this.setVisible = function(value){
			element.style.display=value?'block':'none';
		};
		fileInput.addEventListener('change', dispatchFileChange);
		this.clearFile=function(){
			fileInput.value='';
		};
		function dispatchFileChange(e){
			self.dispatchEvent({type:'filechange', files:fileInput.files});
		}
	}
})();