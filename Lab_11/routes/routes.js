const filesystem = require('fs');

const requesthandler = (request, response) =>
{
    console.log("Hola Mundo");

    if(request.url === "/"){
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        response.write('<head><title>A01274966_Lab5</title></head>');
        response.write('<body><header><h3>Julio Cesar Gomez Gonzalez A01274966</h3>');
        response.write('<h1>Lab 10: Rutas y formas</h1></header>');
        response.write('<section><div><h2>Rutas Desponibles:</div>');
        response.write('<ul><li><a href="/">Homepage</a></li>');
        response.write('<li><a href="/ruta1">Ruta 1</a></li>');
        response.write('<li><a href="/ruta2">Ruta 2</a></li>'); 
        response.write('<li><a href="/agregararchivo">Agregar Archivo</a></li>');
        response.write('<li><a href="/asdf">Error 404</a></li></ul>');
        response.write('</section><body></body></html>');
        response.end();
    }
    else if (request.url === "/ruta1"){
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        response.write('<head><meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>Ruta_1</title></head>');
        response.write('<body><header><h3>Julio Cesar Gomez Gonzalez A01274966</h3>');
        response.write('<h1>Ruta 1</h1></header>');
        response.write('<h3>───▄▀▀▀▄▄▄▄▄▄▄▀▀▀▄───</h3>');
        response.write('<h3>───█▒▒░░░░░░░░░▒▒█───</h3>');
        response.write('<h3>────█░░█░░░░░█░░█────</h3>');
        response.write('<h3>─▄▄──█░░░▀█▀░░░█──▄▄─</h3>');
        response.write('<h3>█░░█─▀▄░░░░░░░▄▀─█░░█</h3>');
        response.write('<section><div><h2>Rutas Desponibles:</div>');
        response.write('<ul><li><a href="/">Homepage</a></li>');
        response.write('<li><a href="/ruta1">Ruta 1</a></li>');
        response.write('<li><a href="/ruta2">Ruta 2</a></li>'); 
        response.write('<li><a href="/agregararchivo">Agregar Archivo</a></li>');
        response.write('<li><a href="/asdf">Error 404</a></li></ul>');
        response.write('</section><body></body></html>');
        response.end();
    }
        else if (request.url === "/ruta2"){
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        response.write('<head><meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>Ruta_2</title></head>');
        response.write('<body><header><h3>Julio Cesar Gomez Gonzalez A01274966</h3>');
        response.write('<h1>Ruta 2</h1></header>');
        response.write('<h3>──────▄▀▄─────▄▀▄───</h3>');
        response.write('<h3>─────▄█░░▀▀▀▀▀░░█▄───</h3>');
        response.write('<h3>─▄▄──█░░░░░░░░░░░█──▄▄───</h3>');
        response.write('<h3>█▄▄█─█░░▀░░┬░░▀░░█─█▄▄█───</h3>');
        response.write('<section><div><h2>Rutas Desponibles:</div>');
        response.write('<ul><li><a href="/">Homepage</a></li>');
        response.write('<li><a href="/ruta1">Ruta 1</a></li>');
        response.write('<li><a href="/ruta2">Ruta 2</a></li>'); 
        response.write('<li><a href="/agregararchivo">Agregar Archivo</a></li>');
        response.write('<li><a href="/asdf">Error 404</a></li></ul>');
        response.write('</section><body></body></html>');
        response.end();
    }

    else if (request.url === "/agregararchivo" && request.method === "GET") {
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        response.write('<head><meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>Agrega_Archivo</title></head>');
        response.write('<body><header><h3>Julio Cesar Gomez Gonzalez A01274966</h3>');
        response.write('<h1>Agrega Archivo</h1></header>');
        response.write('<h3> Agrega contenido al archivo de texto</h3>');
        response.write('<form action = "agregararchivo" method ="POST"><input type = "text" name= "nombre"><input type= "submit" value= "Guardar Texto"></form>');
        response.write('<section><div><h2>Rutas Desponibles:</div>');
        response.write('<ul><li><a href="/">Homepage</a></li>');
        response.write('<li><a href="/ruta1">Ruta 1</a></li>');
        response.write('<li><a href="/ruta2">Ruta 2</a></li>'); 
        response.write('<li><a href="/agregararchivo">Agregar Archivo</a></li>');
        response.write('<li><a href="/asdf">Error 404</a></li></ul>');        
        response.write('</section><body></body></html>');
        response.end();
    }
    
    else if (request.url === "/agregararchivo" && request.method === "POST") {
        var texto;
        request.on('data', (dato) => {
            texto = dato;
        });

        request.on('end', () => {

            const datos_escritos = Buffer.from(texto).toString();
            const datos_escritos2 = datos_escritos.split('=')[1];
            var txt = datos_escritos2.replace(/[+]/gi, ' ')
            filesystem.writeFileSync('archivo.txt', txt);
        })
    }

        else{
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        response.write('<head><meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>Page not Found</title></head>');
        response.write('<body><header><h3>Julio Cesar Gomez Gonzalez A01274966</h3>');
        response.write('<h1>OOPS!! ERROR 404</h1></header>');
        response.write('<h1>PAGE NOT FOUND</h1></header>');
        response.write('<section><div><h2>Rutas Desponibles:</div>');
        response.write('<ul><li><a href="/">Homepage</a></li>');
        response.write('<li><a href="/ruta1">Ruta 1</a></li>');
        response.write('<li><a href="/ruta2">Ruta 2</a></li>'); 
        response.write('<li><a href="/agregararchivo">Agregar Archivo</a></li>');
        response.write('<li><a href="/asdf">Error 404</a></li></ul>');        
        response.write('</section><body></body></html>');
        response.end();
    }
}
module.exports = requesthandler;