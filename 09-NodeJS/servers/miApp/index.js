const express = require('express'); //1º requiero la libreria (express)

// Extraigo los valores del fichero de entorno
//Se crea para poder gestionar los puertos.

require('dotenv').config();//En la terminal se instala(npm install dotenv)

const app = express(); //2º creo ó genero la aplicacion express

app.get('/', (req, res) => {  // Funcion manejadora con método get, post, put...
    res.end('Mi Petición GET sobre localhost:3005/');
});




// POST http://localhost:3005/create
app.post('/create', (req, res) => {
    res.end('Mi Petición POST sobre localhost:3005/create');
});

// PUT http://localhost:3005/product/edit
app.put('/product/edit', (req, res) => {
    res.end('Mi Petición PUT');
});

//OPCION 1 let PORT = 3000;
// if (process.env.PORT) {
//     PORT = process.env.PORT;
// }

// OPCION 2 const PORT = process.env.PORT ? process.env.PORT : 3000;





//OPCION 3 es la más legible
let PORT = process.env.PORT || 3000;
//process.env.PORT     INDICA Q AHORA EL PUERTO ES GENERICO
app.listen(PORT, () => {   //3º Ponemos a escuchar la aplica. sobre un puerto en concreto
    console.log('El Servidor escuchando en el puerto ' + PORT);
}); 