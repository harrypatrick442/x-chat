const fs = require('fs');
const fsExtra = require('fs-extra');
const path = require('path');
const tmp = require('tmp');
const each = require('./../../backend/each');
const ClosureCompiler = require('google-closure-compiler').jsCompiler;
console.log(ClosureCompiler.CONTRIB_PATH); // absolute path to the contrib folder which contains externs
const publicFolder = path.join(__dirname , '/../../public');
const precompiledJsFileName = '/Title.js';
const precompiledJsFile = path.join(publicFolder, precompiledJsFileName);
const debugFileName ='debug.js';
const thisFolder = __dirname;
const folderToPrecompile = path.join(thisFolder, '/../');
const debugFile = path.join(thisFolder, debugFileName);
const closureCompiler = new ClosureCompiler({
  compilation_level: 'ADVANCED',
  language_in:'ECMASCRIPT6',
  warning_level:'QUIET',
});

concatenateScripts(function(concatenatedScript){
	writeFile(debugFile, concatenatedScript);
	compress(concatenatedScript, function(compressedConcatenatedScript){
		writeFile(precompiledJsFile, compressedConcatenatedScript);
	});
});
function compress(data, callback){
	const compilerProcess = closureCompiler.run([{
		 path: 'file-one.js',
		 src:data,
		 sourceMap: null
	}], (exitCode, stdOut, stdErr) => {
		if(stdErr)throw stdErr;
		callback(stdOut[0].src);
	});
}
function concatenateScripts(callback){
	var files = getAllFilesInFolder(folderToPrecompile);
	concatenate(files, callback);
}
function concatenate(filePaths, callback){
	var concatenatedScript='';
	var i=0;
	function next(){
		var filePath = filePaths[i];
		if(!filePath){
			callback(concatenatedScript);
			return;
		}
		readFile(filePath, function(data){
			concatenatedScript+=data;
			i++;
			next();
		});
	}
	next();
}
function writeFile(path, data){
	fs.writeFileSync(path, data);
}
function getAllFilesInFolder(folder, callback){
	var list = [];
	var files = fs.readdirSync( folder );
	files.forEach( function ( file ) {
		var curSource = path.join( folder, file );
		if (! fs.lstatSync( curSource ).isDirectory() ) {
			list.push(curSource);
		} 
	});
	return list;
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