module.exports = (function(){
	var _MysocketCleanup = function(mysockets){
		const DELAY_CLEANUP_MINUTES = 1;
		var Set = require('./Set');
		var Timer = require('./Timer');
		var set = new Set({getEntryId:getEntryId});
		var timerCleanup = new Timer({delay:DELAY_CLEANUP_MINUTES*60000, callback:cleanupRoutine});
		mysockets.addEventListener('add', onAdd);
		mysockets.addEventListener('remove', onRemove);
		function onAdd(e){
			var mysocket = e.mysocket;
			if(!set.add(mysocket)) return;
			if(set.count()<2)
				startCleanupRoutine();
		};
		function onRemove(e){
			var mysocket = e.mysocket;
			if(!set.remove(mysocket))return;
			if(set.count()>0)return;
			postponeCleanupRoutine();
		};
		function startCleanupRoutine(){
			timerCleanup.start();
		}
		function postponeCleanupRoutine(){
			timerCleanup.stop();
		}
		function cleanupRoutine(){
			//console.log('cleanupRoutine running');
			var mysockets = set.getEntries().slice();
			mysockets.forEach(function(mysocket){
				if(mysocket.isActive(new Date().getTime()))return;
				mysocket.close();
			});
			console.log(set.count());
		}
		function getEntryId(mysocket){
			return mysocket.getId();
		}
	};
	return _MysocketCleanup;
})();
