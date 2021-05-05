const mysql = require ('mysql2')
require('dotenv').config()

const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
};

const connection = mysql.createConnection(config)
connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Conectado com sucesso!');
	}
});

module.exports = connection;