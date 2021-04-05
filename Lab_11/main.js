const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const archivo = require('./routes/archivo');
const rutas = require('./routes/rutas');

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/archivo',archivo);
app.use('/rutas', rutas);


app.use( '/', (request, response, next) => {
    let html = '<h3>Julio Cesar Gomez Gonzalez A01274966</h3>';
    html += '<h1>Lab 11: Express</h1>'
    html += '<h2>Rutas Disponibles:</h2>\
                <ul>\
                <li><a href="/">Homepage</a></li>\
                <li><a href="/rutas/1">Ruta 1</a></li>\
                <li><a href="/rutas/2">Ruta 2</a></li>\
                <li><a href="/rutas/3">Ruta 3</a></li>\
                <li><a href="/rutas/4">Ruta 4</a></li>\
                <li><a href="/archivo/agregar">Agregar Archivo</a></li>\
                </ul>\
                ';
    
    response.send(html);
});

app.use( (request, response, next) => {
    response.status(404);
    response.send('<h1>OOPS!</h1><h1>PAGE NOT FOUND!</h1>');
});

app.listen(8000);