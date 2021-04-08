const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

const ruta1 = require("./routes/ruta1");
const ruta2 = require("./routes/ruta2");

app.use("/ruta1", ruta1);
app.use("/ruta2", ruta2);
// app.get('/agregararchivo', (request, response, next) => {
//     response.render('agregararchivo');
// });

app.use('/', (request, response, next) => {
    response.render('home');
});

app.use((request, response, next) => {
    response.status(404);
    response.send('<h1>OOPS!</h1><h1>PAGE NOT FOUND!</h1>');
});

app.listen(8000);