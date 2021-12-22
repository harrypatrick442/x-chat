var uuid = require('uuid');
const WaitingForFileUpload_QueueEntry = require('./WaitingForFileUpload_QueueEntry');
const EventEnabledBuilder = require('../EventEnabledBuilder');
const ImageDataURI = require('image-data-uri');
const FilePaths = require('../FilePaths');
module.exports = function WaitingForFileUpload_Queue({
	uploadedFileHandler
}){
	const self = this;
	EventEnabledBuilder(this);
	let nFileUploadSinceStart=0;
	const mapUploadTokenToEntry = new Map();
	this.queue=function({userId, cropValues, fileName}){
		const uploadToken = createNewUniqueUploadToken();
		mapUploadTokenToEntry.set(uploadToken, 
			new WaitingForFileUpload_QueueEntry({
				userId,
				cropValues,
				fileName
			})
		);
		return uploadToken;
	};
	this.handleFileUpload=function(req, res){
		console.log('handleFileUpload');
		const { uniqueToken} = req.query;
		const entry = mapUploadTokenToEntry.get(uniqueToken);
		if(!entry){
			res.json({error:'Invalid uniqueToken'});
			return;
		}
		const filePathToSaveImage = getFilePathToSaveImage(
			entry.getFileName());
		ImageDataURI.outputFile(req.body, filePathToSaveImage)
		.then((filePathWithExtension)=>{
			console.log('saved');
			dispatchUserUploadedFile(userId);
			res.json({});
		})
		.catch((err)=>{
			res.json({error:'Internal error'});
			return;
		});
	};
	function getFilePathToSaveImage(fileName){
		const fileNameWithoutExtension = fileName.split('.')[0];
		const milliseconds = new Date().getTime();
		const fileNameToSaveAsWithoutExtension = `${fileNameWithoutExtension}_${milliseconds}_${nFileUploadSinceStart++}`;
		const filePath = FilePaths.getUploadedImagesDirectory()
			+fileNameToSaveAsWithoutExtension;
		return filePath;
	}
	function createNewUniqueUploadToken(){
		return uuid.v4();
	}
	function dispatchUserUploadedFile(userId){
		self.dispatchEvent({type:'userUploadedFile', userId});
	}
}