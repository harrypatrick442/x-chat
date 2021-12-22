module.exports=function(argumentName, value){
	throw new Error(`The argument '${argumentName} was invalid with value ${value}`);
};