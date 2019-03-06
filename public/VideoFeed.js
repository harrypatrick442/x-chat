var VideoFeed = (function(){
	var _VideoFeed = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var getOfferTemplate = params.getOfferTemplate;
		var getAcceptTemplate = params.getAcceptTemplate;
		var getIceCandidateTemplate = params.getIceCandidateTemplate;
		var send = params.send;
		var clientClientVideoAudio = new ClientClientVideoAudio({});
		var started=false;
		var stream;
		this.start = function(){
			stop();
			clientClientVideoAudio.createOffer(function(result){
				if(result.successful)
					started=true;
			});
		};
		this.acceptedOffer = clientClientVideoAudio.acceptedOffer;
		this.incomingOffer = function(wrappedOffer){
			clientClientVideoAudio.incomingOffer(wrappedOffer.offer);
			dispatchGotOffer(wrappedOffer);
		};
		this.incomingAccept = clientClientVideoAudio.incomingAccept;
		this.incomingIceCandidate = clientClientVideoAudio.incomingIceCandidate;
		this.stop = function(){
			stop();
			dispatchStopped();
		};
		clientClientVideoAudio.addEventListener('acceptfailed', onAcceptFailed);
		clientClientVideoAudio.addEventListener('offerfailed', onOfferFailed);
		clientClientVideoAudio.addEventListener('sendice', onSendIce);
		clientClientVideoAudio.addEventListener('allicesent', onAllIceCandidatesSent);
		clientClientVideoAudio.addEventListener('localstream', onLocalStream);
		clientClientVideoAudio.addEventListener('addremotestream', onAddRemoteStream);
		clientClientVideoAudio.addEventListener('remoteremotestream', onRemoveRemoteStream);
		clientClientVideoAudio.addEventListener('sendoffer', onSendOffer);
		clientClientVideoAudio.addEventListener('sendaccept', onSendAccept);
		clientClientVideoAudio.addEventListener('ended', onEnded);
		function onOfferFailed(e){
			dispatchGeneralFailure(e);
			dispatchOfferFailed(e);
		}
		function onAcceptFailed(e){
			console.log(new Error().stack);
			console.log(e);
			dispatchGeneralFailure(e);
			dispatchAcceptFailed(e);
		}
		function onSendIce(e){
			sendIce(e.candidate);
		}
		function onAllIceCandidatesSent(){
			
		}
		function onLocalStream(e){
			dispatchSetLocalStream(e.stream);
		}
		function onEnded(e){
			dispatchStopped();
		}
		function onAddRemoteStream(e){
			console.log('onAddRemoteStream');
			closeCurrentStream();
			stream = e.stream;
			dispatchSetRemoteStream(stream);
		}
		function onRemoveRemoteStream(e){
			closeCurrentStream();
			dispatchSetRemoteStream();
		}
		function dispatchGotOffer(wrappedOffer){
			self.dispatchEvent({type:'gotoffer', wrappedOffer:wrappedOffer, offer:wrappedOffer.offer});
		}
		function dispatchStopped(){
			self.dispatchEvent({type:'stopped'});
		}
		function dispatchSetRemoteStream(stream){
			self.dispatchEvent({type:'setremotestream', stream:stream});
		}
		function dispatchSetLocalStream(stream){
			self.dispatchEvent({type:'setlocalstream', stream:stream});
		}
		function dispatchLocalStream(stream){
			self.dispatchEvent(e);
		}
		function dispatchGeneralFailure(e){
			self.dispatchEvent({type:'generalfailure', error:e.error});
		}
		function dispatchOfferFailed(e){
			self.dispatchEvent({type:'offerfailed', error:e.error});
		}
		function dispatchAcceptFailed(e){
			self.dispatchEvent({type:'acceptfailed', error:e.error});
		}
		function onSendOffer(e){
			sendOffer(e.offer);
		}
		function onSendAccept(e){
			sendAccept(e.accept);
		}
		function sendOffer(offer){
			var msg = getOfferTemplate();
			msg.offer = offer;
			console.log(msg);
			send(msg);
		}
		function sendAccept(accept){
			var msg = getAcceptTemplate();
			msg.accept = accept;
			console.log( msg);
			send(msg);
		}
		function sendIce(candidate){
			var msg = getIceCandidateTemplate();
			msg.candidate=candidate;
			console.log(msg);
			send(msg);
		}
		function stop(){
			closeCurrentStream();
		}
		function closeCurrentStream(){
			stream&&stream.getTracks().forEach(function(track) { track.stop(); })
			stream = null;
		}
	};
	return _VideoFeed;
})();