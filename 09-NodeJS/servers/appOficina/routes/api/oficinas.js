const router = require('express').Router();

const Oficina = require('../../models/oficina.model');

router.get('/', async (req, res) => {
    try {
        const oficinas = await Oficina.find().populate(['director', {
            path: 'departamentos', populate: {
                path: 'manager'
            }
        }]);
        res.json(oficinas);
    } catch (err) {
        res.json({ error: err.message });
    }
});

module.exports = router;


/* 
- Express con PUG
- Nombre de la app: chat
- Base de datos: chat
- Tipo de BD: MongoDB
- Dependencias: mongoose dotenv cors
*/