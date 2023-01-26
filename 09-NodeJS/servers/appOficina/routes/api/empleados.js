const router = require('express').Router();

const Empleado = require('../../models/empleado.model');

router.get('/:empleadoId', async (req, res) => {
    const { empleadoId } = req.params;

    try {
        const empleado = await Empleado.findById(empleadoId)
            .populate(['departamento', {
                path: 'departamento', populate: 'manager'
            }]);
        res.json(empleado);
    } catch (err) {
        res.json({ error: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const nuevoEmpleado = await Empleado.create(req.body);
        res.json(nuevoEmpleado);
    } catch (err) {
        res.json({ error: err.message });
    }
});

module.exports = router;