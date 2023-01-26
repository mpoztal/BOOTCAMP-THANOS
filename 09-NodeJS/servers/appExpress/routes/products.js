const router = require('express').Router();// 1º Extraigo ruter

router.get('/', (req, res) => {
    res.end('Petición GET sobre /products');
});

router.post('/', (req, res) => {
    res.end('Petición POST /products');
});

router.put('/', (req, res) => {
    res.end('Petición PUT /products');
});

router.put('/edit', (req, res) => {
    res.end('Ruta PUT /products/edit');
})

router.delete('/', (req, res) => {
    res.end('Petición DELETE /products');
});

module.exports = router;// 2º Exporto hacia fuera (el 3º paso en app.js)



