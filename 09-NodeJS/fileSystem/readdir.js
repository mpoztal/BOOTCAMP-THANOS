// Recuperar todos los ficheros y directorios de una carpeta en concreto (4 fórmulas)
const fs = require('fs');
const fsPromises = require('fs/promises')

// 1 - Síncrona               parámetro:fichero ../primeraPrueba
const files = fs.readdirSync('../primeraPrueba');
console.log('SYNC', files);

// 2 - Asíncrona 1ºparámetro:fichero ../primeraPrueba 2ºparámetro:callback, una función anónima () => {}
fs.readdir('../primeraPrueba', (err, files) => {
    console.log(err);
    console.log('ASYNC', files);
});

// 3 - Promesas(para poder trabajar con promesas hay q hacer un nuevo require)

fsPromises.readdir('../primeraPrueba')
    .then((files) => console.log('PROM', files)) //   then se ejecuta cuando todo viene bien
    .catch((err) => console.log(err.message)); // se ejecuta cuando hay algún tipo de error

// 4 - Async await(este es un ejemplo muy raro)
(async () => {
    const filesV2 = await fsPromises.readdir('../primeraPrueba');
    console.log('PROM 2', filesV2);
})();