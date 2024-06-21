const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'yourusername',
  password: 'yourpassword',
  database: 'healing_homeopathy'
});

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected...');
});

module.exports = db;
