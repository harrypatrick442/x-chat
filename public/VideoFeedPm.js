var VideoFeedPm = (function(){
	var _VideoFeedPm = function(params){
		var roomId = params.roomId;
		var userTo = params.userTo;
		var getSessionId=params.getSessionId;
		var send = params.send;
		var videoFeed = new VideoFeed({getOfferTemplate:getOfferTemplate, getAcceptTemplate:getAcceptTemplate, getIceCandidateTemplate:getIceCandidateTemplate,
			send:send});
		this.acceptedOffer = videoFeed.acceptedOffer;
		this.incomingAccept = videoFeed.incomingAccept;
		this.iceCandidate = videoFeed.iceCandidate;
		function getOfferTemplate(){
			return {
				type:'pm_video_offer',
				userToId:userTo.getId(),
				sessionId:getSessionId()
			};
		}
		function getAcceptTemplate(){
			return {
				type:'pm_video_accept',
				userToId:userTo.getId(),
				sessionId:getSessionId()
			};
		}
		function getIceCandidateTemplate(){
			return {
				type:'pm_video_ice_candidate',
				userToId:userTo.getId(),
				sessionId:getSessionId()
			};
		}
		return videoFeed;
	};
	return _VideoFeedPm;
})();