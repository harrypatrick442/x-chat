var VideoFeedUI = (function(){
	var _VideoFeedUI = function(videoFeed){
		var self = this;
		var latestWrappedOffer;
		var currentDialog;
		var element = E.DIV();
		element.classList.add('video-feed');
		var video = E.VIDEO();
		element.appendChild(video);
		videoFeed.addEventListener('gotoffer', onGotOffer);
		videoFeed.addEventListener('setlocalstream', onSetLocalStream);
		this.getElement = function(){return element;};
		function onGotOffer(e){
			latestWrappedOffer = e.wrappedOffer;
			console.log('showing offer dialog');
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
		}
	};
	return _VideoFeedUI;
})();