const mongoose = require('mongoose');

const Product = require('./models/product.model');

(async () => {
    await mongoose.connect('mongodb://127.0.0.1/tienda-online');

    // await Product.deleteMany({});

    // Crear un producto
    // await Product.create({
    //     name: 'Pantalón pinza',
    //     description: 'Para salir de fiestuqui',
    //     price: 67,
    //     department: 'moda',
    //     available: false,
    //     created_at: new Date()
    // });

    // Recuperar documentos
    const products = await Product.find();
    // console.log(products.map(p => p.name));

    const productsModa = await Product.find({
        department: 'moda',
        available: true
    }).select({ name: 1, _id: 0 });

    // console.log(productsModa);

    const productsPrecio = await Product.find({
        price: { $gt: 50 } // $gte, $lt, $lte
    });
    // console.log(productsPrecio);

    const options = {
        $and: [
            { available: true },
            { price: { $lt: 30 } }
        ]
    }
    options.$and.push({ name: 'Lápiz rojo' });
    const productsOr = await Product.find(options)
    console.log(productsOr);

    await mongoose.disconnect();

})();