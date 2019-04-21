// HBS Helpers

const hbs = require('hbs');

hbs.registerHelper('getAnio', () => {
    let fechaActual = new Date();
    let mesActual = fechaActual.getMonth();
    return (mesActual < 10 ?
        `0${mesActual}/${fechaActual.getFullYear()}` :
        `${mesActual}/${fechaActual.getFullYear()}`);
});

hbs.registerHelper('capitalizar', (texto) => {

    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] =
            palabra.charAt(0).toUpperCase() +
            palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');

});