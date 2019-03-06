var ClientClientVideoAudio = new (function () {
	var _ClientClientVideoAudio = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var rtcPeerConnection;
		this.createOffer = function(callback){
			getUserPermission(function(result){
				if(!result.successful){
					callback&&callback(result);
					dispatchOfferFailed(result.error);
					return;
				}
				createNewPC()
				rtcPeerConnection.addStream(result.stream);
				dispatchLocalStream(result.stream);
				sendOffer();
			});
		};
		this.acceptedOffer = function(offer){
			console.log('ClientClientVideoAudio.acceptedOffer');
			getUserPermission(function(result){
				if(!result.successful){
					dispatchAcceptFailed(result.error);
					return;
				}
				createNewPC()
				rtcPeerConnection.addStream(result.stream);
				dispatchLocalStream(result.stream);
				setRemoteDescription(offer, function(){
					sendAccept();
				});
			});
		};
		this.incomingIceCandidate = function(candidate){
			console.log('incoming ice candidate');
			rtcPeerConnection&&rtcPeerConnection.addIceCandidate(candidate, function(){
				dispatchAddedIceCandidate(candidate);
			}, error);
		};
		this.incomingAccept = function(accept){
			console.log(accept);
			console.log('setting remote description a');
				console.log('set answer b');
			rtcPeerConnection.setRemoteDescription(accept, function(){
				console.log('set');
			}, 
			function(){
				console.error(error);
			});
		};
		function sendAccept(){
			createAccept(function(result){
				if(result.successful){
					dispatchSendAccept(result.answer);
					return;
				}
				dispatchAcceptFailed(result.error);
			});
		}
		function sendOffer(){
			createOffer(function(result){
				if(result.successful){
					dispatchSendOffer(result.offer);
					return;
				}
				dispatchOfferFailed(result.error);
			});
		}
		function setRemoteDescription(offer, callback){
			console.log('setting remote description b');
				console.log('set offer b');
			rtcPeerConnection.setRemoteDescription(offer, function(){
				callback();
			},function(){
				errorCallback(callback, error);
			});
		}
		function createOffer(callback){
			rtcPeerConnection.createOffer(function(offer){
				console.log('set offer a');
                rtcPeerConnection.setLocalDescription(offer,function(){
					callback({successful:true, offer:offer});
				},
				function(error){
					errorCallback(callback, error);
				});
			},
			function(error){
					errorCallback(callback, error);
			});
		}
		function createAccept(callback)
		{
            rtcPeerConnection.createAnswer(function (answer)
			{
				console.log('set answer a');
				rtcPeerConnection.setLocalDescription(answer, function(){
					callback({successful:true, answer:answer});
				},
				function(error){
					errorCallback(callback, error)
				});
			}, 
			function(error){
				errorCallback(callback, error)
			});
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
			console.error(new Error().stack);
		}
		function dispatchAcceptFailed(error){
			self.dispatchEvent({type:'acceptfailed', error:error});
		}
		function dispatchOfferFailed(error){
			self.dispatchEvent({type:'offerfailed', error:error});
		}
		function dispatchSendIce(candidate){
			self.dispatchEvent({type:'sendice', candidate:candidate});
		}
		function dispatchAddedIceCandidate(candidate){
			self.dispatchEvent({type:'addedicecandidate', candidate:candidate});
		}
		function dispatchAllIceCandidatesSent(){
			self.dispatchEvent({type:'allicecandidatessent'});
		}
		function dispatchLocalStream(stream){
			console.log('dispatching local stream');
			self.dispatchEvent({type:'localstream', stream:stream});
		}
		function dispatchAddRemoteStream(stream){
			console.log('dispatchAddRemoteStream');
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
			console.log('ON ADD STREAM');
			dispatchAddRemoteStream(e.stream);
		}
		function onRemoveStream(e){
			dispatchRemoveRemoteStream(e.stream);
		}
		function onIceConnectionStateChange(e){
			console.log('onIceConnectionStateChange');
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
			console.log('onicecandidate');
			console.log(e);
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
			},
			function(error){
					errorCallback(callback, error)
			});
		}
	};
	return _ClientClientVideoAudio;
})();