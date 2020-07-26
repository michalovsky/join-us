const express = require("express");
const app = express();
var faker = require('faker');
var mysql = require('mysql');
var bodyParser  = require("body-parser");
 
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/style"));

var connection = mysql.createConnection({
  host     : 'mysql',
  user     : 'root',
  password : 'password',
  database : 'join-us-db'
});

connection.connect();

// var users_data = [];
// for (var i=0; i<500; i++)
// {
//   users_data.push([faker.internet.email(), faker.date.past()]);
// }

// var query = 'INSERT INTO users (email, created_at) VALUES ?'
// connection.query(query, [users_data], function (error, results) {
//   if (error) throw error;
// });

app.get("/", (req,res) => {
  var q = "SELECT COUNT(*) AS count FROM users;";
  connection.query(q, function (error, results) {
    if (error) throw error;
    var count = results[0].count;
    // res.send("We have " + count + "users in database");
    res.render("home", {count: count});
  });
});

app.post("/register", function(req, res){
  var person = {
      email: req.body.email
  };
  connection.query('INSERT INTO users SET ?', person, function(err, result) {
      if (err) throw err;
      res.redirect("/");
  });
});

app.listen(8081, () => {
    console.log("Listening on port 8081");
});
