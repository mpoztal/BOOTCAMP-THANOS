const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const empleadoSchema = new Schema({
    nombre: String,
    apellidos: String,
    email: String,
    direccion: String,
    departamento: { type: Schema.Types.ObjectId, ref: 'departamento' }
});

module.exports = mongoose.model('empleado', empleadoSchema);