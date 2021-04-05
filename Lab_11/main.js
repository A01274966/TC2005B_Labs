const http = require('http');
const archivo = require('./routes.js');

const server = http.createServer(archivo);

server.listen(8000);

