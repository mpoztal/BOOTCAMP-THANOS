const { executeQuery, executeQueryOne } = require('../helpers/utils');
// Método getAll que devuelve todos los clientes
const getAll = () => {
    return executeQuery('select * from clientes');
};

const getOlderThan = (age) => {
    return executeQuery('select * from clientes where edad > ?', [age]);
}

const getBetweenAge = (min, max) => {
    return executeQuery('select * from clientes where edad > ? and edad < ?', [min, max]);
}

const create = ({ nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni }) => {
    return executeQuery('insert into clientes(nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni) values(?, ?, ?, ?, ?, ?, ?, ?, ?)', [nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni]);
}

const getById = (clientId) => {
    return executeQueryOne('select * from clientes where id = ?', [clientId]);
}

const update = (clientId, { nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni }) => {
    return executeQuery('update clientes set nombre = ?, apellidos = ?, direccion = ?, email = ?, edad = ?, genero = ?, cuota = ?, fecha_nacimiento = ?, dni = ? where id = ?', [nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni, clientId]);
}

const getByTeacherId = (teacherId) => {
    return executeQuery('select * from clientes where profesor_id = ?', [teacherId]);
}

const deleteById = (clientId) => {
    return executeQuery('delete from clientes where id = ?', [clientId]);
}

const getByPage = (page = 1, limit = 10) => {
    page = parseInt(page);
    limit = parseInt(limit);
    return executeQuery('select * from clientes limit ? offset ?', [limit, (page - 1) * limit])
}
// Esta es una query más complicada.
const getInfo = (limit = 10) => {
    return executeQueryOne('select count(*) as total, ceil(count(*)/?) as paginas from clientes', [parseInt(limit)]);
}

module.exports = {
    getAll, getOlderThan, getBetweenAge, create, getById, update, getByTeacherId, deleteById, getByPage, getInfo
};