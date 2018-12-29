module.Dal= new (function(){
	const CALL="CALL";
    var sql = require("mssql");
	var _Dal = function(config){
		this.nonQuery = function(){
			var storedProcedure = params.storedProcedure;
			var sql = CALL+storedProcedure;
			var connection = mysql.createConnection(config);
			connection.connect(function(err)
			{
				if(err) throw(err, "Connection to database to execute "+storedProcedure+" failed.");
				connection.query(sql, function(err, rows)
				{
					if(err){
						console.log(err.message); 
						throw (err, storedProcedure+" failed.");//this is where the error occurs
					}
					connection.end(function(err){
						if (err) throw err;
						console.log("Connection closed.");
					});
				});
			});
		};
		this.query = function(params){
			var storedProcedure = params.storedProcedure;
			var callbackRead= params.callbackRead;
			var sql = CALL+storedProcedure;
			var connection = mysql.createConnection(config);
			connection.connect(function(err)
			{
				if(err) throw(err, "Connection to database to execute "+storedProcedure+" failed.");
				connection.query(sql, function(err, rows)
				{
					if(err){
						console.log(err.message); 
						throw (err, storedProcedure+" failed.");//this is where the error occurs
					}
					try{
						callbackRead(rows);
					}
					catch(ex){
						throw ex;
					}
					finally{
						connection.end(function(err){
							if (err) throw err;
							console.log("Connection closed.");
						});
					}
				});
			});
		};
	};
	return _Dal;
})();
