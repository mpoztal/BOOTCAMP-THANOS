const router = require('express').Router();

// GET http://localhost:3000/users
router.get('/', function (req, res, next) {
  res.send('Mi respond with a resource');
});

router.get('/view/:userId', (req, res) => {
  const { userId } = req.params;
  console.log(userId);
  res.end('Petición view/userId ' + userId);
});

router.put('/edit', (req, res) => {
  res.end('Peticion PUT /users/edit');
});

router.post('/new/create', (req, res) => {
  res.end('Ruta POST /users/new/create');
});

module.exports = router;
