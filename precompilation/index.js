const fs = require('fs');
const path = require('path');
const each = require('./../backend/each');
const publicFolder = path.join(__dirname , '../public');
const precompiledFolder = path.join(__dirname, '../precompiled');
const indexHtmlFile = path.join(publicFolder, 'index.html');
const mIndexHtmlFile = path.join(publicFolder, 'm.index.html');
const precompiledJsFileName = '/index_'+getUniqueString()+'.js';
const precompiledJsFile = path.join(precompiledFolder, precompiledJsFileName);
const precompiledMJsFileName = '/m.index_'+getUniqueString()+'.js';
const precompiledMJsFile = path.join(precompiledFolder, precompiledMJsFileName);
const precompiledCssFileName = '/styles_'+getUniqueString()+'.css';
const precompiledCssFile = path.join(precompiledFolder, precompiledCssFileName);
const precompiledMCssFileName = '/m.styles_'+getUniqueString()+'.css';
const precompiledMCssFile = path.join(precompiledFolder, precompiledMCssFileName);
const precompiledIndexFile = path.join(precompiledFolder, '/index.html');
const precompiledMIndexFile = path.join(precompiledFolder, '/m.index.html');
const jsFilesToCopyOver = ['/DetectMobileBrowsers.js'];
const foldersToCopyOver = ['/images'];
console.log('running');
emptyFolder(precompiledFolder, function(){
	each(jsFilesToCopyOver, function(jsFileToCopyOver){
		readFile(path.join(publicFolder, jsFileToCopyOver), function(data){
			writeFile(path.join(precompiledFolder, jsFileToCopyOver), data);
		});
	});
	each(foldersToCopyOver, function(folderToCopyOver){
		console.log(path.join(publicFolder, folderToCopyOver));
	copyFileSync(path.join(publicFolder, folderToCopyOver), path.join(precompiledFolder, folderToCopyOver));
	});
	concatenateScripts(indexHtmlFile, function(concatenatedScript){
			writeFile(precompiledJsFile, concatenatedScript);
			concatenateStyles(indexHtmlFile, function(concatenatedStyles){
				writeFile(precompiledCssFile, concatenatedStyles);
				createIndex(precompiledIndexFile, precompiledJsFileName, precompiledCssFileName, false);
			});
	});
	concatenateScripts(mIndexHtmlFile, function(concatenatedScript){
			//console.log(concatenatedScript);
			writeFile(precompiledMJsFile, concatenatedScript);
			concatenateStyles(mIndexHtmlFile, function(concatenatedStyles){
				writeFile(precompiledMCssFile, concatenatedStyles);
				createIndex(precompiledMIndexFile, precompiledMJsFileName, precompiledMCssFileName, true);
			});
	});
});
function createIndex(indexPath, jsFile, cssFile, isMobile){
	var str="<!DOCTYPE html>\n<html>\n<head>\n";
	if(!isMobile){
	str+="<script type='text/javascript' src='/DetectMobileBrowsers.js'></script>";
	}
	str+="<script type='text/javascript'>\nwindow.isMobile=";
	str+=isMobile;
	str+="\n</script>\n";
	str+="<link rel='stylesheet' href='";
	str+=cssFile;
	str+="'></link>\n</head>\n<body>\n<script type='text/javascript' src='";
	str+=jsFile;
	str+="'></script>\n</body>\n</html>";
	writeFile(indexPath, str);
}
function emptyFolder(directory, callback){
	fs.readdir(directory, (err, files) => {
	  if (err) throw err;
	  var n = files.length;
	  if(files.length<=0)
			  callback();
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

function copyFileSync( source, target ) {

    var targetFile = target;

    //if target is a directory a new file with the same name will be created
    if ( fs.existsSync( target ) ) {
        if ( fs.lstatSync( target ).isDirectory() ) {
            targetFile = path.join( target, path.basename( source ) );
        }
    }

    fs.writeFileSync(targetFile, fs.readFileSync(source));
}

function copyFolderRecursiveSync( source, target ) {
    var files = [];

    //check if folder needs to be created or integrated
    var targetFolder = path.join( target, path.basename( source ) );
    if ( !fs.existsSync( targetFolder ) ) {
        fs.mkdirSync( targetFolder );
    }

    //copy
    if ( fs.lstatSync( source ).isDirectory() ) {
        files = fs.readdirSync( source );
        files.forEach( function ( file ) {
            var curSource = path.join( source, file );
            if ( fs.lstatSync( curSource ).isDirectory() ) {
                copyFolderRecursiveSync( curSource, targetFolder );
            } else {
                copyFileSync( curSource, targetFolder );
            }
        } );
    }
}
function getUniqueString(){
	return String(new Date().getTime());
}