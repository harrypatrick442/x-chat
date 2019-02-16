function Spinner(params) {
	var preventInterraction=params.preventInterraction;
    var self = this;
	var spinner = E.DIV();
	var element;
	spinner.classList.add('spinner');
	for(var i=0; i<3; i++)
		spinner.appendChild(E.DIV());
	if(preventInterraction){
		var preventInterraction=E.DIV();
		preventInterraction.classList.add('prevent-interraction');
		document.documentElement.appendChild(preventInterraction);
		preventInterraction.appendChild(spinner);
		element = preventInterraction;
	}
	else{
		element = spinner;
	}
	element.style.display='none';
	this.getElement = function(){
		return element;
	};
    this.show = function () {
		self.setVisible(true);
    };
    this.hide = function () {
		self.setVisible(false);
    };
	this.setVisible = function(value){
		console.log(value);
        element.style.display = value?'inline-block':'none';
		if(!value||!preventInterraction)return;
        setTimeout(function () {
            if(document.activeElement&&document.activeElement.blur)
                document.activeElement.blur();
        }, 0);
	};
	if(preventInterraction){
		preventEventPropagation('click');
		preventEventPropagation('mousedown');
		preventEventPropagation('mouseup');
	}
    function preventEventPropagation(name) {
        element.addEventListener(name, function (e) {
            if (!e) e = window.event;
            e.stopPropagation&&e.stopPropagation();
			e.preventDefault&&e.preventDefault();
            return false;
        });
    }
}