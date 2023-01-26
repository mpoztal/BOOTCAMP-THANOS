const router = require('express').Router();

const Client = require('../../models/client.model');

// router.get('/', (req, res) => {
//     Client.getAll()
//         .then(result => res.json(result))
//         .catch(err => res.json({ error: err.message }));
// });

// Método que recupera TODOS los clientes
// router.get('/', async (req, res) => {
//     try {
//         const result = await Client.getAll();
//         res.json(result);
//     } catch (err) {
//         res.json({ error: err.message })
//     }
// });


router.get('/', async (req, res) => {
    // console.log(req.user);
    let { page, limit } = req.query;

    try {

        const result = await Client.getInfo(limit);

        const info = {
            total: result.total,
            pages: result.paginas,
            next: `http://localhost:3000/api/clients?page=${Number(page) + 1}`,
            prev: `http://localhost:3000/api/clients?page=${Number(page) - 1}`
        }

        const clientes = await Client.getByPage(page, limit);

        res.json({
            info,
            results: clientes
        });
    } catch (err) {
        res.json({ error: err.message });
    }
});

router.get('/older/:age', (req, res) => {
    const { age } = req.params;

    Client.getOlderThan(age)
        .then(result => res.json({ count: result.length, result }))
        .catch(err => res.json({ error: err.message }));
});

router.get('/between/:min/and/:max', (req, res) => {
    const { min, max } = req.params;

    Client.getBetweenAge(min, max)
        .then(result => res.json(result))
        .catch(err => res.json({ error: err.message }));
});

router.post('/', async (req, res) => {
    try {
        // Inserta un cliente en la BD
        const { insertId } = await Client.create(req.body);
        // Recupero el cliente por ID
        const newClient = await Client.getById(insertId);
        // Respondo con los datos del nuevo cliente
        res.json(newClient);
    } catch (err) {
        res.json({ error: err.message });
    }
});

router.put('/:clientId', (req, res) => {
    const { clientId } = req.params;

    Client.update(clientId, req.body)
        .then((result) => res.json(result))
        .catch((err) => res.json({ error: err.message }));
});

router.delete('/:clientId', (req, res) => {
    const { clientId } = req.params;

    Client.deleteById(clientId)
        .then((result) => res.json(result))
        .catch((err) => res.json({ error: err.message }));
});

module.exports = router;