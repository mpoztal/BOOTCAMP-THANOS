// Recupera el contenido de un fichero

const fs = require('fs');
const fsPromises = require('fs/promises');

// 1º opción (sincrona)
const content = fs.readFileSync('../primeraPrueba/package.json', 'utf-8');
console.log(content);
// 2º opción (asincrona)
fs.readFile('../primeraPrueba/package.json', 'utf-8', (err, data) => {
    console.log(err);
    console.log(data);
});
// 3º opción (promesa)
fsPromises.readFile('../primeraPrueba/package.json', 'utf-8')
    .then(data => console.log(data))
    .catch(err => console.log(err));