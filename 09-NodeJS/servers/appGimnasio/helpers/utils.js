const dayjs = require('dayjs');
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

const createToken = (user) => {
    const obj = {
        user_id: user.id,
        exp_date: dayjs().add(5, 'minutes').unix()
    }
    return jwt.sign(obj, 'en un lugar de la mancha');
}

module.exports = {
    executeQuery, executeQueryOne, createToken
}