function Moderation(params){
	const {
		
	}=params;
	let imagesAwaitingModeration = null;
	let currentImage = null;
	const element = E.DIV();
	element.classList.add('moderation');
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
		clickedOffHandle&&clickedOffHandle.dispose();
		clickedOffHandle = ClickedOff.register(element, hide);
		setVisible(true);
	};
	this.hide = function(){
		clickedOffHandle&&clickedOffHandle.dispose();
		clickedOffHandle = null;
		setVisible(false);
	};
	this.getElement=function(){
		return element;
	};
	nextImage();
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
			noMoreImages();
			return;
		}
		imgElement.src = currentImage.url;
	}
	function noMoreImages(){
		
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
					imagesAwaitingModeration = JSON.parse(handle.getResponse());
					console.log(imagesAwaitingModeration);
					resolve();
				};
				handle.onError=()=>{
					reject(handle.getError());
				};
		});	
	}
}