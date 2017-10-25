/**
 * http://usejsdoc.org/
 */

var sql = require('./sql');
var ejs = require("ejs");

function home(req,res)
{
	ejs.renderFile('./views/signin.ejs',function(err,result){
		 if (!err) {
	            res.end(result);
	   }
	   // render or error
	   else {
	            res.end('An error occurred');
	            console.log(err);
	   }
	});
	}

function afterlogin(req,res)
{
	var query = "select * from users where username='"+ req.param("username")+"'and password='"+ req.param("password")+"'";
	
	function display(error,result)
	{
		if (error)
			{
			 console.log("error" + error.message);
			}
		
		else
			{
			 if (result.length > 0)
				 {
				   console.log("valid login");
				   ejs.renderFile('./views/successlogin.ejs',{data:result}, function(error1,result1){
					   if (!error1) {
				            res.end(result1);
				        }
				        // render or error
				        else {
				            res.end('An error occurred');
				            console.log(error1);
				   }
					   });
				 }
			 else
				 {
				 console.log("Invalid Login");
					ejs.renderFile('./views/failLogin.ejs',function(err, result2) {
				        // render on success
				        if (!err) {
				            res.end(result2);
				        }
				        // render or error
				        else {
				            res.end('An error occurred');
				            console.log(err);
				        }
				    });
				 }
			}
	}
	sql.fetch(display,query);
	
	}

exports.home=home;
exports.afterlogin=afterlogin;