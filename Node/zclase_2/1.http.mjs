import fs from 'node:fs';
import http from 'node:http';
import picocolors from 'picocolors';
import isPortAvailable from '../primera_clase/8.free-port.mjs';

const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/plain;charset=utf-8');

    if (request.url === '/') {
        response.end('Bienvenido a mi página de inicio');
    } else if (request.url === '/contacto') {
        response.end('Esta es la página de contacto');
    } else if (request.url === '/image') {
        fs.readFile('./segunda_clase/wallpaper.jpg', (error, data) => {
            if (error) {
                response.statusCode = 500;
                console.log(picocolors.red(error.message));
                response.end('Internal Server Error');
            } else {
                response.setHeader('Content-Type', 'image/jpg');
                response.end(data);
            }
        });
    } else {
        response.statusCode = 404;
        response.end('Página no encontrada');
    }
});

isPortAvailable(3000).then(returnedPort => {
    server.listen(returnedPort, () => {
        console.log(picocolors.magenta('El servidor está escuchando en ') + picocolors.yellow(`http://localhost:${returnedPort}`));
    });
});
