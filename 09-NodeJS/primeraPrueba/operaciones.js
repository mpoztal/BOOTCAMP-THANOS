const sumar = (a, b) => {
    return a + b;
}

const restar = (a, b) => {
    return a - b;
}

const multiplicar = (a, b) => {
    return a * b;
}

// EXPORTO AQUÍ PARA REQUERIRLO EN EL OTRO FICHERO.Ej.  const { mul } = require('./operaciones');
// POR LO TANTO SE USA exports para exportar y require para importar.
module.exports = {
    sum: sumar,
    res: restar,
    mul: multiplicar
}
