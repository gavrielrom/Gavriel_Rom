const mysql = require('mysql2');
const DBconfig = require('./db.config');

// create the connection using the configuration
const connection = mysql.createConnection({
    host: DBconfig.HOST,
    user: DBconfig.USER,
    password: DBconfig.PASSWORD,
    database: DBconfig.DB
});

// open the connenction
connection.connect(error =>{
    if (error) throw error;
    console.log("successfully connected to DB");
});

// export the connection
module.exports= connection;