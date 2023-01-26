/**
 * 
 * Mostrar por consola el contenido de los ficheros con extensión .md
 * 
 * - (A MANO) Crear un directorio llamado 'ficheros' y colocar dentro ficheros de varios tipos (curriculum.pdf, entrega.csv, uno.md, prueba.md...)
 * - 1 - Listar todos los ficheros dentro de la carpeta
 * - 2 - Leer solo aquellos que tengan extensión .md
 * 
 */

const fsPromises = require('fs/promises')
const fs = require('fs');
// OPCION 1
// fsPromises.readdir('./ficheros')
//     .then(files => {
//         console.log(files);      // Que es files? Un Array de strings x eso se hace un console.log
//         for (let file of files) {  // Recorremos el array de ficheros para poder extraer aquellos q tengan extensión md
//             if (file.endsWith('.md')) {  // Si acaba en md...
//                 fsPromises.readFile(`./ficheros/${file}`, 'utf-8')  // saca el fichero
//                     .then(data => console.log(data));
//             }
//         }
//     })
//     .catch(err => console.log(err.message));


// OPCION 2
// fsPromises.readdir('./ficheros')
//     .then(files => files.filter(file => file.endsWith('.md')))
//     .then(async filesMd => {
//         for (let file of filesMd) {
//             const data = await fsPromises.readFile(`./ficheros/${file}`, 'utf-8');
//             console.log(data);
//         }
//     })
//     .catch(err => console.log(err.message));

// OPCION 3 (Más optimizada)

fs.readdir('./ficheros', (err, files) => {
    files.filter(file => file.endsWith('.md'))
        .forEach(file => {
            const data = fs.readFileSync(`./ficheros/${file}`, 'utf-8');
            console.log(data);
        });
});