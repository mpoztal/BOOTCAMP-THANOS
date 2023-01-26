const router = require('express').Router();
const { checkSchema, validationResult } = require('express-validator');

const Product = require('../../models/product.model');
const User = require('../../models/user.model');

const { checkValidationErrors } = require('../../helpers/middlewares');
const createProductValidator = require('../../validators/createProduct.validator');

router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/add/:productId', async (req, res) => {
    const { productId } = req.params;

    req.user.products.push(productId);
    await req.user.save();

    res.json({ success: 'producto agregado' });
});

router.get('/cart', async (req, res) => {
    const user = await User
        .findById(req.user._id)
        .populate('products');
    res.json(user.products);
});

router.get('/taxes', async (req, res) => {
    const products = await Product.find();
    const result = [];
    for (let product of products) {
        const obj = {};
        obj.name = product.name;
        obj.price_tax = product.price_taxes;
        result.push(obj);
    }
    res.json(result);
});

router.get('/taxes_v2', async (req, res) => {
    const products = await Product.find();
    const result = products.map(product => ({ name: product.name, price_tax: product.price_taxes }));
    res.json(result)
});

router.get('/same', async (req, res) => {
    const p = new Product();
    p.name = 'Prueba';
    p.department = 'moda';
    const result = await p.sameDepartment();
    res.json(result);
});

router.get('/activos', async (req, res) => {
    const products = await Product.availables();
    res.json(products);
});

router.post('/',
    checkSchema(createProductValidator),
    checkValidationErrors,
    async (req, res) => {
        try {
            const product = await Product.create(req.body);
            res.status(201).json(product);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });

router.put('/:productId', async (req, res) => {
    const { productId } = req.params;
    try {
        const producto = await Product.findByIdAndUpdate(productId, req.body, { new: true });
        res.json(producto);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.delete('/:productId', async (req, res) => {
    const { productId } = req.params;
    try {
        const productDel = await Product.findByIdAndDelete(productId);
        res.json(productDel);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;