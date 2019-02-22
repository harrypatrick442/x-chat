var VideoFeedUI = (function(){
	var _VideoFeedUI = function(videoFeed){
		var self = this;
		var element = E.DIV();
		element.classList.add('video-feed');
		var video = E.VIDEO();
		element.appendChild(video);
		videoFeed.addEventListener('gotoffer', onGotOffer);
		videoFeed.addEventListener('setlocalstream', onSetLocalStream);
		this.getElement = function(){return element;};
		function onGotOffer(e){
			var offer = e.offer;
			console.log('got offer');
		}
		function onSetLocalStream(e){
			console.log('setting stream');
			var stream = e.stream;
			attachMediaStream(video, stream);
			video.play();
		}
	};
	return _VideoFeedUI;
})();