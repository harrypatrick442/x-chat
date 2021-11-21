module.exports = function(){
	var mapIdToLongpoll=new Map();
	this.add = function(longpoll){
		longpoll.addEventListener('dispose', onDispose);
		mapIdToLongpoll.set(longpoll.getId(), longpoll);
	};
	this.getById= function(id){
		return mapIdToLongpoll.get(id);
	};
	function onDispose(e){
		var longpoll = e.longpoll;
		mapIdToLongpoll.delete(longpoll.getId());
	}
};