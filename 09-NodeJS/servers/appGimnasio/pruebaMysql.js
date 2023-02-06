const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '192.168.1.201',
    user: 'root',
    password: 'CqpPBQwwChL94Egn',
    port: 3306,
    database: 'gimnasio'
});

connection.connect((err) => {
    console.log(err);
    // connection.query('select * from clientes', (err, result) => {
    //     console.log(err);
    //     console.log(result);

    //     connection.destroy();
    // });

    // const nombre = 'Roberto';
    // connection.query(
    //     'insert into profesores (nombre, experiencia, hora_entrada, hora_salida) values (?, ?, ?, ?)',
    //     [nombre, 23, '08:00', '14:30'],
    //     (err, result) => {
    //         console.log(err);
    //         console.log(result);
    //     }
    // );

    connection.query(
        'select c.*, p.nombre as nombre_profesor from clientes c join profesores p on c.profesor_id = p.id where c.id = ?',
        [98],
        (err, result) => {
            console.log(err);
            console.log(result);
        }
    );


});