var ImageUploader = new (function(){
	var _ImageUploader = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var buttonClose = new Button({ className:'button-close'});
		var popup = new Popup({});
		var ui = new UI({popup:popup, buttonClose:buttonClose});
	};
	return _ImageUploader;
	function UI(params){
		var buttonClose = params.buttonClose;
		var element = params.popup.getElement();
		element.classList.add('image-uploader');
		document.body.appendChild(element);
		var inner = E.DIV();
		inner.classList.add('inner');
		element.appendChild(inner);
		var heading = E.DIV();
		heading.classList.add('heading');
		inner.appendChild(heading);
		this.setHeading = function(text){
			heading.innerHTML = text;
		};
		heading.appendChild(buttonClose.getElement());
		var croppingFrame = E.DIV();
		croppingFrame.classList.add('cropping-frame');
		var img = E.IMG();
img.onload = function() {
  alert(this.width + 'x' + this.height);
  var aspectRatio = this.width/this.height;
  alert(aspectRatio);
  var width = aspectRatio*100;
  img.style.width=String(width)+'%';
  img.style.marginLeft=String((100 - width)/2)+'%';
		croppingFrame.appendChild(img);
};
		img.src='/images/test.jpg';
		
		
		window.img = img;
		var bottom = E.DIV();
		bottom.classList.add('bottom');
		
		inner.appendChild(croppingFrame);
		
		inner.appendChild(bottom);
	}
})();