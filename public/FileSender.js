var FileSender = (function(){
	var DONE='done';
	var SENDING='sending';
	var PROGRESS='progress';
	var _FileSender = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var url = params.url;
		var sequentially = params.sequentially;
		var ajax = new Ajax({url:url});
		var queue = [];
		this.queue = function(params){
			var sender = new Sender({data:params.data, fileName:params.fileName, ajax:ajax});
			var handle = new Handle(sender);
			if(sequentially){
				queue.push(sender);
				if(queue.length<2){
					sendNext();
				}
			}
			else
				new Task(function(){
					queue.push(sender);
					sender.addEventListener(DONE, doneSendParallel);
					sender.send();
			}).run();
			dispatchQueued(handle);
			return handle;
		};
		function sendNext(){
			if(queue.length<1)return false;
			var nextSender = queue.splice(0, 1)[0];
			nextSender.addEventListener(DONE, doneSendSequentially);
			return true;
		}
		function dispatchQueued(handle){
			self.dispatchEvent({type:'queued', handle:handle});
		}
		function doneSendParallel(e){
			e.sender.removeEventListener(DONE);
			removeFromQueue(e.sender);
			if(queue.length<1)dispatchDone();
		}
		function doneSendSequentially(e){
			e.sender.removeEventListener(DONE);
			removeFromQueue(e.sender);
			sendNext()&&dispatchDone();
		}
		function dispatchDone(){
			self.dispatchEvent({type:DONE});
		}
		function removeFromQueue(sender){
			var index = queue.indexOf(sender);
			if(index<0)return;
			queue.splice(index, 1);
		}
	};
	return _FileSender;
	function Sender(params){
		EventEnabledBuilder(this);
		var self = this;
		var ajax = params.ajax;
		var data = params.data;
		var fileName = params.fileName;
		var ajaxHandle;
		this.send= function(){
			ajaxHandle = ajax.post({data:data});
			sending(ajaxHandle);
		};
		this.abort = function(){
			ajaxHandle&&ajaxHandle.abort();
		};
		this.getSuccessful = function(){
			return ajaxHandle.getSuccessful();
		};
		this.getFileName = function(){
			return fileName;
		};
		function sending(ajaxHandle){
			ajaxHandle.onDone=dispatchDone;
			ajaxHandle.onProgress=onProgress;
			onSending();
		}
		function dispatchDone(){
			self.dispatchEvent({type:DONE, sender:self});
		}
		function onProgress(proportion){
			self.onProgress&&self.onProgress(proportion);
		}
		function onSending(){
			self.onSending&&self.onSending();
		}
	}
	function Handle(sender){
		EventEnabledBuilder(this);
		var self = this;
		this.abort = sender.abort;
		sender.addEventListener(DONE, dispatchDone);
		sender.onProgress = dispatchProgress;
		sender.onSending = dispatchSending;
		this.getFileName = sender.getFileName;
		function dispatchProgress(proportion){
			self.dispatchEvent({type:PROGRESS,  sendingHandle:self, percent:proportion*100, proportion:proportion});
		}
		function dispatchDone(){
			self.dispatchEvent({type:DONE, sendingHandle:self, successful:sender.getSuccessful()});
		}
		function dispatchSending(){
			self.dispatchEvent({type:SENDING, handle:self});
		}
	}
})();