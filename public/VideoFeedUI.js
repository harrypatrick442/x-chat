var VideoFeedUI = (function(){
	var _VideoFeedUI = function(videoFeed){
		EventEnabledBuilder(this);
		var self = this;
		var latestWrappedOffer;
		var currentDialog;
		var element = E.DIV();
		element.classList.add('video-feed');
		var video = E.VIDEO();
		element.appendChild(video);
		videoFeed.addEventListener('gotoffer', onGotOffer);
		videoFeed.addEventListener('setlocalstream', onSetLocalStream);
		videoFeed.addEventListener('stopped', onStopped);
		videoFeed.addEventListener('offerfailed', onOfferFailed);
		videoFeed.addEventListener('acceptfailed', onAcceptFailed);
		this.getElement = function(){return element;};
		function onGotOffer(e){
			latestWrappedOffer = e.wrappedOffer;
			console.log(e.offer);
			if(currentDialog)currentDialog.dispose();
			currnetDialog = Dialog.show({message:latestWrappedOffer.userFrom.getUsername()+" want's to video chat!",
			buttons:[{text:'Accept', callback:accept},{text:'decline', callback:decline}]});
		}
		function accept(){
			videoFeed.acceptedOffer(latestWrappedOffer.offer);
		}
		function decline(){
			
		}
		function onSetLocalStream(e){
			console.log('setting stream');
			var stream = e.stream;
			video.srcObject=stream;
			video.play();
			dispatchShow();
		}
		function onStopped(e){
			dispatchHide();
		}
		function onAcceptFailed(e){
			var reason = e.error?e.error.message:undefined;
			dispatchShowMessageToUser(reason?'Accept failed with reason: '+reason:'Offer failed');
		}
		function onOfferFailed(e){
			var reason = e.error?e.error.message:undefined;
			dispatchShowMessageToUser(reason?'Offer failed with reason: '+reason:'Offer failed');
		}
		function dispatchShow(){
			self.dispatchEvent({type:'show'});
		}
		function dispatchHide(){
			self.dispatchEvent({type:'hide'});
		}
		function dispatchShowMessageToUser(message){
			self.dispatchEvent({type:'showmessagetouser', message:message});
		}
	};
	return _VideoFeedUI;
})();