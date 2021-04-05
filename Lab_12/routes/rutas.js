const express = require('express');
const router = express.Router();

router.get('/1', (request, response, next) => {
    let html = '<h3>Julio Cesar Gomez Gonzalez A01274966</h3>';
    html += '<h1>Ruta 1</h1>'
    html += '<h2>Rutas Disponibles:</h2>\
                <ul>\
                <li><a href="/">Homepage</a></li>\
                <li><a href="/rutas/1">Ruta 1</a></li>\
                <li><a href="/rutas/2">Ruta 2</a></li>\
                <li><a href="/rutas/3">Ruta 3</a></li>\
                <li><a href="/rutas/4">Ruta 4</a></li>\
                <li><a href="/agregararchivo">Agregar Archivo</a></li>\
                </ul>\
                ';
    response.send(html);
});

router.use('/2', (request, response, next) => {
    let html = '<h3>Julio Cesar Gomez Gonzalez A01274966</h3>';
    html += '<h1>Ruta 2</h1>'
    html += '<h2>Rutas Disponibles:</h2>\
                <ul>\
                <li><a href="/">Homepage</a></li>\
                <li><a href="/rutas/1">Ruta 1</a></li>\
                <li><a href="/rutas/2">Ruta 2</a></li>\
                <li><a href="/rutas/3">Ruta 3</a></li>\
                <li><a href="/rutas/4">Ruta 4</a></li>\
                <li><a href="/agregararchivo">Agregar Archivo</a></li>\
                </ul>\
                ';
    response.send(html);
});

router.use('/3', (request, response, next) => {
    let html = '<h3>Julio Cesar Gomez Gonzalez A01274966</h3>';
    html += '<h1>Ruta 3</h1>'
    html += '<h2>Rutas Disponibles:</h2>\
                <ul>\
                <li><a href="/">Homepage</a></li>\
                <li><a href="/rutas/1">Ruta 1</a></li>\
                <li><a href="/rutas/2">Ruta 2</a></li>\
                <li><a href="/rutas/3">Ruta 3</a></li>\
                <li><a href="/rutas/4">Ruta 4</a></li>\
                <li><a href="/agregararchivo">Agregar Archivo</a></li>\
                </ul>\
                ';
    response.send(html);
});

router.use('/4', (request, response, next) => {
    let html = '<h3>Julio Cesar Gomez Gonzalez A01274966</h3>';
    html += '<h1>Ruta 4</h1>'
    html += '<h2>Rutas Disponibles:</h2>\
                <ul>\
                <li><a href="/">Homepage</a></li>\
                <li><a href="/rutas/1">Ruta 1</a></li>\
                <li><a href="/rutas/2">Ruta 2</a></li>\
                <li><a href="/rutas/3">Ruta 3</a></li>\
                <li><a href="/rutas/4">Ruta 4</a></li>\
                <li><a href="/agregararchivo">Agregar Archivo</a></li>\
                </ul>\
                ';
    response.send(html);
});

module.exports = router;