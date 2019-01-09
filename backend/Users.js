exports.Users = (function(){
	var _Users = function(){
		var list=[];
		this.add = function(user){
			if(list.indexOf(user)<0)
				list.push(user);
		};
	};
	return _Users;
})();