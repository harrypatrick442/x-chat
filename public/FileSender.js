var FileSender = (function(){
	var _FileSender = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var url = params.url;
		var sequentially = parmas.sequentially;
		var ajax = new Ajax({url:url});
		var queue = [];
		this.queueFile = function(data){
			var sender = new Sender({data:data, ajax:ajax});
			var sendingHandle = new SendingHandle(sender);
			if(sequentially){
				queue.push(sender);
				if(queue.length<2){
					sendNext();
				}
			}
			else
				new Task(function(){sender.send();}).run();
			return sendingHandle;
		};
		function sendNext(){
			if(queue.length<1)return;
			var nextSender = queue.splice(0, 1)[0];
			nextSender.addEventListener('done', doneSend);
		}
		function doneSend(e){
			e.sender.removeEventListener('done');
			sendNext();
		}
	};
	return _FileSender;
	function Sender(params){
		EventEnabledBuilder(this);
		var self = this;
		var ajax = params.ajax;
		var dataUrl = dataUrl;
		var ajaxHandle;
		this.send= function(){
			ajaxHandle = ajax.post({data:data});
			sending(ajaxHandle);
		};
		this.cancel = function(){
			
		};	
		this.getSuccess = function(){
			return ajaxHandler.getSuccess();
		};
		function sending(ajaxHandle){
			ajaxHandle.onDone=dispatchDone;
			ajaxHandle.onProgress=onProgress;
		}
		function dispatchDone(){
			self.dispatchEvent({type:'done', sender:sender});
		}
		function onProgress(){
			self.onProgress&&self.onProgress();
		}
	}
	function SendingHandle(sender){
		EventEnabledBuilder(this);
		var self = this;
		this.cancel = sender.cancel;
		sender.addEventListener('done', dispatchDone);
		sender.onProgress = dispatchProgress;
		function dispatchProgress(progress){
			self.dispatchEvent({type:'progress', progress:progress});
		}
		function dispatchDone(){
			self.dispatchEvent({type:'done', sendingHandle:self, success:sender.getSuccess()});
		}
	}
})();