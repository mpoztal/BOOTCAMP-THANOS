const { executeQuery, executeQueryOne } = require("../helpers/utils");

const getAll = () => {
    return executeQuery('select * from profesores');
}

const getById = (teacherId) => {
    return executeQueryOne('select * from profesores where id = ?', [teacherId]);
}

const create = ({ nombre, experiencia, hora_entrada, hora_salida }) => {
    return executeQuery('insert into profesores (nombre, experiencia, hora_entrada, hora_salida) values (?, ?, ?, ?)', [nombre, experiencia, hora_entrada, hora_salida]);
}

module.exports = {
    getAll, getById, create
}