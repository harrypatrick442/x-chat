exports.Dal= (function(){
	const CALL="CALL ";
    var sql = require("mssql");
		console.log(sql);
	var _Dal = function(config){
		this.nonQuery = function(params){
			var storedProcedure = params.storedProcedure;
			var parameters = params.parameters;
			var connection = new sql.Connection(config);
			connection.connect().then(function(connection) {
				var request = new sql.Request(connection);
				setInputs(parameters, request);
				request.execute(storedProcedure).then(function(err, recordsets, returnValue, affected) {
					if(err){
						console.log(err.message); 
						throw err;
					}
					callback(recordSets);
				}).catch(function(err) {
					console.log(err.message); 
					throw err;
				});
			});
		};
		this.query = function(params){
			var storedProcedure = params.storedProcedure;
			var parameters = params.parameters?params.parameters:[];
			var callbackRead= params.callbackRead;
			var connection = new sql.Connection(config);
			connection.connect().then(function(connection) {
				var request = new sql.Request(connection);
				setInputs(parameters, request);
				request.execute(storedProcedure).then(function(err, recordSets, returnValue, affected) {
					if(err){
						console.log(err.message); 
						throw err;
					}
					callbackRead(recordSets);
				}).catch(function(err) {
					console.log(err.message); 
					throw err;
				});
			});
		};
		function setInputs(parameters, request){
			each(parameters, function(parameter){
				request.input(parameter.name, parameter.type, parameter.value);
			});
		}
	};
	return _Dal;
})();
