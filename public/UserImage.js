var UserImage = new(function(){
	var _UserImage = function(params){
		var userId = params.userId;
		var __UserImage = new ConnectedImage({def:'/images/user-default.png', type:User.TYPE, id:userId});
		return __UserImage;
	};
	return _UserImage;
})();