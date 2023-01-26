const router = require('express').Router();
const dayjs = require('dayjs');
require('dayjs/locale/es');
dayjs.locale('es');

const Client = require('../models/client.model');

router.get('/', async (req, res) => {
    const clientes = await Client.getAll();

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
    res.render('clients/formUpdate', { cliente });
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
})

// {
//   nombre: 'Laney',
//   apellidos: 'García',
//   direccion: '0 2nd Point',
//   edad: '64',
//   genero: 'm',
//   genero_r: 'm',
//   email: 'lmccamishm@last.fm',
//   dni: '352893494r',
//   cuota: '39.90',
//   fecha_nacimiento: '1995-02-14',
//   clientId: '23'
// }

module.exports = router;