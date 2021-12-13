
const WaitingForFileUpload_Queue = require('./WaitingForFileUpload_Queue');
const FilesWaitingToBePushedIntoCloud_Queue = require('./FilesWaitingToBePushedIntoCloud_Queue');
const UploadedFilesWaitingForModeration_Queue = require('./UploadedFilesWaitingForModeration_Queue');
module.exports = new (function(){
	const waitingForUploadQueue = new WaitingForUploadQueue();
	this.handleUploadImageRequest=function(req){
		return new Promise((resolve, reject)=>{
			const {sessionId}=req.body;
			const {userId, allowedToUpload, reasonNotAllowedToUpload} = 
				getUserIdAndValidateAllowedToUpload(sessionId);
			if(userId===null)
			{
				resolve(createInvalidUserResponse());
				return;
			}
			if(!allowedToUpload){
				resolve(createNotAllowedToUploadResponse(
					reasonNotAllowedToUpload));
				return;
			}
			const queueToken = waitingForUploadQueue.queue({userId});
			resolve(createUploadImageRequestAcceptedResponse(queueToken));
		});
	};
	this.handleImageUpload=function(req){
		
	};
	function getUserIdAndValidateAllowedToUpload(){
		
	}
	function createInvalidUserResponse(){
		
	}
	function createNotAllowedToUploadResponse(){
		
	}
	function createUploadImageRequestAcceptedResponse(){
		
	}
})();