var VideoFeedUI = (function(){
	var _VideoFeedUI = function(videoFeed){
		var self = this;
		videoFeed.addEventListener('gotoffer', onGotOffer);
		
		function onGotOffer(e){
			var offer = e.offer;
			console.log('got offer');
		}
	};
	return _VideoFeedUI;
})();