const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
const { createToken } = require('../../helpers/utils');

const User = require('../../models/user.model');

router.post('/register',
    body('username')
        .exists()
        .withMessage('El campo username es requerido')
        .isLength({ min: 3 })
        .withMessage('Debe tener una longitud mínima de 3 caracteres'),
    body('email')
        .exists()
        .withMessage('El campo email es requerido')
        // .isEmail()
        .matches(/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
        .withMessage('Debe tener formato correcto')
        .custom((value) => {
            // Si el valor es correcto, retorno true, si es incorrecto retorno false
            return value.includes('codehouse.com')
        })
        .withMessage('Debe tener dominio codehouse.com')
    , async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.json(errors.mapped());
        }

        try {

            req.body.password = bcrypt.hashSync(req.body.password, 11);

            const result = await User.create(req.body);

            res.json(result);
        } catch (err) {
            res.json({ error: err.message });
        }
    });

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // ¿Existe el email en la base de datos?
    const user = await User.getByEmail(email);
    if (!user) {
        return res.json({ error: 'Error en email y/o contraseña' });
    }

    // ¿Coinciden las passwords (SHA-256)
    const equals = bcrypt.compareSync(password, user.password);
    if (!equals) {
        return res.json({ error: 'Error en email y/o contraseña' });
    }

    res.json({
        success: '¡Login correcto!',
        token: createToken(user)
    });
});

module.exports = router;