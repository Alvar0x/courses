import Express from 'express';
import picocolors from 'picocolors';
import ditto from './pokemon/ditto.mjs';

const PORT = 3000;
const app = Express();

app.disable('x-powered-by');

// Middleware
// app.use((request, response, next) => {
//     if (request.method !== 'POST') return next();
//     if (request.headers['content-type'] !== 'application/json') return next();

//     // Aquí sólamente llegan peticiones POST con Content-Type: application/json
//     let body = '';

//     request.on('data', chunk => {
//         body += chunk.toString();
//     });

//     request.on('end', () => {
//         const data = JSON.parse(body);
//         data.timestamp = Date.now();
//         request.body = data;
//         next();
//     });
// });

// Esto hace exactamente lo mismo que el middleware de arriba
app.use(Express.json());

app.get('/', (request, response) => {
    response.send('<h1>Página de inicio</h1>');
});

app.get('/pokemon/ditto', (request, response) => {
    response.json(ditto);
});

app.post('/pokemon', (request, response) => {
    response.status(201).json(request.body);
});

// La última que va a intentar acceder, por lo que si llega hasta aquí
// devolvemos un 404 porque las que existen están arriba. El use() es
// para que entre con cualquier método utilizado en el request.
app.use((request, response) => {
    response.status(404).send('<h1>404 - Página no encontrada</h1>');
});

app.listen(PORT, () => {
    console.log(picocolors.magenta('El servidor está escuchando en ') + picocolors.yellow(`http://localhost:${PORT}`));
});
