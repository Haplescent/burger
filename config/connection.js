const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createConnection({
  host: "umabrisfx8afs3ja.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "k7xp3ohfhasyaw7z",
  password: process.env.PASSWORD,
  database: "grcbjo3rydlpiea1",
});

module.exports = connection;
