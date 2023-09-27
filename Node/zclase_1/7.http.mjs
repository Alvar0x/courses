import http from 'node:http';
import picocolors from 'picocolors';
import isPortAvailable from './8.free-port.mjs';

const server = http.createServer((request, response) => {
    console.log(picocolors.blue('Petición recibida'));
    response.end('Respuesta de prueba');
});

isPortAvailable(3000).then(returnedPort => {
    server.listen(returnedPort, () => {
        console.log(picocolors.blue(`El servidor está escuchando en http://localhost:${returnedPort}`));
    });
});
