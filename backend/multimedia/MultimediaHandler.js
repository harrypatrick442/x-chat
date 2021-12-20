
const WaitingForFileUpload_Queue = require('./WaitingForFileUpload_Queue');
const ImagesWaitingToBePushedIntoCloud_Queue = require('./ImagesWaitingToBePushedIntoCloud_Queue');
const FilesWaitingToBePushedIntoCloud_Queue = require('./FilesWaitingToBePushedIntoCloud_Queue');
const UploadedFilesWaitingForModeration_Queue = require('./UploadedFilesWaitingForModeration_Queue');
module.exports = new (function(){
	const filesWaitingToBePushedIntoCloud_Queue =
		new FilesWaitingToBePushedIntoCloud_Queue({
			
	});
	const imagesWaitingToBePushedIntoCloud_Queue = new ImagesWaitingToBePushedIntoCloud_Queue({});
	const uploadedFilesWaitingForModeration_Queue= 
		new UploadedFilesWaitingForModeration_Queue({
			moderatedFileHandler:filesWaitingToBePushedIntoCloud_Queue
	});
	const waitingForFileUpload_Queue = new WaitingForFileUpload_Queue({
		uploadedFileHandler:uploadedFilesWaitingForModeration_Queue
	});
	this.handleRequestUploadImage=function(req, res){
		return new Promise((resolve, reject)=>{
			const {sessionId}=req.body;
			getUserIdAndValidateAllowedToUpload(sessionId)
			.then(({userId, allowedToUpload, 
				reasonNotAllowedToUpload})=>{
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
				const queueToken = waitingForFileUpload_Queue.queue({userId});
				resolve(createUploadImageRequestAcceptedResponse(queueToken));

				}).catch(reject);		
		});
	};
	this.handleUploadImage=function(req, res){
		console.log('got req');
		console.log(req);
	};
	function getUserIdAndValidateAllowedToUpload(){
		return new Promise((resolve, reject)=>{
			
		});
	}
	function createInvalidUserResponse(){
		
	}
	function createNotAllowedToUploadResponse(){
		
	}
	function createUploadImageRequestAcceptedResponse(){
		
	}
})();