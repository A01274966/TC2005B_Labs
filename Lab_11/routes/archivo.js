const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/agregar', (request, response, next) => {
    let html = '<h3> Agrega contenido al archivo de texto</h3>';
    html += '<form action = "agregararchivo" method ="POST"><input type = "text" name= "nombre"><input type= "submit" value= "Guardar Texto"></form>';
response.send(html);
});

router.post('/agregar', (request, response, next) => {
        console.log(request.body.texto);
        filesystem.writeFileSync('archivo.txt', request.body.texto);
});

module.exports = router;