const throwArgumentError = require('../errors/throwArgumentError');
module.exports = function WaitingForFileUpload_QueueEntry({
	userId, cropValues, fileName
}){
	if(userId===undefined||userId===null)
		throwArgumentError('userId', userId);
	if(userId===undefined||userId===null)
		throwArgumentError('cropValues', cropValues);
	if(fileName===undefined||fileName===null)
		throwArgumentError('fileName', fileName);
	this.getUserId=function(){
		return userId;
	};
	this.getCropValues=function(){
		return cropValues;
	};
	this.getFileName=function(){
		return fileName;
	};
}