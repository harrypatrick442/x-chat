var ClickedOff = new (function () {
    var entries = [];
    this.register = function (element, callbackHide) {
        new (function (element, callbackHide) {
            setTimeout(function () {
                if (!containsEntry(element)) {
                    entries.push({ element: element, callbackHide: callbackHide });
                }
            },0);
        })(element, callbackHide);
    };
	this.remove = function(element){
		var iterator = new Iterator(entries);
		while(iterator.hasNext()){
			var entry = iterator.next();
			if(entry.element==element)
			{
				iterator.remove();
				break;
			}
				
		}
	};
    document.addEventListener('mousedown', clickedDocument);
    function clickedDocument(e) {
        var x = e.pageX;
        var y = e.pageY;
        var toRemove = [];
        for (var i = 0, entry; entry = entries[i]; i++) {
            var absolutePosition = getAbsolute(entry.element);
            var xLeft = absolutePosition.left;
            var xRight = xLeft + entry.element.offsetWidth;
            var yTop = absolutePosition.top;
            var yBottom = yTop + entry.element.offsetHeight;
            if (x < xLeft || x > xRight || y < yTop || y > yBottom) {
                toRemove.push(entry);
                entry.callbackHide()
            }
        }
        for (var i = 0, entry; entry = toRemove[i]; i++) {
            entries.splice(entries.indexOf(entry), 1);
        }
    }
    function containsEntry(element) {
        for (var i = 0, entry; entry = entries[i]; i++) {
            if (entry.element == element)
                return true;
        }
        return false;
    }
    

})();