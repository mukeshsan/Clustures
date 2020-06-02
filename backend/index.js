var http = require("http");
var express = require('express');
var app = express();
var mysql      = require('mysql');
var bodyParser = require('body-parser');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'scart'
});
 
 
connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected with mysql database...')
})

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
}));

// Listen to server
var server = app.listen(3000, "127.0.0.1", function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Scart listening at http://%s:%s", host, port)
});

//rest api to get all customers
app.get('/users', function (req, res) {
   connection.query('select * from users', function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});