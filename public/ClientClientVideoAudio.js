var ClientClientVideoAudio = new (function () {
	var _ClientClientVideoAudio = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var rtcPeerConnection;
		this.createOffer = function(callback){
			getUserPermission(function(result){
				if(!result.successful){
					callback&&callback(result);
					return;
				}
				dispatchLocalStream(result.stream);
				sendOffer(createNewPC());
			});
		};
		this.acceptedOffer = function(offer){
			console.log('ClientClientVideoAudio.acceptedOffer');
			getUserPermission(function(result){
				if(!result.successful){
					dispatchAcceptFailed(result.error);
					return;
				}
				dispatchLocalStream(result.stream);
				console.log('ClientClientVideoAudio.dispatching local stream');
				sendAccept(createNewPC());
			});
		};
		this.incomingIceCandidate = function(candidate){
			rtcPeerConnection&&rtcPeerConnection.addIceCandidate(candidate, function(){
				dispatchAddedIceCandidate(candidate);
			}, error);
		};
		function sendAccept(rtcPeerConnection){
			createAccept(rtcPeerConnection, function(result){
				if(result.successful){
					dispatchSendAccept(result.answer);
					return;
				}
				dispatchAcceptFailed(result.error);
			});
		}
		function sendOffer(rtcPeerConnection){
			createOffer(rtcPeerConnection, function(result){
				if(result.successful){
					dispatchSendOffer(result.offer);
					return;
				}
				dispatchOfferFailed(result.error);
			});
		}
		function createOffer(rtcPeerConnection, callback){
			rtcPeerConnection.createOffer(function(offer){
                rtcPeerConnection.setLocalDescription(new RTCSessionDescription(offer),function(){
					callback({successful:true, offer:offer});
				}, errorCallback.bind(null, callback));
			}, errorCallback.bind(null, callback));
		}
		function createAccept(tctPeerConnection, callback)
		{
            rtcPeerConnection.createAnswer(function (answer)
            {
				rtcPeerConnection.setLocalDescription(new RTCSessionDescription(answer), function(){
					callback({successful:true, answer:answer});
				}, errorCallback.bind(null, callback));
            }, errorCallback.bind(null, callback));
		}
		function clearOldPC(){
			if(!rtcPeerConnection)return;
			rtcPeerConnection.close();	
		}
		function createNewPC() {
			clearOldPC();
			rtcPeerConnection = new RTCPeerConnection(null);
			rtcPeerConnection.onaddstream = onAddStream;
			rtcPeerConnection.onremovestream = onRemoveStream;
			rtcPeerConnection.oniceconnectionstatechange = onIceConnectionStateChange;
			rtcPeerConnection.onicecandidate = onIceCandidate;
			return rtcPeerConnection;
		}
		function errorCallback(callback, err){
			error(err);
			callback({successful:false, error:err});
		}
		function error(err){
			console.error(err.message?err.message:err);
		}
		function dispatchAcceptFailed(error){
			self.dispatchEvent({type:'acceptfailed', error:error, message:error?error.message:undefined});
		}
		function dispatchOfferFailed(error){
			self.dispatchEvent({type:'offerfailed', error:error});
		}
		function dispatchSendIce(ice){
			self.dispatchEvent({type:'sendice', candidate:candidate});
		}
		function dispatchAddedIceCandidate(candidate){
			self.dispatchEvent({type:'addedicecandidate', candidate:candidate});
		}
		function onAllIceCandidatesSent(){
			self.dispatchEvent({type:'allicecandidatessent'});
		}
		function dispatchLocalStream(stream){
			console.log('dispatching local stream');
			self.dispatchEvent({type:'localstream', stream:stream});
		}
		function dispatchAddRemoteStream(stream){
			self.dispatchEvent({type:'addremotestream', stream:stream});
		}
		function dispatchRemoveRemoteStream(stream){
			self.dispatchEvent({type:'removeremotestream', stream:stream});
		}
		function dispatchSendOffer(offer){
			self.dispatchEvent({type:'sendoffer', offer:offer});
		}
		function dispatchSendAccept(accept){
			self.dispatchEvent({type:'sendaccept', accept:accept});
		}
		function dispatchEnded(iceConnectionState){
			self.dispatchEvent({type:'ended', iceConnectionState:iceConnectionState});
		}
		function onAddStream(e){
			dispatchAddStream(e.stream);
		}
		function onRemoveStream(e){
			dispatchRemoveRemoteStream(e.stream);
		}
		function onIceConnectionStateChange(e){
			var iceConnectionState = rtcPeerConnection.iceConnectionState;
			switch(iceConnectionState){
				case 'failed':
				case 'disconnected':
				case 'closed':
					dispatchEnded(iceConnectionState);
				break;
			}
		}
		function onIceCandidate(e){
			var candidate=e.candidate;
			if (candidate != null) {
				dispatchSendIce(candidate);
				return;
			}
			dispatchAllIceCandidatesSent();
		}
		function getUserPermission(callback){
			var constraints =  {audio: false,  video: true};
			navigator.getUserMedia(constraints, function(stream) {
				console.log('GOT USRE MEDIA');
				callback({successful:true, stream:stream});
			}, errorCallback.bind(null, callback));
		}
	};
	return _ClientClientVideoAudio;
})();