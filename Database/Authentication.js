// Database/Authentication.js

const mysql = require("mysql2");

const conn = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "Placement@24",
    database: "mysql",
});

conn.connect((err) => {
    if (err) throw err;
    console.log("DB connected");
});

module.exports = conn;
