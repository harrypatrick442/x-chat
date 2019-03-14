var fs = require('fs');
var path = require('path');
var fs = require('fs');
var each = require('./../backend/each');
var publicFolder = path.join(__dirname , '../public');
var precompiledFolder = path.join(__dirname, '../precompiled');
var indexHtmlFile = path.join(publicFolder, 'index.html');
var mIndexHtmlFile = path.join(publicFolder, 'm.index.html');
var precompiledJsFile = path.join(precompiledFolder, '/index.js');
concatenateScripts(indexHtmlFile, function(concatenatedScript){
		//console.log(concatenatedScript);
		writeFile(precompiledJsFile, concatenatedScript);
});
function concatenateScripts(htmlFile, callback){
	getScriptFilePathsFromHtml(htmlFile, function(scriptFilePaths){
		var concatenatedScript='';
		var i=0;
		function next(){
			var scriptFilePath = scriptFilePaths[i];
			if(!scriptFilePath){
				callback(concatenatedScript);
				return;
			}
			scriptFilePath = path.join(publicFolder, scriptFilePath);
			readFile(scriptFilePath, function(data){
				concatenatedScript+=data;
				i++;
				next();
			});
		}
		next();
	});
}
function writeFile(path, data){
	fs.writeFile(path, data, function(err) {
		if(err) {
			return console.log(err);
		}
	}); 
}
function getScriptFilePathsFromHtml(filePath, callback){
	var regExp = new RegExp('type *= *[\'|"]text/javascript[\'|"] *src *= *[\'|"](.+\.js)[\'|"] *> *</script *>','g');
	readFile(filePath, function(data){
			var list =[];
			var m;
			do {
				m = regExp.exec(data);
				if (m) {
					list.push(m[1]);
				}
			} while (m);
			callback(list);
	});
}
function readFile(filePath, callback){
	fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
		if (!err) {
			callback(data);
		} else {
			console.log(err);
	}
	});
}