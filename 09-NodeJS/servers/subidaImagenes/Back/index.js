const express = require('express');
const cors = require('cors');
const multer = require('multer');
const upload = multer({ dest: 'public/images' });
const fs = require('fs');

const app = express();

// Config de la app
app.use(cors());
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.post('/api/contactos', upload.single('imagen'), (req, res) => {
    console.log(req.file)
    const newPath = `${req.file.destination}/${req.file.originalname}`;
    fs.renameSync(req.file.path, newPath);

    req.body.imagen = `images/${req.file.originalname}`;

    // Inserción en BD

    res.json(req.body);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
})