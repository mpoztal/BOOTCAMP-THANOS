const router = require('express').Router();
const Client = require('../models/client.model');
const dayjs = require('dayjs'); // librería de fecha
require('dayjs/locale/es');// librería para transforfar la fecha mas legible
dayjs.locale('es');// librería para que salga fecha en español

router.get('/', async (req, res) => {
    const clientes = await Client.getAll();
// Aq abajo he resuelto q a la fecha previa para cada cliente lo he modificado dándole otro formato
    for (let cliente of clientes) {
        cliente.fecha_nacimiento = dayjs(cliente.fecha_nacimiento).format('DD MMMM YYYY');
    }
    
    res.render('clients/index', {
        clientes
    });
});

router.get('/new', (req, res) => {
    res.render('clients/form');
});

router.get('/edit/:clientId', async (req, res) => {
    const { clientId } = req.params;
    const cliente = await Client.getById(clientId);
    cliente.fecha_nacimiento = dayjs(cliente.fecha_nacimiento).format('YYYY-MM-DD');
    res.render('clients/formUpdate', {cliente});
});

router.get('/delete/:clientId', async (req, res) => {
    const { clientId } = req.params;
    await Client.deleteById(clientId);
    res.redirect('/clients');
});


router.get('/:clientId', async (req, res) => {
    const { clientId } = req.params;
    const cliente = await Client.getById(clientId);
    cliente.fecha_nacimiento = dayjs(cliente.fecha_nacimiento).format('DD MMMM YYYY');   
    res.render('clients/view', { cliente });
});


router.post('/create', async (req, res) => {
    await Client.create(req.body);
    res.redirect('/clients');
});

router.post('/update', async (req, res) => {
    await Client.update(req.body.clientId, req.body);
    res.redirect('/clients');
    
});









module.exports = router; 