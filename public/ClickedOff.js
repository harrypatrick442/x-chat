var ClickedOff = new (function () {
    var handles = [];
    this.register = function (element, callbackHide) {
		var handle =  new Handle(element, callbackHide, dispose);
		setTimeout(function () {
			if (!containsElement(element)) {
				handles.push(handle);
			}
		},0);
        return handle;
    };
	this.remove = function(element){
		var iterator = new Iterator(handles);
		while(iterator.hasNext()){
			var handle = iterator.next();
			if(handle.getElement()==element)
			{
				handle.dispose();
				break;
			}
				
		}
	};
	function dispose(handle){
		var index = handles.indexOf(handle);
		if(index<0)return;
		handles.splice(index, 1);
	}
    function clickedDocument(e) {
        var x = e.pageX;
        var y = e.pageY;
		var handlesSnashot = handles.slice();
        for (var i = 0, handle; handle = handlesSnashot[i]; i++) {
			var element = handle.getElement();
            var absolutePosition = getAbsolute(element);
            var xLeft = absolutePosition.left;
            var xRight = xLeft + element.offsetWidth;
            var yTop = absolutePosition.top;
            var yBottom = yTop + element.offsetHeight;
            if (x < xLeft || x > xRight || y < yTop || y > yBottom) {
                handle.hide();
            }
        }
    }
    function containsElement(element) {
        for (var i = 0, handle; handle = handles[i]; i++) {
            if (handle.getElement() == element)
                return true;
        }
        return false;
    }
    function Handle(element, callbackHide, callbackDispose){
		var additionalElements =[];
		this.addAdditionalElement= function(element){
			if(additionalElements.indexOf(element)<0)
				additionalElements.push(element);
		};
		this.removeAdditionalElement = function(element){
			var index = additionalElements.indexOf(element);
			if(index<0)return;
			additionalElements.splice(index, 1);
		};
		this.getElement = function(){
			return element;
		};
		this.hide = function(){
			callbackDispose();
			callbackHide();
		};
		this.dispose = callbackDispose;
	}
    document.addEventListener('mousedown', clickedDocument);

})();