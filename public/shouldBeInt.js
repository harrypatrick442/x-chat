function shouldBeInt(value){
	if(typeof(value)==='string')
		throw new Error(value);
}