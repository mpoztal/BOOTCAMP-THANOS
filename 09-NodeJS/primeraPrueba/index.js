// 1º SE REQUIERE LA LIBRERIA QUE QUEREMOS USAR.
const axios = require('axios').default;      
const colors = require('colors'); // commonJS
const dayjs = require('dayjs');
const exec = require('child_process').exec;

const { mul } = require('./operaciones');

console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass

// axios.get('https://rickandmortyapi.com/api/character')
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error.message));


// 2º LLAMAMOS AL MÉTODO O TAREA 
const diferencia = dayjs('2022-09-12').diff('2020-07-20', 'years');
console.log(diferencia);
console.log(dayjs().add(5, 'minutes').format('DD-MM-YYYY HH:mm.ss'));

console.log(mul(4, 8));

console.log(__dirname);
console.log(__filename);

const path = '/Users/mario/Documents/...'

console.log(process.argv);

exec('git init && git add . && git commit -m "Mensaje del commit"');