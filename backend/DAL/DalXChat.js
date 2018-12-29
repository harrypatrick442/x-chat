module.Dal= new (function(){
		var Dal = require('./Dal');
		var config = {
			user: 'root',
			password: 'Afucka9',
			server: 'localhost', 
			database: 'xchat' 
		};
		var dal = new Dal(config);
		this.nonQuery = dal.nonQuery;
		this.query = dal.query;
})();
