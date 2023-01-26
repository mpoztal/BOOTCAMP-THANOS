const router = require('express').Router();

const Departamento = require('../../models/departamento.model');
const Empleado = require('../../models/empleado.model');

router.get('/:departamentoId', async (req, res) => {
    const { departamentoId } = req.params;
    try {
        const departamento = await Departamento.findById(departamentoId).populate('manager');
        // Recupero todos los empleados del departamento
        const empleados = await Empleado.find({ departamento: departamentoId });

        const depObj = departamento.toObject();
        const emplArr = empleados.map(empleado => empleado.toObject());

        depObj.empleados = emplArr;

        res.json(depObj);
    } catch (err) {
        res.json({ error: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const nuevoDepartamento = await Departamento.create(req.body);
        res.json(nuevoDepartamento);
    } catch (err) {
        res.json({ error: err.message });
    }
});

module.exports = router;