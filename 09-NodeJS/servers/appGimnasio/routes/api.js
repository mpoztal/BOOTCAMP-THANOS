const router = require('express').Router();

const apiClientsRouter = require('./api/clients');  //1º me traigo la apiClientsRouter
const apiTeachersRouter = require('./api/teachers');
const apiUsersRouter = require('./api/users');

const { checkToken, checkAdmin, checkRole } = require('../helpers/middlewares');

// Si pasa a través de checkToken dispongo de los datos del usuario logado en req.user
router.use('/clients', checkToken, checkAdmin, apiClientsRouter); //2º lo exporto primero aquí para desp. utltizarlo fuera (app) de este fichero.
router.use('/teachers', checkToken, checkRole('regular'), apiTeachersRouter);
router.use('/users', apiUsersRouter);

module.exports = router;

