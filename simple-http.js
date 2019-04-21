const http = require('http');


http.createServer((req, res) => {


    res.writeHead(200, {
        'X-GUID': '12345',
        'Content-Type': 'application/json'
    });

    let salida = {
        nombre: 'P.Sancho',
        edad: 60,
        url: req.url
    }

    res.write(JSON.stringify(salida));
    res.end();


}).listen(8080);

console.log('Web server arrancado. Escuchando en el puerto 8080');