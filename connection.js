var mysql = require("mysql");
require("dotenv").config();

function createConnection() {
  var con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DB,
  });

  return con;
}

function connectAndExecuteQuery(query, callback) {
  var connection = createConnection();
  connection.connect(function (err) {
    if (err) {
      callback(err, null);
      return;
    }
    console.log("Connected!");

    connection.query(query, function (err, result) {
      connection.end(); // Cierra la conexión después de completar la consulta
      callback(err, result);
    });
  });
}

module.exports = { connectAndExecuteQuery };
