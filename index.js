var mysql = require('mysql');

var con = mysql.createConnection({
  host: "us-cdbr-east-02.cleardb.com",
  user: "b2b800ec04abfa",
  password: "9ccdfa55",
  database: "heroku_46d8c893b61bb88"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM jewels", function (err, result, fields) {
    if (err) throw err;
    console.log(result[0]);
  });
});