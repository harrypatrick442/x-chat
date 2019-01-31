exports.Mysockets = (function(){
	var EventEnabledBuilder = require('./EventEnabledBuilder').EventEnabledBuilder;
	var each = require('./each').each;
	var _Mysockets = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var list =[];
		this.add=function(mysocket){
			if(contains(mysocket))return;
			list.push(mysocket);
			mysocket.addEventListener('close', close);
		};
		this.remove = function(mysocket){
			var index = list.indexOf(mysocket);
			if(index<0)return;
			mysocket.removeEventListener('close', close);
			list.splice(index, 1);
		};
		this.sendMessage = function(msg){
			each(list, function(mysocket){
				mysocket.sendMessage(msg);
			});
		};
		this.closeAll = function(){
			each(list, function(mysocket){
				mysocket.removeEventListener('close', close);
				mysocket.close();
			});
			list=[];
		};
		function close(e){
			if(list.length>0)return;
			dispatchAllClose();
		}
		function dispatchAllClose(){
			self.dispatchEvent({type:'allclosed'});
		}
		function contains(mysocket){
			return list.indexOf(mysocket)>=0;
		}
	};
	return _Mysockets;
})();
