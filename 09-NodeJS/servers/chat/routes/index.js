const express = require('express');
const router = express.Router();

const Mensaje = require('../models/mensaje.model');

/* GET home page. */
router.get('/', async function (req, res, next) {
  // Extraigo los 5 últimos mensajes
  const mensajes = await Mensaje.find().sort({ createdAt: -1 }).limit(5);

  res.render('index', { mensajes });
});

module.exports = router;
