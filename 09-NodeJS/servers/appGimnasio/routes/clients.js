
// 1º Creamos el Clients dentro del routes
const router = require('express').Router();  //1ºA


// Crearemos todas las rutas con el verbo get: peticiones, formularios para nuevos clientes, form para editar clientes y
//borrado de clientes.
router.get('/', (req, res) => {
    res.send('Petición GET /clients');
});

router.get('/new', (req, res) => {
    res.send('Formulario para nuevos clientes');
});

router.get('/edit/:clientId', (req, res) => {
    res.send('Formulario para editar clientes');
});

router.get('/delete/:clientId', (req, res) => {
    res.send('Borra un cliente');
});

// Creamos los post
router.post('/create', (req, res) => {
    res.send('Crea un cliente en la BD');
});

router.post('/update', (req, res) => {
    res.send('Actualiza un cliente en la BD');
});

module.exports = router;   //1ºB