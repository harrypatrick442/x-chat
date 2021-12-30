function Moderation(params){
	const {
		
	}=params;
	let imagesAwaitingModeration = null;
	let currentImage = null;
	const element = E.DIV();
	element.classList.add('moderation');
	const imgWrapperElement = E.DIV();
	imgWrapperElement.classList.add('img-wrapper');
	const imgElement = E.DIV();
	const buttonAccept = E.BUTTON();
	const buttonReject= E.BUTTON();
	const buttonsWrapperElement = E.DIV();
	buttonsWrapperElement.classList.add('buttons-wrapper');
	element.appendChild(buttonsWrapperElement);
	buttonAccept.innerHTML='Accept';
	buttonReject.innerHTML='Reject';
	buttonsWrapperElement.appendChild(buttonAccept);
	buttonsWrapperElement.appendChild(buttonReject);
	buttonAccept.addEventListener('click', accept);
	buttonReject.addEventListener('click', reject);
	
	this.getElement=function(){
		return element;
	};
	nextImage();
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
		imgElement.src = currentImage.url;
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