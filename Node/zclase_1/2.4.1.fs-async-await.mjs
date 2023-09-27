import fs from 'node:fs/promises';

// En CommonJS no se pueden utilizar directamente métodos
// con await (Top Level Await), y habría que encerrarlos
// en métodos async, pero con ECMA Script Modules sí que
// podemos hacerlo

// Estadísticas del archivo 'file.txt'
console.log('Obteniendo estadísticas de \'file.txt\':');
const stats = await fs.stat('./file.txt');
console.log('Es archivo: ' + stats.isFile());
console.log('Es directorio: ' + stats.isDirectory());
console.log('Es enlace simbólico: ' + stats.isSymbolicLink());
console.log('Tamaño: ' + stats.size);

// Leer archivo 'file.txt'
console.log('\nLeyendo \'file.txt\' ...');
const data1 = await fs.readFile('./file.txt', 'utf-8');
console.log(data1);

// Leer archivo 'file2.txt'
console.log('\nLeyendo \'file2.txt\' ...');
const data2 = await fs.readFile('./file2.txt', 'utf-8');
console.log(data2);
