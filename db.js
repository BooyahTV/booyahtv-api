require('dotenv').config()

var mysql = require('mysql');
var db_config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    charset : 'utf8mb4' // fix emojis
};
console.log(process.env.DB_HOST)
var pool  = mysql.createPool(db_config);

pool.getConnection(function(err, connection) {
  // connected! (unless `err` is set)
});

pool.on('error', function(err) {
  console.log(err.code); // 'ER_BAD_DB_ERROR' 
});

module.exports = pool;