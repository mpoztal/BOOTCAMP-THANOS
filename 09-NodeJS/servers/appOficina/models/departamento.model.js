const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const departamentoSchema = new Schema({
    nombre: String,
    descripcion: String,
    manager: { type: Schema.Types.ObjectId, ref: 'empleado' }
});

module.exports = mongoose.model('departamento', departamentoSchema);