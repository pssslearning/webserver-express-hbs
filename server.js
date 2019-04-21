const express = require('express');
const app = express();
const hbs = require('hbs');

// HBS Helpers
require('./hbs/helpers');

// Heroku: obtener puerto desde las variables de entorno
const port = process.env.PORT || 3000;

// EXPRESS
app.use(express.static(__dirname + '/public'));

// Express Handlebars - HBS view engine
hbs.registerPartials(__dirname + '/views/hbs_partials', () => {
    console.log('HBS Partials Registrados');
})
app.set('view engine', 'hbs');

// Handlers
app.get('/', (req, res) => {
    res.render('home', {
        textoVariable: 'Nam dui libero, imperdiet sed magna a, auctor sodales orci.'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Servidor Express levantado. Escuchando peticiones en el puerto ${port}`);
    console.log(`Dirname: ${__dirname}`);
});