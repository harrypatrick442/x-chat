module.exports = (function(){
	var Set = require('./Set');
	var Timer = require('./Timer');
	var set = new Set({getEntryId:getEntryId});
	var timerCleanup = new Timer({delay:300000, callback:cleanupRoutine});
	this.add = function(mysocket){
		if(!set.add(mysocket)) return;
		if(set.count()<2)
			startCleanupRoutine();
	};
	this.remove = function(mysocket){
		if(!set.remove(mysocket))return;
		if(set.count()>0)return;
		posponeCleanupRoutine();
	};
	function startCleanupRoutine(){
		timer.start();
	}
	function postponeCleanupRoutine(){
		timer.stop();
	}
	function cleanupRoutine(){
		var mysockets = set.getEntries().slice();
		each(mysockets, function(mysocket){
			if(mysocket.isActive())return;
			mysocket.close();
		});
	}
	function getEntryId(mysocket){
		return mysocket.getId();
	}
})();
