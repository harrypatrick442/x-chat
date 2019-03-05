function Video(callbacks, type)
{
    var self = this;
    var pc;
    var remoteStream;
    function createNewPC() {
        pc = new RTCPeerConnection(null);
        self.connected = true;//moved from inside onaddstream.
        pc.onaddstream = function (event) {
            //put in function to set div visible and size.
            attachMediaStream(remoteVideo, event.stream);
            remoteStream = event.stream;
        };
        pc.onremovestream = function (event) {
        };
        pc.oniceconnectionstatechange = function () {
            if (pc.iceConnectionState == 'disconnected') {
                self.disconnect();
            }
        };
        pc.onicecandidate = function gotIceCandidate(event) {
            if (event.candidate) {
                callbacks.send({webcam_type: 'ice', ice: event.candidate});
            }
        };
    }
    self.recievedIce = function (jObject) {
        if (jObject.ice != undefined) {
            pc.addIceCandidate(new RTCIceCandidate(jObject.ice));
        }
    };
    this.disconnect = function ()
    {
        console.log('closed');
        if (pc)
        {
            pc.close();
        }
    };
    this.connect = function ()
    {
        pc = undefined;
        createNewPC();
        Video.getWebcamPermission(function () {
            pc.addStream(Video.localStream);f
            console.log('ADDED STREEM');
            pc.createOffer(function (offero
            {
                pc.setLocalDescription(new RTCSessionDescription(offer), function ()
                {
                    callbacks.send({webcam_type: 'request', offer: offer});
                }, err.bind(null, 'connect 2'));
            }, err.bind(null, 'connect 1'));
        });
    };
    this.recievedOffer = function (jObject)
    {
        if (jObject.offer)
        {
            createNewPC();
            pc.setRemoteDescription(new RTCSessionDescription(jObject.offer), function ()
            {
                callbacks.ask(jObject.offer);
            }, err.bind(null, 'recievedOffer'));
        }
    };
    this.accept = function ()
    {
        Video.getWebcamPermission(function () {
            pc.addStream(Video.localStream);
            pc.createAnswer(function (answer)
            {
                    var rtcSessionDescription = new RTCSessionDescription(answer);
                    //This is where the problem occurs, around here. If there is a delay, its fine.
                    pc.setLocalDescription(rtcSessionDescription, function () {
                        callbacks.send({webcam_type: 'reply', accepted: true, answer: answer});
                        callbacks.connected();
                    }, err.bind(null, 'accept 2'));
            }, err.bind(null, 'accept 1'));
        });
    };
    this.decline = function ()
    {
        callbacks.send({webcam_type: 'reply', accepted: false});
    };
    this.accepted = function (jObject)
    {
        pc.setRemoteDescription(new RTCSessionDescription(jObject.answer), function () {
            callbacks.connected();
        }, err.bind(null, 'accepted'));
    };
    this.showMe = function (bool)
    {
        if (bool)
        {
            pc.addStream(Video.localStream);
        }
        else
        {
            pc.removeStream(Video.localStream);
        }
    };
}
Video.Type = {both: 'both', recieving: 'recieving', sending: 'sending'};
Video.mediaOptions = {audio: false, video: true};
Video.getWebcamPermission = function (funct) {
    if (Video.localStream)
    {
        if (funct)
        {
            funct();
        }
    }
    else
    {
        if (navigator.getUserMedia)
        {
            navigator.getUserMedia(Video.mediaOptions, function (stream)
            {
                Video.localStream = stream;
                if (funct)
                {
                    funct();
                }
            }, err.bind(null, 'getWebcamPermission'));
        }
    }
};
function err(source, message)
{
    console.log(source);
    console.log(message);
}