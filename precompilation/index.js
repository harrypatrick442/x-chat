const fs = require('fs');
const fsExtra = require('fs-extra');
const path = require('path');
const tmp = require('tmp');
const each = require('./../backend/each');
const ClosureCompiler = require('google-closure-compiler').jsCompiler;
console.log(ClosureCompiler.CONTRIB_PATH); // absolute path to the contrib folder which contains externs
const publicFolder = path.join(__dirname , '../public');
const precompiledFolder = path.join(__dirname, '../precompiled/');
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
const debuggingJs = path.join(precompiledFolder, '/debugging.js');
const jsFilesToCopyOver = ['/DetectMobileBrowsers.js'];
const foldersToCopyOver = ['/images/', '/emoji/'];
const toPrecompileIndividuallyThenInclude = [{'/../public/Title', compilation_level:'ADVANCED', compiledFileName:'Title'}];
const closureCompiler = new ClosureCompiler({
  compilation_level: 'SIMPLE',
  language_in:'ECMASCRIPT6',
  warning_level:'QUIET',
});
emptyFolder(precompiledFolder, function(){
	each(jsFilesToCopyOver, function(jsFileToCopyOver){
		readFile(path.join(publicFolder, jsFileToCopyOver), function(data){
				writeFile(path.join(precompiledFolder, jsFileToCopyOver), data);
		});
	});
	copyFolders(function(){
		concatenateScripts(indexHtmlFile, function(concatenatedScript){
			compress(concatenatedScript, function(compressedConcatenatedScript){
				writeFile(precompiledJsFile, compressedConcatenatedScript);
				concatenateStyles(indexHtmlFile, function(concatenatedStyles){
					writeFile(precompiledCssFile, concatenatedStyles);
					console.log('desktop javascript compression ratio is: '+compressedConcatenatedScript.length/concatenatedScript.length);
					createIndex(precompiledIndexFile, precompiledJsFileName, precompiledCssFileName, false);
				});
			});
		});
		concatenateScripts(mIndexHtmlFile, function(concatenatedScript){
			compress(concatenatedScript, function(compressedConcatenatedScript){
				writeFile(precompiledMJsFile, compressedConcatenatedScript);
				concatenateStyles(mIndexHtmlFile, function(concatenatedStyles){
					writeFile(precompiledMCssFile, concatenatedStyles);
						console.log('mobile javascript compression ratio is: '+compressedConcatenatedScript.length/concatenatedScript.length);
					createIndex(precompiledMIndexFile, precompiledMJsFileName, precompiledMCssFileName, true);
				});
			});
		});
	});
});
function copyFolders(callback){
	var pending=foldersToCopyOver.length;
	if(!pending)callback();
	each(foldersToCopyOver, function(folderToCopyOver){
		fsExtra.copy(path.join(publicFolder, folderToCopyOver), path.join(precompiledFolder, folderToCopyOver), err =>{
		  if(err) return console.error(err);
		  if(!--pending)callback();
		  console.log('copied '+folderToCopyOver);
		});
	});
}
function compress(data, callback){
	writeFile(debuggingJs, data);
	const compilerProcess = closureCompiler.run([{
		 path: 'file-one.js',
		 src:data,
		 sourceMap: null
		}], (exitCode, stdOut, stdErr) => {
			if(stdErr)throw stdErr;
			callback(stdOut[0].src);
		});
}
function createIndex(indexPath, jsFile, cssFile, isMobile){
	var str="<!DOCTYPE html>\n";
	if(isMobile)
		str+="<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />";
	str+="<html>\n<head>\n";
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
	var list = fs.readdirSync(directory);
	var length = list.length;
	if(length<1)callback();
	var i=0;
	var next;
	next = function(){
		if(i>=length)
		{
			callback();
			return;
		}
		var curPath = directory + "/" + list[i++];
		if(fs.lstatSync(curPath).isDirectory()) { // recurse
			emptyFolder(curPath, next);
			fs.rmdirSync(curPath);
		} else { // delete file
			fs.unlinkSync(curPath);next();
			
		}
	};
	next();
}


function getFilesAndFolders(dir, done, subfolders) {
  var results = [];
  fs.readdir(dir, function(err, list) {
    if (err) return done(err);
    var pending = list.length;
    if (!pending) return done(null, results);
    list.forEach(function(file) {
      file = path.resolve(dir, file);
      fs.stat(file, function(err, stat) {
        if (stat && stat.isDirectory()&&subfolders) {
          walk(file, function(err, res) {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          results.push(file);
          if (!--pending) done(null, results);
        }
      });
    });
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
	fs.writeFileSync(path, data);
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
console.log(source);
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