const fs = require('fs');

const exist = fs.existsSync('./bin');
if (exist) {
    console.log('El directorio ya está creado');
} else {
    fs.mkdir('bin', (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('El directorio se ha creado');
        }
    });
}