const request = require('supertest');
const mongoose = require('mongoose');

const app = require('../../app');
const Product = require('../../models/product.model');

describe('Pruebas sobre la api de productos', () => {

    beforeAll(async () => {
        await mongoose.connect('mongodb://127.0.0.1/tienda-online');
    });

    afterAll(async () => {
        await mongoose.disconnect();
    });

    describe('GET /api/products', () => {

        let response;

        beforeAll(async () => {
            response = await request(app).get('/api/products').send();
        });

        it('debería devolver status 200', () => {
            expect(response.statusCode).toBe(200);
        });

        it('debería devolverme la respuesta en formato JSON', () => {
            expect(response.headers['content-type']).toContain('application/json');
        });

        it('debería devolver un array', () => {
            expect(response.body).toBeInstanceOf(Array);
        });

    });

    describe('POST /api/products', () => {

        let response;
        const newProduct = { name: 'Picadora Moulinex', description: 'Para picar cosas', price: 23, department: 'test', available: true, created_at: new Date() };
        beforeEach(async () => {
            response = await request(app).post('/api/products').send(newProduct);
        });

        afterAll(async () => {
            await Product.deleteMany({ department: 'test' });
        });

        it('debería devolver un status 201', () => {
            expect(response.statusCode).toBe(201);
        });

        it('debería devolver la respuesta en formato JSON', () => {
            expect(response.headers['content-type']).toContain('application/json');
        });

        // Si el _id viene definido
        // Si alguno de los datos que estamos insertando nos es devuelto en la respuesta
        it('debería insertar el producto en la BD', () => {
            expect(response.body._id).toBeDefined();
            expect(response.body.name).toBe(newProduct.name);
        });

    });

    describe('POST con validaciones /api/products', () => {
        it('debería devolver error si no recibe el name', async () => {
            const response = await request(app).post('/api/products').send({
                description: 'lo que sea', price: 123, department: 'test', available: true, created_at: '2022-09-10'
            });

            expect(response.body.name).toBeDefined();
            expect(response.body.name.msg).toBe('El campo nombre es requerido');
        });

        it('debería devolver error si el name es menor de 3 caracteres', async () => {
            const response = await request(app).post('/api/products').send({
                name: 'as', description: 'lo que sea', price: 123, department: 'test', available: true, created_at: '2022-09-10'
            });

            expect(response.body.name).toBeDefined();
            expect(response.body.name.msg).toBe('El campo nombre debe tener tamaño mínimo de 3');
        });

        it('debería devolver error si no está disponible el producto', async () => {
            const response = await request(app).post('/api/products').send({
                name: 'Prueba', description: 'lo que sea', price: 123, department: 'test', available: false, created_at: '2022-09-10'
            });

            expect(response.body.available).toBeDefined();
            expect(response.body.available.msg).toBe('Todas las inserciones deben estar disponibles');
        });
    })

    describe('PUT /api/products/IDPRODUCT', () => {

        const newProduct = { name: 'Picadora Moulinex', description: 'Para picar cosas', price: 23, department: 'test', available: true, created_at: new Date() };
        let product;
        let response;
        beforeEach(async () => {
            product = await Product.create(newProduct);
            response = await request(app).put(`/api/products/${product._id}`).send({ price: 19, department: 'otro' });
        });

        afterEach(async () => {
            await Product.findByIdAndDelete(product._id);
        })

        it('debería devolver status 200', () => {
            expect(response.statusCode).toBe(200);
        });

        it('debería devolver una respuesta en formato JSON', () => {
            expect(response.headers['content-type']).toContain('application/json');
        });

        it('debería devolver los datos actualizados', () => {
            expect(response.body.price).toBe(19);
            expect(response.body.department).toBe('otro');
        });
    });

    describe('DELETE /api/products/IDPRODUCT', () => {

        let response;
        let product;
        const newProduct = { name: 'Picadora Moulinex', description: 'Para picar cosas', price: 23, department: 'test', available: true, created_at: new Date() };
        beforeEach(async () => {
            product = await Product.create(newProduct);
            response = await request(app).delete(`/api/products/${product._id}`).send();
        });

        afterAll(async () => {
            await Product.deleteMany({ department: 'test' });
        });

        it('debería devolver status 200', () => {
            expect(response.statusCode).toBe(200);
        });

        it('debería devolver un objeto JSON', () => {
            expect(response.headers['content-type']).toContain('json');
        });

        it('debería borrarse de la base de datos', async () => {
            const productDel = await Product.findById(product._id);
            expect(productDel).toBeNull();
        });

    });

});