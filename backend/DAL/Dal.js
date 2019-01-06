exports.Dal= new (function(){
	const CALL="CALL ";
    var mysql = require("mysql");
	var _Dal = function(config){
		var pool = mysql.createPool(config);
		this.nonQuery = function(params){
			var storedProcedure = params.storedProcedure;
			var parameters = params.parameters;
			var sql = getSql(storedProcedure, parameters);
			pool.getConnection(function(err, connection) {
				if(err) throw err;
				connection.query(sql, parameters, function(err, rows)
				{
					if(err){
						console.log(err.message); 
						throw err;
					}
					connection.release(function(err){
						if (err) throw err;
						console.log("Connection closed.");
					});
				});
			});
		};
		this.query = function(params){
			var storedProcedure = params.storedProcedure;
			var parameters = params.parameters?params.parameters:[];
			var callbackRead= params.callbackRead;
			var sql = getSql(storedProcedure, parameters);
			pool.getConnection(function(err, connection) {
				if(err) throw err;
				connection.query(sql, parameters, function(err, result, fields)
				{
					if(err){
						console.log(err.message); 
						throw err;
					}
					console.log(result);
					var rows = result[0];
					console.log(rows);
					try{
						callbackRead(rows);
					}
					catch(ex){
						throw ex;
					}
					finally{
						connection.release(function(err){
							if (err) throw err;
							console.log("Connection closed.");
						});
					}
				});
			});
		};
		function getSql(storedProcedure, parameters){
			var sql = CALL+storedProcedure+'(';
			var first = true;
			if(parameters.length>0){
				sql+='?';
				for(var i=1; i<parameters.length; i++){
					sql+=',?';
				}
			}
			sql+=')';
			return sql;
		}
	};
	return _Dal;
})();
