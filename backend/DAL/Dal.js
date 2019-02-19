exports.Dal= (function(){
	const CALL="CALL ";
    var sql = require("mssql");
    var each = require('./../each');
	var _Dal = function(config){
		this.nonQuery = function(params){
			var storedProcedure = params.storedProcedure;
			var parameters = params.parameters;
			var connection = new sql.ConnectionPool(config);
			connection.connect().then(function(connection) {
				var request = new sql.Request(connection);
				setInputs(parameters, request);
				request.execute(storedProcedure).then(function(result) {}).catch(function(err) {
					console.log(err.message); 
					throw err;
				});
			});
		};
		this.query = function(params){
			var storedProcedure = params.storedProcedure;
			var parameters = params.parameters?params.parameters:[];
			var callback= params.callback;
			var connection = new sql.ConnectionPool(config);
			connection.connect().then(function(connection) {
				var request = new sql.Request(connection);
				setInputs(parameters, request);
				request.execute(storedProcedure).then(function(result) {
					callback(result);
				}).catch(function(err) {
					console.log(err.message); 
					throw err;
				});
			});
		};
		function setInputs(parameters, request){
			each(parameters, function(parameter){
				if(parameter.out)
					request.output(parameter.name, parameter.type, parameter.value);
				else
					request.input(parameter.name, parameter.type, parameter.value);
			});
		}
	};
	return _Dal;
})();
