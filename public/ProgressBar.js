var ProgressBar = (function(){
	var _ProgressBar = function(){
		var self = this;
		var element = E.DIV();
		element.classList.add('progress-bar');
		var progress = E.DIV();
		progress.classList.add('progress');
		element.appendChild(progress);
		this.setPercent = function(percent){
			progress.style.width=String(percent)+'%';
		};
		this.setProportion = function(proportion){
			self.setProportion(proportion*100);
		};
		this.getElement = function(){return element;};
	};
	return _ProgressBar;
})();