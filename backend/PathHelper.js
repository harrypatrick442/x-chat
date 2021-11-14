module.exports= new (function()
{
	this.split=function(p){
		return p.split(new RegExp('/|\\\\'));
	};
})();
