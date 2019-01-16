var Settings = (function(){
	var _Settings = function(settingsName)
	{
		this.get = function (name)
		{
			try
			{
				return JSON.parse(localStorage.getItem(settingsName + '_' + name));
			}
			catch(ex)
			{
				return undefined;
			}
		};
		this.set = function (name, obj)
		{
			try
			{
				localStorage.setItem(settingsName + '_' + name, JSON.stringify(obj));
			}
			catch(ex)
			{
				console.log(ex);
			}
		};
	};
	return _Settings;
})();