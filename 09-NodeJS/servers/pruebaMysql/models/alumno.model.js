const { executeQuery } = require("../helpers/utils")

const getAll = () => {
    return executeQuery('select * from alumnos');
}

module.exports = {
    getAll
}