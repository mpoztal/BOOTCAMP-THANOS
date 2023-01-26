const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const oficinaSchema = new Schema({
    nombre: String,
    direccion: String,
    departamentos: [{ type: Schema.Types.ObjectId, ref: 'departamento' }],
    director: { type: Schema.Types.ObjectId, ref: 'empleado' }
});

module.exports = mongoose.model('oficina', oficinaSchema);