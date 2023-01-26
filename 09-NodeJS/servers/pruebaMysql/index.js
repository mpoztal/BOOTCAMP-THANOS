const express = require('express');
const Alumno = require('./models/alumno.model');
const Profesor = require('./models/profesor.model');

require('dotenv').config();
require('./config/db');

const app = express();

// GET /api/alumnos
app.get('/api/alumnos', async (req, res) => {
    const alumnos = await Alumno.getAll();
    res.json(alumnos);
});

app.get('/api/profesores', async (req, res) => {
    const profesores = await Profesor.getAll();
    res.json(profesores);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
})