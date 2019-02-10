var ProgressBar = (function(){
	const DONE='progress-bar-done';
	var _ProgressBar = function(params){
		var self = this;
		var addedDoneClass=false;
		var showText = params.showText;
		var textContent = params.text;
		var element = E.DIV();
		element.classList.add('progress-bar');
		var progress = E.DIV();
		progress.classList.add('progress');
		element.appendChild(progress);
		var text = E.DIV();
		text.classList.add('text');
		element.appendChild(text);
		this.setPercent = function(percent){
			var str = String(percent)+'%';
			progress.style.width=str;
			if(showText)text.innerHTML=(textContent?textContent:'')+' '+str;
			if(percent>=100)
				done();
			else
				notDone();
		};
		this.setProportion = function(proportion){
			self.setProportion(proportion*100);
		};
		this.getElement = function(){return element;};
		function done(){
			if(addedDoneClass)return;
			element.classList.add(DONE);
			addedDoneClass=true;
		}
		function notDone(){
			if(!addedDoneClass)return;
			element.classList.remove(DONE);
			addedDoneClass=false;
		}
	};
	return _ProgressBar;
})();