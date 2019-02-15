var UserImage = new(function(){
	var _UserImage = function(params){
		var userId = params.userId;
		var image = params.image;
		var size = params.size;
		var __UserImage = new ConnectedImage({def:'/images/user-default.png', type:User.TYPE, id:userId, url:image?'/images/uploaded/'+image+(size?size:'_32_32')+'.jpeg':undefined});
		return __UserImage;
	};
	return _UserImage;
})();