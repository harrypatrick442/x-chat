function Spinner(params) {
	var preventInterraction=params.preventInterraction;
    var self = this;
	var element = E.DIV();
	element.classList.add('spinner');
	element.classList.add('prevent-interraction');
	var animation=E.DIV();
	animation.classList.add('animation');
	element.appendChild(animation); 
    document.documentElement.appendChild(element);
    this.show = function () {
        element.style.display = 'inline';
        resize();
		if(!preventInterraction)return;
        setTimeout(function () {
            if(document.activeElement&&document.activeElement.blur)
                document.activeElement.blur();
        }, 0);
    };
    this.hide = function () {
        element.style.display = 'none';
    };
    this.hide();
	if(preventInterraction){
		preventEventPropagation('click');
		preventEventPropagation('mousedown');
		preventEventPropagation('mouseup');
		window.addEventListener('resize', resize);
	}
    function preventEventPropagation(name) {
        getDiv().addEventListener(name, function (e) {
            if (!e) e = window.event;
            e.stopPropagation();
            return false;
        });
    }
    function getScreenSize() {
        var width = window.innerWidth|| document.documentElement.clientWidth || document.body.clientWidth|| 0;
        var height = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight|| 0;
        return { width: width, height: height };
    }
    function resize() {
        var size = getScreenSize();
        element.style.width = String(size.width) + 'px'
    }
}