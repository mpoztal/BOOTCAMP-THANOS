const { executeQuery } = require("../helpers/utils");

const getAll = () => {
    return executeQuery('select * from profesores');
}

module.exports = { getAll };