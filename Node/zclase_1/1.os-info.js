const os = require('node:os');

console.log('Información sobre el sistema operativo:');
console.log('--------------------------------------');
console.log('Nombre: ' + os.platform());
console.log('Arquitectura: ' + os.arch());
console.log('Version: ' + os.release());
console.log('CPU: ' + os.cpus()[0].model);
console.log('Memoria libre: ' + Math.round(os.freemem() / 1024 / 1024));
console.log('Memoria total: ' + Math.round(os.totalmem() / 1024 / 1024));
console.log('Tiempo encendido: ' + Math.floor(os.uptime() / 3600) + 'h ' + Math.floor((os.uptime() % 3600) / 60) + 'min');
