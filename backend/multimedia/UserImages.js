const throwArgumentError = require('../errors/throwArgumentError');
const UserImagesHelper = require('./UserImagesHelper');
const UserImages = function({filePath, throwErrorLoadingSaving}){
	let entries =[];
	const self = this;
	this.getEntries = function(){
		return entries;
	};
	this.add = function(userImage){
		entries.push(userImage);
	};
	this.remove=function(userImage){
		const index = entries.indexOf(userImage);
		if(index<0)return;
		entries.splice(index, 1);
	};
	this.removeAll=function(userImages){
		entries.forEach(self.remove);
	};
	this.getForUserId=function(userId){
		return entries.filter(entry=>entry.getUserId()===userId);
	};
	this.save=function(){
		return UserImagesHelper.saveToJSONFile(
			entries, filePath, throwErrorLoadingSaving
		);
	};
	this.load=function(){
		return new Promise((resolve, reject)=>{
			UserImagesHelper.loadFromJSONFile(filePath,
				throwErrorLoadingSaving)
				.then((userImages)=>{
					entries=userImages;
					resolve();
				})
				.catch(reject);
		});
	};
}
module.exports = UserImages;