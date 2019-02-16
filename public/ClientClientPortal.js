var ClientClientPortal = new (function () {
	var _ClientClientPortal = function(params){
		EventEnabledBuilder(this);
		var self = this;
		
		
		
		
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