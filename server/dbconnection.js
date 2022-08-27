let mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Pa$$999Na22",
  database : 'scores'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});