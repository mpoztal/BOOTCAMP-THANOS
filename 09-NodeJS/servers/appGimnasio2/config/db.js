const mysql = require('mysql2');  // 1º siempre requiero la libreria

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE

//Cuando mostraba los datos y se hace público y arriba cómo quedaría para ocultarlos
    // host: '192.168.1.201', 
    // user: 'root',
    // password: 'CqpPBQwwChL94Egn',
    // port: 3306,
    // database: 'gimnasio'
});

global.db = pool; 