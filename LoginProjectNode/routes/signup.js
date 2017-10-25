/**
 * http://usejsdoc.org/
 */

var sql = require('./sql');
var ejs = require('ejs');

function home(req,res)
{
	ejs.renderFile('./views/signup.ejs',function(err,result){
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

function signup(req,res)
{
	//var query = "insert into users values ('"+ req.param("username")+ "','" + req.param("password")+"');";
		var query = "insert into users values ('"+ req.param("username")+ "','" + req.param("password")+"','"+req.param("fname")+"','"+req.param("lname")+"','"+req.param("gender")+"','"+req.param("dob")+"');";
	console.log(query);
	function display(error,result)
	{
		if (error)
			{
			 console.log("error" + error.message);
				ejs.renderFile('./views/failsignup.ejs',function(err, result2) {
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
		
		else
			{
			
				   console.log("valid signup");
				   ejs.renderFile('./views/Signin.ejs',{data:result}, function(error1,result1){
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
	}
	sql.fetch(display,query);
	}


exports.signup=signup;
exports.home= home;