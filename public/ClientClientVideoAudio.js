var ClientClientVideoAudio = new (function () {
	var _ClientClientPortal = function(params){
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
			getUserPermissions(function(result){
				if(!result){
					dispatchRejectedOffer();
					return;
				}
				dispatchLocalStream(result.stream);
				sendAnswer(createNewPC());
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
					dispatchSendOffer(offer);
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
			console.log(err);
		}
		function dispatchAcceptFailed(error){
			self.dispatchEvent({type:'acceptfailed', error:error});
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
		function dispatchAllIceSent()
			self.dispatchEvent({type:'allicesent'});
		}
		function dispatchLocalStream(stream){
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
		function onAddStream(e){
			dispatchAddStream(e.stream);
		}
		function onRemoveStream(e){
			dispatchRemoveRemoteStream(e.stream);
		}
		function onIceConnectionStateChange(e){
			if (pc.iceConnectionState == 'disconnected') {
				
			}
		}
		function onIceCandidate(e){
			var candidate=e.candidate;
			if (candidate != null) {
				dispatchSendIce(candidate);
				return;
			}
			dispatchAllIceSent();
		}
		function getUserPermission(callback){
			var constraints =  {audio: true,  video: true};
			navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
				callback({successful:true, stream:stream});
			}).catch(function(error) {
				console.log('Error in getting stream', error);
				callback({successful:false, error:error});
			});
		}
	};
	return _ClientClientPortal;
})();