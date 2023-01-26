const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    department: String,
    available: Boolean,
    created_at: Date
});

productSchema.virtual('price_taxes').get(function () {
    return this.price * 1.21;
});

// Función que nos devuelva todos los productos que compartan departamento con otro producto concreto.
// product.sameDepartment();
productSchema.methods.sameDepartment = function () {
    return this.model('product').find({ department: this.department });
}

// Función que nos devuelva todos los productos disponibles
// Product.availables();
productSchema.statics.availables = function () {
    return this.model('product').find({ available: true });
}

module.exports = mongoose.model('product', productSchema);

// {
//     name: '',
//     price_taxes: 
// }