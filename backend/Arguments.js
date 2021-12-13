module.exports = new (function(){
	const args = process.argv.splice(2);
	console.log(args);
	this.has=function(value){
		let noNegative, oneNegative, twoNegatives;
		if(value[0]==='-'){
			if(value[1]==='-'){
				noNegative = value.substr(2);
				oneNegative = value.substr(1);
				twoNegatives = value;
			}
			else{
				noNegative = value.substr(1);
				oneNegative = value;
				twoNegatives = `-${value}`;
			}
		}
		else{
			twoNegatives = `--${value}`;
			oneNegative = `-${value}`;
			noNegative = value;
		}
		return args.indexOf(noNegative)>=0
			||args.indexOf(oneNegative)>=0
			||args.indexOf(twoNegatives)>=0;
	};
})();