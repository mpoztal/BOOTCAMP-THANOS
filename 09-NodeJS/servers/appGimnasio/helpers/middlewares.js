// Middlewares son funciones que se colocan entre bolques de código q ya están hechos
const jwt = require('jsonwebtoken');
const dayjs = require('dayjs');

const User = require('../models/user.model'); // Requiero del fich. user model para poder usar el getById


const checkToken = async (req, res, next) => {

    // 1º Comprobar si recibimos el token en las cabeceras

    if(!req.headers['authorization']) {
        return res.status(401).json({ error: 'Necesitas la cabecera de autorización'})
    }
    const token = req.headers['authorization'];

    // 2 - Comprobar si el token es correcto

    let obj;
    try {         
        obj = jwt.verify(token, 'en un lugar de la mancha');
        
    }catch (err) {
        return res.status(401).json({ error: 'El token no es correcto'});
    }

    // 3 - Comprobar si el token está caducado
    if(dayjs().unix() > obj.exp_date) {
        return res.status(401).json({ error: 'El token está caducado' });
    }

    // 4 - Como recupero el usuario logado?
    req.user = await User.getById(obj.user_id);
    //console.log(user);


    next();
}

// checkAdmin
// Si el usuario logado es "admin", dejamos continuar
// Si no es admin, retornamos la respuesta con error     Ver fich.api.js debe de estar checkAdmin requerido.
const checkAdmin = (req, res, next) => {
    console.log(req.user);
    if(req.user.role !== 'admin') {
        return res.status(401).json({ error: 'Debes de ser Admin' });
    }
    next();

}

// Funcion q con un parametro me devuelva otra función para poder utitzarla
const checkRole = (role) => {
    return (req, res, next) => {
        if (req.user.role !== role ) {
            return res.json({ error: 'No tienes permisos'});
        }
        next();
    }
}


module.exports = {
    checkToken, checkAdmin, checkRole
}

   