var ConnectedImage = (function(){
	var mapTypeToMapIdToInstances={};
	var _ConnectedImage = function(params)
	{
		var self = this;
		var id = params.id;
		var type = params.type;
		var instance = {connectedImage:this, set:set};
		var def=params.def;	
		var element = E.DIV();
		element.classList.add('connected-image');
		var img = E.IMG();
		element.appendChild(img);
		img.src=def;
		img.onerror = function () {
			img.src = def;
		};
		this.getElement = function(){return element;};
		this.dispose = function(){
			removeInstance(type, id, instance);
		};
		map(type, id, instance);
		function set(url){
			img.src=url;
		}
	};
	_ConnectedImage.update= function(type, id, url){
		var instances = getInstances(type, id);
		each(instances, function(instance){
			instance.set(url);
		});
	};
	return _ConnectedImage;
	function getInstances(type, id){
		var mapIdToInstances = mapTypeToMapIdToInstances[type];
		if(!mapIdToInstances) return;
		return mapIdToInstances[id];
	}
	function map(type, id, instance){
		var mapIdToInstances = mapTypeToMapIdToInstances[type];
		if(!mapIdToInstances) 
		{
			mapTypeToMapIdToInstances[type]={id:[instance]};
			return;
		}
		var instances = mapIdToInstances[id];
		if(!instances){
			mapIdToInstances[id]=[instance];
			return;
		}
		if(instances.indexOf(instance)<0)
			instances.push(instance);
	}
	function removeInstance(type, id, instance){
		var instances = getInstances(type, id);
		if(!instances) return;
		var index = instances.indexOf(instance);
		if(index<0) return;
		instances.splice(index, 1);
		if(instances.length>0) return;
		delete mapTypeToMapIdToInstances[type][id];
		if(mapTypeToMapIdToInstances[type].keys()<2)
		delete mapTypeToMapIdToInstances[type];
	}
})();