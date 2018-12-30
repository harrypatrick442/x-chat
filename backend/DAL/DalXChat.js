exports.dalXChat= new (function(){
		var Dal = require('./Dal').Dal;
		var config = {
			connectionLimit: 100,
			user: 'root',
			password: 'Afucka9',
			server: 'localhost', 
			database: 'xchat' 
		};
		var dal = new Dal(config);
		this.nonQuery = dal.nonQuery;
		this.query = dal.query;
		this.scalar = dal.scalar;
})();
