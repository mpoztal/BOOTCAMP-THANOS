const router = require('express').Router();

router.use('/empleados', require('./api/empleados'));
router.use('/departamentos', require('./api/departamentos'));
router.use('/oficinas', require('./api/oficinas'));

module.exports = router;