var VideoFeedUI = (function(){
	var _VideoFeedUI = function(videoFeed){
		EventEnabledBuilder(this);
		var self = this;
		var latestWrappedOffer;
		var currentDialog;
		var element = E.DIV();
		var me = E.DIV();
		var videoMe = E.VIDEO();
		element.classList.add('video-feed');
		me.classList.add('me');
		var videoThem = E.VIDEO();
		videoThem.classList.add('video-them');
		videoMe.classList.add('video-me');
		element.appendChild(videoThem);
		element.appendChild(me);
		me.appendChild(videoMe);
		videoFeed.addEventListener('gotoffer', onGotOffer);
		videoFeed.addEventListener('setlocalstream', onSetLocalStream);
		videoFeed.addEventListener('setremotestream', onSetRemoteStream);
		videoFeed.addEventListener('stopped', onStopped);
		videoFeed.addEventListener('offerfailed', onOfferFailed);
		videoFeed.addEventListener('acceptfailed', onAcceptFailed);
		this.getElement = function(){return element;};
		function onGotOffer(e){
			latestWrappedOffer = e.wrappedOffer;
			console.log(e.offer);
			if(currentDialog)currentDialog.dispose();
			currentDialog = Dialog.show({message:latestWrappedOffer.userFrom.getUsername()+" want's to video chat!",
			buttons:[{text:'Accept', callback:accept},{text:'decline', callback:decline}]});
		}
		function accept(){
			videoFeed.acceptedOffer(latestWrappedOffer.offer);
		}
		function decline(){
			dispatchOfferRejected(VideoOfferRejectedReasons.DECLINED);
		}
		function onSetLocalStream(e){
			console.log('setting stream');
			var stream = e.stream;
			console.log(e);
			console.log(e.stream);
			videoMe.srcObject=stream;
			videoMe.play();
			dispatchShow();
		}
		function onSetRemoteStream(e){
			var stream = e.stream;
			console.log(stream);
			console.log(new Error().stack);
			console.log('setting videoThem and calling play');
			videoThem.srcObject = stream;
			videoThem.play();
		}
		function onStopped(e){
			dispatchHide();
		}
		function onAcceptFailed(e){
			var reason = e.error?e.error.message:undefined;
			dispatchShowMessageToUser(reason?'Accept failed with reason: '+reason:'Accept failed');
			console.log(reason);
			dispatchOfferRejected(VideoOfferRejectedReasons.ERROR);
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
		function dispatchOfferRejected(reason){
			console.log(reason);
			self.dispatchEvent({type:'offerrejected', reason:reason});
		}
	};
	return _VideoFeedUI;
})();