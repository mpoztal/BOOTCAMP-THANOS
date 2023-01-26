const router = require('express').Router();

router.get('/view', (req, res) => {
    res.end('Ruta GET /clients/view');
});

module.exports = router;