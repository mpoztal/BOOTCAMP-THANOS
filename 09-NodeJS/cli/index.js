const vorpal = require('vorpal')();
const chalk = vorpal.chalk;

const camaras = require('./camaras');

vorpal.delimiter('$ > ').show();

vorpal.command('test', 'Prueba que todo funciona')
    .action((args, callback) => {
        console.log(chalk.red('Todo funciona a la perfección!'));
        callback();
    });

vorpal.command('registro', 'Típicas preguntas de registro')
    .action(function (args, callback) {
        // npm inquirer
        this.prompt([
            { type: 'input', message: 'Introduce tu nombre ', name: 'nombre' },
            { type: 'confirm', message: '¿Puedo compartir pantalla?', name: 'pantalla' },
            { type: 'list', message: 'Elige tu lenguaje de programación', name: 'lenguaje', choices: ['Java', 'Python', 'Javascript', 'Ruby', 'PHP'] },
            { type: 'password', message: 'Introduce tu contraseña ', name: 'password' }
        ], function (respuestas) {
            console.log(respuestas);
            callback();
        });
    });

vorpal.command('camaras', 'Recupera una cámara aleatoria')
    .action(async function (args, callback) {
        await camaras();
        callback();
    })
