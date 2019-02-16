var UserImage = new(function(){
	const LARGE='128_128';
	const SMALL='32_32';
	const SIZES=[SMALL, LARGE];
	var _UserImage = function(params){
		var userId = params.userId;
		var image = params.image;
		var size = params.size;
		size = defaultSize(size);
		console.log('type on creation');
		console.log(size);
		console.log(getType(size));
		var connectedImage = new ConnectedImage({def:'/images/user-default.png', type:getType(size), id:userId, url:getUrl(image, size)});
		this.getElement = connectedImage.getElement;
		this.dispose = connectedImage.dispose;
	};
	_UserImage.LARGE=LARGE;
	_UserImage.SMALL=SMALL;
	_UserImage.SIZES=SIZES;
	_UserImage.update = function(userId, image){
		each(_UserImage.SIZES,function(size){
			update(userId, image, size);
		});
	};
	function update(userId, image, size){
		var url = getUrl(image, size);
		if(!url)return;
		ConnectedImage.update(getType(size), userId, url);
	}
	function getUrl(image, size){
		return image?'/images/uploaded/'+image+'_'+size+'.jpeg':undefined;
	}
	function getType(size){
		return User.TYPE+'_'+size;
	}
	function defaultSize(size){
		return size?size:SMALL;
	}
	return _UserImage;
})();