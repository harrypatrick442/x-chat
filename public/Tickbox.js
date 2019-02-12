var Tickbox = (function(){
	const TICKED='ticked';
	var _Tickbox = function(params){
		var ticked = false;
		var element = E.DIV();
		element.classList.add('tickbox');
		var box = E.DIV();
		box.classList.add('box');
		if(params.text){
			var text = E.DIV();
			text.classList.add('text');
			element.appendChild(text);
			text.innerHTML=params.text;
		}
		element.appendChild(box);
		this.getElement = function(){return element;};
		this.setTicked=function(value){
			ticked = value;
			tickedChanged();
		};
		this.getTicked = function(){
			return ticked;
		};
		box.addEventListener('click', toggle);
		function toggle(){
		ticked=!ticked;
		tickedChanged();
		}
		function tickedChanged(){
			if(ticked){
				if(box.classList.contains(TICKED))return;
				box.classList.add(TICKED);
			}else{
				if(!box.classList.contains(TICKED))return;
				box.classList.remove(TICKED);
			}
		}
	};
	return _Tickbox;
})();