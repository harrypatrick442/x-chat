var VideoFeed = (function(){
	var _VideoFeed = function(params){
		var self = this;
		var getOfferTemplate = params.getOfferTemplate;
		var getAcceptTemplate = params.getAcceptTemplate;
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
		this.stop = function(){
			stop();
			dispatchStopped();
		};
		clientClientVideoAudio.addEventListener('acceptfailed', onGeneralFailure);
		clientClientVideoAudio.addEventListener('sendice', onSendIce);
		clientClientVideoAudio.addEventListener('allicesent', onAllIceCandidatesSent);
		clientClientVideoAudio.addEventListener('localstream', onLocalStream);
		clientClientVideoAudio.addEventListener('addremotestream', onAddRemoteStream);
		clientClientVideoAudio.addEventListener('remoteremotestream', onRemoteRemoteStream);
		clientClientVideoAudio.addEventListener('sendoffer', onSendOffer);
		clientClientVideoAudio.addEventListener('sendaccept', onSendAccept);
		clientClientVideoAudio.addEventListener('ended', onEnded);
		function onGeneralFailure(){
			
		}
		function onSendIce(){
			
		}
		function onAllIceSent(){
			
		}
		function onLocalStream(e){
			dispatchSetLocalStream(e.stream);
		}
		function onEnded(e){
			dispatchStopped();
		}
		function onAddRemoteStream(e){
			closeCurrentStream();
			stream = e.stream;
			dispatchSetRemoteStream(stream);
		}
		function onRemoveRemoteStream(e){
			closeCurrentStream();
			dispatchSetRemoteStream();
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
		function onAddRemoteStream(e){
			
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
			send(msg);
		}
		function sendAccept(accept){
			var msg = getAcceptTemplate();
			msg.accept = accept;
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