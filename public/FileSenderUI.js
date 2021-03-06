var FileSenderUI=(function(){
	var _FileSenderUI = function(params){
		var self = this;
		var fileSender = params.fileSender;
		var sendings=[];
		var element = E.DIV();
		element.classList.add('file-sender');
		var entries = E.DIV();
		entries.classList.add('entries');
		element.appendChild(entries);
		this.getElement = function(){return element;};
		this.setVisible = function(value){
			element.style.display=value?'table-row':'none';
		};
		this.clear = function(){
			each(sendings, function(sending){
				entries.removeChild(sending.getElement());
			});
			sendings=[];
		};
		fileSender.addEventListener('queued', queued);
		function queued(e){
			var handle = e.handle;
			var sending = new Sending(handle);
			sendings.push(sending);
			entries.appendChild(sending.getElement());
		}
	};
	function Sending(handle){
		var element = E.DIV();
		element.classList.add('sending');
		var progressBar = new ProgressBar({showText:true, text:handle.getFileName()});
		progressBar.setPercent(3);
		element.appendChild(progressBar.getElement());
		this.getElement = function(){
			return element;
		};
		handle.addEventListener('sending', sending);
		handle.addEventListener('progress', progress);
		handle.addEventListener('done', done);
		function sending(e){
			
		}
		function progress(e){
			progressBar.setPercent(e.percent);
		}
		function done(e){
			progressBar.setPercent(100);
		}
	}
	return _FileSenderUI;
})();