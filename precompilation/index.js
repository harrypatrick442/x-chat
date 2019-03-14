const fs = require('fs');
const path = require('path');
const each = require('./../backend/each');
const publicFolder = path.join(__dirname , '../public');
const precompiledFolder = path.join(__dirname, '../precompiled');
const indexHtmlFile = path.join(publicFolder, 'index.html');
const mIndexHtmlFile = path.join(publicFolder, 'm.index.html');
const precompiledJsFile = path.join(precompiledFolder, '/index_'+getUniqueString()+'.js');
const precompiledMJsFile = path.join(precompiledFolder, '/m.index_'+getUniqueString()+'.js');
const precompiledCssFile = path.join(precompiledFolder, '/styles_'+getUniqueString()+'.css');
const precompiledMCssFile = path.join(precompiledFolder, '/m.styles_'+getUniqueString()+'.css');
emptyFolder(precompiledFolder, function(){
	concatenateScripts(indexHtmlFile, function(concatenatedScript){
			writeFile(precompiledJsFile, concatenatedScript);
			concatenateStyles(indexHtmlFile, function(concatenatedStyles){
				writeFile(precompiledCssFile, concatenatedStyles);
			})
	});
	concatenateScripts(mIndexHtmlFile, function(concatenatedScript){
			//console.log(concatenatedScript);
			writeFile(precompiledMJsFile, concatenatedScript);
			concatenateStyles(mIndexHtmlFile, function(concatenatedStyles){
				writeFile(precompiledMCssFile, concatenatedStyles);
			})
	});
});
function emptyFolder(directory, callback){
	fs.readdir(directory, (err, files) => {
	  if (err) throw err;
	  var n = files.length;
	  for (const file of files) {
		fs.unlink(path.join(directory, file), err => {
		  if (err) throw err;
		  n--;
		  if(n<=0)
			  callback();
		});
	  }
	});
}
function concatenateScripts(htmlFile, callback){
	var regExp = new RegExp('type *= *[\'|"]text/javascript[\'|"] *src *= *[\'|"](.+\.js)[\'|"] *> *</script *>','g');
	concatenate(htmlFile, regExp, callback);
}
function concatenateStyles(htmlFile, callback){
	var regExp = new RegExp('href *= *[\'|"](.+\.css).*\'> *</link *>','g');
	concatenate(htmlFile, regExp, callback);
}
function concatenate(htmlFile, regExp, callback){
	getFilePathsFromHtml(regExp, htmlFile, function(scriptFilePaths){
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
function getFilePathsFromHtml(regExp, filePath, callback){
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
function getUniqueString(){
	return String(new Date().getTime());
}