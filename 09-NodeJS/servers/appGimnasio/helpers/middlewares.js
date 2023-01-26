const jwt = require('jsonwebtoken');
const dayjs = require('dayjs');

const User = require('../models/user.model');

const checkToken = async (req, res, next) => {
    // 1 - Comprobar si recibimos el token en las cabeceras
    if (!req.headers['authorization']) {
        return res.status(401).json({ error: 'Necesitas la cabecera de autorización' })
    }

    const token = req.headers['authorization'];

    // 2 - Comprobar si el token es correcto
    let obj;
    try {
        obj = jwt.verify(token, 'en un lugar de la mancha');
    } catch (err) {
        return res.status(401).json({ error: 'El token no es correcto' });
    }

    // 3 - Comprobar si el token está caducado
    if (dayjs().unix() > obj.exp_date) {
        return res.status(401).json({ error: 'El token está caducado' });
    }

    // ¿Cómo recupero el usuario que hace login?
    req.user = await User.getById(obj.user_id);

    next();
}

const checkAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(401).json({ error: 'Solo disponible para admins' });
    }
    next();
}

const checkRole = (role) => {
    return (req, res, next) => {
        if (req.user.role !== role) {
            return res.json({ error: 'No tienes permisos' });
        }
        next();
    }
}

module.exports = {
    checkToken, checkAdmin, checkRole
}