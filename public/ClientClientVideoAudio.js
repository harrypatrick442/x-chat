var ClientClientVideoAudio = new (function () {
	var _ClientClientPortal = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var rtcPeerConnection;
		this.start = function(callback){
			getUserPermission(function(result){
				(!result.successful)&&callback(result);
				
			});
		};
		function createNewPC() {
			rtcPeerConnection = new RTCPeerConnection(null);
			self.connected = true;//moved from inside onaddstream.
			rtcPeerConnection.onaddstream = onAddStream;
			rtcPeerConnection.onremovestream = onRemoveStream;
			rtcPeerConnection.oniceconnectionstatechange = onIceConnectionStateChange;
			rtcPeerConnection.onicecandidate = onIceCandidate;
		}
		function onAddStream(e){
			var stream = e.stream;
			attachMediaStream(remoteVideo, stream);
			remoteStream = stream;
		}
		function onRemoveStream(e){
			
		}
		function onIceConnectionStateChange(e){
			if (pc.iceConnectionState == 'disconnected') {
				
			}
		}
		function onIceCandidate(e){
			var candidate=e.candidate;
			if (candidate != null) {
				
			}
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