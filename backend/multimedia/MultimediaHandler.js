const fetch = require('node-fetch');
const path = require('path');
const WaitingForFileUpload_Queue = require('./WaitingForFileUpload_Queue');
const ImagesWaitingToBePushedIntoCloud_Queue = require('./ImagesWaitingToBePushedIntoCloud_Queue');
const FilesWaitingToBePushedIntoCloud_Queue = require('./FilesWaitingToBePushedIntoCloud_Queue');
const UploadedFilesWaitingForModeration_Queue = require('./UploadedFilesWaitingForModeration_Queue');
const Configuration = require('../Configuration');
const MIN_DELAY_BETWEEN_UPLOADS_MILLISECONDS =10000;
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
	
	const mapUserIdToLastUploadedUTCMilliseconds= new Map();
	waitingForFileUpload_Queue.addEventListener('userUploadedFile',
		handleUserUploadedFile);
	this.initialize=function(){
		return new Promise((resolve, reject)=>{
			uploadedFilesWaitingForModeration_Queue.load()
			.then(resolve).catch(reject);
		});
	};
	this.handleGetUserImagesForModerator=function(req, res){
		const {sessionId}=req.body;
		let jArrayUserImages;
		try{
			jArrayUserImages = uploadedFilesWaitingForModeration_Queue
				.getUserImagesJsonForClientModerator();
			res.json({userImages:jArrayUserImages});
		}
		catch(err){
			console.error(err);
			res.json({userImages:null, error:'An Error occured'});
		}
	};
	this.handleAcceptUserImage=function(req, res){
		const {sessionId}=req.body;
		getUserIdAndIsModeratorFromMainBackend(sessionId).then(({userId, moderator})=>{
			
		}).catch(reject);
	};
	this.handleRejectUserImage=function(req, res){
		const {sessionId}=req.body;
		
	};
	this.handleRequestUploadImage=function(req, res){
		const {sessionId, cropValues, fileName}=req.body;
		getUserIdAndValidateAllowedToUpload(sessionId)
		.then(({userId, allowedToUpload, 
			reasonNotAllowedToUpload})=>{
			if(!allowedToUpload){
				res.json(createErrorResponse(
					reasonNotAllowedToUpload));
				return;
			}
			const uniqueToken = waitingForFileUpload_Queue.queue({
				userId, cropValues, fileName});
			res.json(createUploadImageRequestAcceptedResponse(
				uniqueToken));
		}).catch((err)=>{
			console.log(err);
			createErrorResponse(null);
		});		
	};
	this.handleUploadImage=
		waitingForFileUpload_Queue.handleFileUpload;	
	this.handleModeration=function(req, res){
		res.sendFile(path.join(__dirname, '/../public/moderation.html'));
	};
	function getUserIdAndValidateAllowedToUpload(sessionId){
		return new Promise((resolve, reject)=>{
			getUserIdAndIsModeratorFromMainBackend(sessionId).then(
			({userId, moderator})=>{
				const resolveNotAllowed =(message)=>resolve({
						userId:userId, 
						allowedToUpload:false, 
						reasonNotAllowedToUpload:message
					});
				if(userId===undefined||userId===null){
					resolveNotAllowed('Invalid session');
					return;
				}
				const abusingMessage = checkIfUserIsAbusing(userId);
				if(abusingMessage!==null){
					resolveNotAllowed(abusingMessage);
					return;
				}
				resolve({
					userId:userId, 
					allowedToUpload:true
				});
			}).catch(reject);
		});
	}
	function getUserIdAndIsModeratorFromMainBackend(sessionId){
		return new Promise((resolve, reject)=>{
			fetch(Configuration.getBackendUrl()+'/get_user_id_from_session_id', 
				{
					method: 'POST', 
					body: JSON.stringify({
						sessionId
					}),
					headers: {'Content-Type': 'application/json'}
				}
			).then((response)=>{
				response.json().then(jObjectResponse=>{
					const { userId, moderator} = jObjectResponse;
					resolve({userId, moderator});
				}).catch(reject);
			}).catch(reject);
		});
	}
	function checkIfUserIsAbusing(userId){
		const lastUploadedUTCMilliseconds = mapUserIdToLastUploadedUTCMilliseconds.get(userId);
		if(lastUploadedUTCMilliseconds===undefined||lastUploadedUTCMilliseconds===null)
			return null;
		const maxTimeUTCMillisecondsLastUploadCanBe = new Date().getTime() - MIN_DELAY_BETWEEN_UPLOADS_MILLISECONDS;
		if(maxTimeUTCMillisecondsLastUploadCanBe>=lastUploadedUTCMilliseconds)
			return null;
		const intSecondsLeftToWait = 1+parseInt((
				MIN_DELAY_BETWEEN_UPLOADS_MILLISECONDS- (
					lastUploadedUTCMilliseconds - maxTimeUTCMillisecondsLastUploadCanBe
				)
				
			)/1000);
		return `Please wait an additional ${intSecondsLeftToWait} seconds before upload`;
	}
	function handleUserUploadedFile(e){
		mapUserIdToLastUploadedUTCMilliseconds.set(e.userId, new Date().getTime());
	}
	function createErrorResponse(reasonNotAllowedToUpload){
		if(reasonNotAllowedToUpload===undefined||reasonNotAllowedToUpload===null)
				reasonNotAllowedToUpload='Generic Error';
		return {error:reasonNotAllowedToUpload};
	}
	function createUploadImageRequestAcceptedResponse(uniqueToken){
		return {uniqueToken};
	}
})();