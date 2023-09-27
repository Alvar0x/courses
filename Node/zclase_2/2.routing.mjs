import http from 'node:http';
import isPortAvailable from '../primera_clase/8.free-port.mjs';
import picocolors from 'picocolors';
import ditto from './pokemon/ditto.mjs';

const server = http.createServer((request, response) => {
    const { method, url } = request;
    response.setHeader('Content-Security-Policy', 'connect-src');

    switch (method.toLocaleUpperCase()) {
        case 'GET': {
            switch (url) {
                case '/': {
                    response.setHeader('Content-Type', 'text/plain;charset=utf-8');
                    response.end('Bienvenido a la página de inicio');
                    break;
                }
                case '/pokemon/ditto': {
                    response.setHeader('Content-Type', 'application/json');
                    response.end(JSON.stringify(ditto));
                    break;
                }
                default: {
                    response.statusCode = 404;
                    response.setHeader('Content-Type', 'text/plain;charset=utf-8');
                    response.end('No existe el endpoint \'' + request.url + '\'');
                }
            }
            break;
        }
        case 'POST': {
            switch (url) {
                case '/pokemon': {
                    let body = '';

                    // Los datos van llegando en trozos llamados 'chunks'. Conforme obtenemos
                    // los chunks, vamos juntándolos para tener el body completo
                    request.on('data', chunk => {
                        body += chunk.toString();
                    });

                    // Cuando hayan llegado todos los datos, el evento 'end' del request
                    // se activará y parseamos el string en JSON para poder manejarlos
                    request.on('end', () => {
                        const data = JSON.parse(body);
                        data.timestamp = Date.now();
                        // Ahora llamaríamos a una BD para guardar la información
                        // pero por ahora no. Sólamente vamos a devolver la misma
                        // información que hemos recibido para comprobaciones.
                        response.writeHead(201, { 'Content-Type': 'application/json' });
                        response.end(JSON.stringify(data));
                    });
                    break;
                }
                default: {
                    response.statusCode = 404;
                    response.setHeader('Content-Type', 'text/plain;charset=utf-8');
                    response.end('No existe el endpoint \'' + request.url + '\'');
                }
            }
            break;
        }
    }
});

isPortAvailable(3000).then(returnedPort => {
    server.listen(returnedPort, () => {
        console.log(picocolors.magenta('El servidor está escuchando en ') + picocolors.yellow(`http://localhost:${returnedPort}`));
    });
});
