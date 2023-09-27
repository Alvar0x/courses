import net from 'node:net';

export function isPortAvailable(desiredPort) {
    return new Promise((resolve, reject) => {
        const server = net.createServer();
        server.listen(desiredPort, () => {
            const { port } = server.address();
            server.close(() => {
                resolve(port);
            });
        });

        server.on('error', error => {
            if (error.code === 'EADDRINUSE') {
                isPortAvailable(0).then(port => resolve(port));
            } else {
                reject(error);
            }
        });
    });
}

export default isPortAvailable;
