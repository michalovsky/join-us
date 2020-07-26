var faker = require('faker');
var mysql = require('mysql');
 
var connection = mysql.createConnection({
  host     : 'mysql',
  user     : 'root',
  password : 'password',
  database : 'join-us-db'
});

connection.connect();

var q = "SELECT COUNT(*) FROM users;";

connection.query(q, function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});

connection.end();

console.log(faker.date.past());
console.log(faker.internet.email());