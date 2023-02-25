const dayjs = require('dayjs'); // 1º Requerimos la librería
const jwt = require('jsonwebtoken');

/**
 * Ejecuta una sentencia SQL y nos devuelve un array/objeto con el resultado
 * @param {*} sql Sentencia SQL a ejecutar
 * @param {*} arr Array con los valores
 * @returns 
 */
const executeQuery = (sql, arr = []) => {
    return new Promise((resolve, reject) => {
        db.query(sql, arr, (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}

/**
 * Ejecuta una sentencia SQL y nos devuelve un único elemento.ó Null si no existe
 * @param {string} sql Sentencia SQL a ejecutar
 * @param {any[]} arr Array con los valores
 * @returns 
 */
const executeQueryOne = (sql, arr = []) => {
    return new Promise((resolve, reject) => {
        db.query(sql, arr, (err, result) => {
            if (err) reject(err);
            if (result.length === 0) resolve(null);
            resolve(result[0]);
        })
    });
}

const createToken = (user) => {  // 2º Aquí la utilizamos
    const obj = {
        user_id: user.id,// Este campo  user_id y exp_date, aparecen en consola cuando logueamos. { user_id: 26, exp_date: 1676018749, iat: 1676018449 }
        exp_date: dayjs().add(8, 'minutes').unix()  //Fecha de expiración
    }
    return jwt.sign(obj, 'en un lugar de la mancha');//1º parametro del sign es el payload(obj--le hemos puesto nosotros) 2º parametro un string(clave)
}



module.exports = {
    executeQuery, executeQueryOne, createToken
}