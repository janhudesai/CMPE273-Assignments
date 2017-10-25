/**
 * http://usejsdoc.org/
 */

var mysql = require('mysql');
var ejs = require('ejs');

function connection()
{
	var connection = mysql.createConnection(
	{
		host : 'localhost',
		user : 'root',
		password : 'root',
		database : 'test',
		port	 : 3306
	}		
	);
	return connection;
	}

function fetch(callback,query)
{
	var connection1 = connection();
	
	connection1.query(query,function(error, data , field)
	{
		if(!error)
			{
			   callback(error,data);
			}
		else
			{
			   callback(error,data);
			   console.log("Error occured"+ error.message);
			}
	});
	
	console.log("Connection closed");
	connection1.end();
	
}

exports.fetch=fetch;