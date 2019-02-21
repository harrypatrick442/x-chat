var VideoFeedUI = (function(){
	var _VideoFeedUI = function(videoFeed){
		var self = this;
		var element = E.DIV();
		element.classList.add('video-feed');
		videoFeed.addEventListener('gotoffer', onGotOffer);
		this.getElement = function(){return element;};
		function onGotOffer(e){
			var offer = e.offer;
			console.log('got offer');
		}
	};
	return _VideoFeedUI;
})();