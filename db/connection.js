const mysql = require('mysql2');

//connect to database
const db = mysql.createConnection(
    {
        host:'localhost',
        //Your MySQL username
        user: 'root',
        password: '061483Love!',
        database: 'employeeDb'
    },
    console.log('Connected to the employee database')
)

module.exports = db;