//Nadie crea así un servidor, se apoyan en bibliotecas.

const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);
    res.end('Jelouuu server!');
});

server.listen(3000);