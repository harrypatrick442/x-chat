function Moderation(params){
	const self = this;
	const {
		
	}=params;
	let imagesAwaitingModeration = null;
	let currentImage = null;
	const element = E.DIV();
	element.classList.add('moderation');
	const noMoreImagesElement=E.DIV();
	noMoreImagesElement.classList.add('no-more-images');
	noMoreImagesElement.innerHTML='No More Images';
	const imgWrapperElement = E.DIV();
	imgWrapperElement.classList.add('img-wrapper');
	const imgElement = E.IMG();
	const buttonAccept = E.BUTTON();
	const buttonReject= E.BUTTON();
	const buttonClose = E.BUTTON();
	buttonAccept.classList.add('accept');
	buttonReject.classList.add('reject');
	buttonClose.classList.add('close');
	buttonClose.addEventListener('click', this.hide);
	const buttonsWrapperElement = E.DIV();
	buttonsWrapperElement.classList.add('buttons-wrapper');
	element.appendChild(imgWrapperElement);
	imgWrapperElement.appendChild(imgElement);
	imgWrapperElement.appendChild(noMoreImagesElement);
	element.appendChild(buttonsWrapperElement);
	element.appendChild(buttonClose);
	buttonAccept.innerHTML='Accept';
	buttonReject.innerHTML='Reject';
	buttonsWrapperElement.appendChild(buttonAccept);
	buttonsWrapperElement.appendChild(buttonReject);
	buttonAccept.addEventListener('click', accept);
	buttonReject.addEventListener('click', reject);
	
	let clickedOffHandle = null;
	this.show = function(){
		clickedOffHandle = ClickedOff.register(element, self.hide);
		clickedOffHandle&&clickedOffHandle.dispose();
		setVisible(true);
		nextImageIfHasNoCurrentImage();
	};
	this.hide = function(){
		clickedOffHandle&&clickedOffHandle.dispose();
		clickedOffHandle = null;
		setVisible(false);
	};
	this.getElement=function(){
		return element;
	};
	buttonClose.addEventListener('click', self.hide);
	nextImage();
	function nextImageIfHasNoCurrentImage(){
		if(currentImage===undefined||currentImage===null)
			nextImage();
	}
	function setVisible(value){
		if(value)element.classList.add('visible');
		else element.classList.remove('visible');
	}
	function accept(){
		if(!currentImage)return;
	}
	function reject(){
		if(!currentImage)return;
	}
	function nextImage(){
		if(imagesAwaitingModeration&&imagesAwaitingModeration.length>0){
			_nextImage();
			return;
		}
		fetchImagesAwaitingModeration()
		.then(_nextImage)
		.catch(console.error);
	}
	function _nextImage(){
		currentImage = imagesAwaitingModeration[0];
		if(currentImage===undefined){
			setHasImages(false);
			return;
		}
		imgElement.src = currentImage.url;
	}
	function setHasImages(value){
		if(value)
			imgWrapperElement.classList.add('has-images');
		else 
			imgWrapperElement.classList.remove('has-images');
	}
	function fetchImagesAwaitingModeration(){
		return new Promise((resolve, reject)=>{
			const url = `${Configuration.getMultimediaBackendUrl()}/user_images_for_moderation`;
			
			console.log(url);
			const handle = Ajax.get({
					url,
					timeout:10000
				});
				handle.onDone=()=>{
					console.log(handle.getResponse());
					res = JSON.parse(handle.getResponse());
					imagesAwaitingModeration=res.userImages;
					console.log('imagesAwaitingModeration');
					console.log(imagesAwaitingModeration);
					setHasImages(imagesAwaitingModeration.length>0);
					resolve();
				};
				handle.onError=()=>{
					reject(handle.getError());
				};
		});	
	}
}