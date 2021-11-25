var Button = function(params){
	EventEnabledBuilder(this);
	var self = this;
	const {preventPropagation, className, classNames, classNameToggled,
		imgUrl, imgUrlHover, imgUrlToggled, imgUrlToggledHover} = params;
	var isToggle = params.toggle;
	var toggled = params.toggled?true:false;
	console.log('imgUrl is  '+imgUrl);
	var hovering = false;
	var text = params.text;
	var element = E.BUTTON();
	element.classList.add('button');
	if(text)
		element.innerHTML = text;
	if(className)
		element.classList.add(className);
	if(classNames)
		each(classNames, function(className){
			element.classList.add(className);
		});
	if(imgUrl){
		var imgElement = E.IMG();
		imgElement.src = toggled?imgUrlToggled:imgUrl;
		var innerElement = E.DIV();
		innerElement.classList.add('inner');
		innerElement.appendChild(imgElement);
		element.appendChild(innerElement);
	}
	let setToggledImage = imgUrlToggled?get_setToggledImage(true):null;
	let setFalseToggledImage = imgUrlToggled?get_setToggledImage(false):null;
	if(isToggle)
		updateToggle();
	element.addEventListener('click', click);
	if(imgUrlHover){
		element.addEventListener('mouseenter', get_setHovering(true));
		element.addEventListener('mouseleave', get_setHovering(false));
	}
	this.getElement = function(){return element;};
	function click(e){
		if(preventPropagation){
			e = e || window.event;
			e.stopPropagation();
		}
		dispatchClick();
		toggle();
	}
	function toggle(){
		if(isToggle&&classNameToggled){
			_toggle();
			dispatchToggled(toggled);
		}
	}
	function _toggle(){
		toggled=!toggled;
		updateToggle();
	}
	function updateToggle(){
		if(toggled){
			element.classList.add(classNameToggled);
			setToggledImage&&setToggledImage();
			return;
		}
		element.classList.remove(classNameToggled);
			setFalseToggledImage&&setFalseToggledImage();
	}
	function dispatchClick(){
		self.dispatchEvent({type:'click'});
	}
	function dispatchToggled(){
		self.dispatchEvent({type:'toggled', toggled:toggled});
	}
	function get_setHovering(value){
		if(value){
			if(!imgUrlToggledHover){
				return ()=>{
					hovering = true;
					imgElement.src = imgUrlHover;
				};
			}
			return ()=>{
				console.log('toggled is '+toggled);
				hovering = true;
				imgElement.src = toggled?imgUrlToggledHover:imgUrlHover;
			};
		}
		if(!imgUrlToggled){
			return ()=>{
				console.log('toggled is '+toggled);
				hovering = false;
				imgElement.src = imgUrl;
			};
		}
		return ()=>{
			hovering = false;
			console.log('toggled is '+toggled);
			imgElement.src = toggled?imgUrlToggled:imgUrl;
		};
	}
	function get_setToggledImage(value){
		if(value){
			if(!imgUrlToggledHover){
				return ()=>{
					imgElement.src = imgUrlToggled;
				};
			}
			return ()=>{
				imgElement.src = hovering?imgUrlToggledHover:imgUrlToggled;
			};
		}
		if(!imgUrlHover){
			return ()=>{
				imgElement.src = imgUrl;
			};
		}
		return ()=>{
			imgElement.src = hovering?imgUrlHover:imgUrlHover;
		};
	}
};