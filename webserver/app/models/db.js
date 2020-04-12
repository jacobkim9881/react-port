const mysql = require('mysql')
const dbConfig = require('../config/db.config')

const con = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
})

con.connect(err => {
    if (err) throw err;
    console.log('DB is connected.');
});

module.exports = con;