module.exports = (function(){
	var _Longpolls = function(){
		var mapIdToLongpoll={};
		this.add = function(longpoll){
			longpoll.addEventListener('dispose', onDispose);
			mapIdToLongpoll[longpoll.getId()]=longpoll;
		};
		this.getById= function(id){
			return mapIdToLongpoll[id];
		};
		function onDispose(e){
			var longpoll = e.longpoll;
			delete mapIdToLongpoll[longpoll.getId()];
		}
	};
	return _Longpolls;
})();