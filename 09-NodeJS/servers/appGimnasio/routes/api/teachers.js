const router = require('express').Router();

const Teacher = require('../../models/teacher.model');
const Client = require('../../models/client.model');

router.get('/', (req, res) => {
    Teacher.getAll()
        .then(result => res.json(result))
        .catch(err => res.json({ error: err.message }));
});

router.get('/names', async (req, res) => {
    try {
        const teachers = await Teacher.getAll();
        const names = teachers.map(value => value.nombre);
        res.json(names);
    } catch (err) {
        res.json({ error: err.message });
    }
});




router.get('/clients', async (req, res) => {
    try {
        // Recupero todos los profesores
        const teachers = await Teacher.getAll();
        // Para cada profesor tengo que recuperar sus clientes
        for (let teacher of teachers) {
            const clientes = await Client.getByTeacherId(teacher.id);
            teacher.clients = clientes;
        }
        res.json(teachers);
    } catch (err) {
        res.json({ error: err.message });
    }
});



router.get('/:teacherId', (req, res) => {
    const { teacherId } = req.params;

    Teacher.getById(teacherId)
        .then(result => res.json(result))
        .catch(err => res.json({ error: err.message }));
});



router.post('/', async (req, res) => {
    try {
        const { insertId } = await Teacher.create(req.body);
        const teacher = await Teacher.getById(insertId);
        res.json(teacher);
    } catch (err) {
        res.json({ error: err.message });
    }
});

module.exports = router;