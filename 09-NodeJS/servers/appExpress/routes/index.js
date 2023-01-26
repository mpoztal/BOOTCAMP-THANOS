const router = require('express').Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/contacto', (req, res) => {
  res.end('Ruta GET /contacto');
})

module.exports = router;
