exports.Devices = (function(){
	var EventEnabledBuilder = require('./EventEnabledBuilder');
	var each = require('./each');
	var Set = require('./Set');
	var _Devices = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var set = new Set({getEntryId:getEntryId});
		this.add=function(device){
			if(!set.add(device))return false;
			device.addEventListener('close', onClose);
			return true;
		};
		this.remove = function(device){
			if(!set.remove(device))return false;
			device.removeEventListener('close', onClose);
			return true;
		};
		this.contains = set.contains;
		this.sendMessage = function(msg){
			set.each(function(device){
				device.sendMessage(msg);
			});
		};
		this.closeAll = function(){
			set.each(function(device){
				device.removeEventListener('close', onClose);
				device.close();
			});
			set.clear();
		};
		this.getById= set.getById;
		this.getUserIds = function(){
			var list=[];
			set.each(function(device){
				var id = device.getUser().getId();
				if(list.indexOf(id)<0)list.push(id);
			});
			return list;
		};
		function onClose(e){
			console.log('CLOSE');
			console.log(e.device.getId());
			self.remove(e.device);
			console.log(set.getEntries());
			if(set.count()>0)return;
			dispatchAllClose();
		}
		function dispatchAllClose(){
			console.log('dispatchAllClosed');
			self.dispatchEvent({type:'allclosed'});
		}
		function contains(device){
			return list.indexOf(device)>=0;
		}
		function getEntryId(device){
			return device.getId();
		}
	};
	return _Devices;
})();
