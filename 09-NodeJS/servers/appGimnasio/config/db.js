// TODO: Mover datos a fichero de entorno
// Conexion a servidor de base de datos.

const mysql = require('mysql2');  // 1º siempre requiero la libreria

const pool = mysql.createPool({
    host: '192.168.1.201', // Dirección del servidor
    user: 'root',
    password: 'CqpPBQwwChL94Egn',
    port: 3306,
    database: 'gimnasio'
});

global.db = pool;  //Esto quiere decir, cada vez q yo acceda a db, saltará el pool y este x si mismo lanza querys