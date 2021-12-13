var uuid = require('uuid');
module.exports = function WaitingForFileUploadQueue({
	uploadedFileHandler
}){
	const mapUploadTokenToUserId = new Map();
	this.queue=function({userId}){
		const uploadToken = createNewUniqueUploadToken();
		mapUploadTokenToUserId.set(uploadToken, userId);
		return uploadToken;
	};
	this.handleFileUpload=function(req){
		
	};
	function createNewUniqueUploadToken(){
		return uuid.v4();
	}
}