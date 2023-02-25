const router = require('express').Router();
const bcrypt = require('bcryptjs');// Para encriptar una password, 1º requiero 
const { body, validationResult } = require('express-validator');
const { createToken } = require('../../helpers/utils');
// const { createToken } = require('../../helpers/utils');

const User = require('../../models/user.model');

router.post('/register',//1º parametro, la URL
    body('username')//2º PARAMETRO, Toda ésta ejecución ...comprobaciones contra el usrname
        // Concatenaciones de metodos que nos van validando. .exists(),.withMessage(),.isLength()...
        .exists() //Si no existe username...
        .withMessage('El campo username es requerido') //..el campo es requerido, concatenamos funciones
        .isLength({ min: 3 })
        .withMessage('Debe tener una longitud mínima de 3 caracteres'),

        //Validaciones contra el email
    body('email')
        .exists()
        .withMessage('El campo email es requerido')
        //.isEmail()
        .matches(/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
        .withMessage('Debe de tener el formato correcto')
        .custom((value) => {
                return value.includes('codehouse.com')  // Si el valor es correcto retorno true, si es incorrecto retorno false.
            })
        .withMessage('Debe tener dominio codehouse.com')

    , async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {   // Si no exixte el error...
        return res.json(errors.mapped());
    }



    try {
        console.log(req.body)
        // 2º Usamos versión Sincrona   (bcrypt.hashSync) 
        req.body.password = bcrypt.hashSync(req.body.password, 11);

        const result = await User.create(req.body);
        res.json(result);
    } catch (err) {
        res.json({ error: err.message });
    }

});
   
   

 router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    //Vamos a mirar a ver si exixte el email en la base de datos
    const user = await User.getByEmail(email);

    if (!user) {
        return res.json({ error: 'Error en email y/o contraseña' });
    }
    // ¿Coinciden las password? cómo comparamos las password la q el usuario introduce 12345 y la encriptada
    const equals = bcrypt.compareSync(password, user.password);
                //password---esta nos viene del body y está sin encriptar y user.password--nos viene de DB y está encriptada

    if (!equals) {
        return res.json({ error: 'Error en email y/o contraseña'});
    }

    res.json({   //Aquí definimos la respuesta, lo que a posteriori verá el front
        success: '¡Login correcto!', 
        token: createToken(user)
    });
 });


module.exports = router;