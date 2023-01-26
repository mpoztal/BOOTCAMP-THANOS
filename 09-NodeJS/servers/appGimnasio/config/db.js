// TODO: Mover datos a fichero de entorno

const mysql = require('mysql2');// 1º siempre requiero la libreria

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'mysql1234',
    port: 3306,
    database: 'gimnasio'
});

global.db = pool;//Esto quiere decir, cada vez q yo lance db, saltará el pool y este x si mismo lanza querys