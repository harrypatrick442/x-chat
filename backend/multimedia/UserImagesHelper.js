const throwArgumentError = require('../errors/throwArgumentError');
const path = require('path');
const fs = require('fs');
module.exports = new (function UserImagesHelper(){
	this.saveToJSONFile=function(userImages, filePath, throwError){
		if(throwError===undefined)throwError=true;
		return new Promise((resolve, reject)=>{
			const jArrayUserImages = userImages
				.map(entry=>entry.toJSON());
			fs.writeFile(filePath, JSON.stringify(jArrayUserImages),
				(err)=>{
					if(err){
						if(!throwError){
							return resolve();
						}
						return reject(err);
					}
					resolve();
			});
		});
	};
	this.loadFromJSONFile=function(filePath, throwError){
		if(throwError===undefined)throwError=true;
		return new Promise((resolve, reject)=>{
			fs.readFile(filePath, (content, err)=>{
				if(err){
					if(!throwError){
						return resolve();
					}
					return reject(err);
				}
				const jArrayUserImages = JSON.parse(content);
				entries = jArrayUserImages.map(jObjectUserImage=>UserImage
					.fromJSON(jObjectUserImage));
				resolve();
			});
		});
	};
})();