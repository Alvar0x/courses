import fs from 'node:fs';

// Obtener estadísticas del archivo 'file.txt'
const fileStats = fs.statSync('./file.txt');
console.log(fileStats.isFile(), fileStats.isDirectory(), fileStats.isSymbolicLink(), fileStats.size);

// Leer archivo 'file.txt'
console.log('\nLeyendo el primer archivo ...');
const fileContent = fs.readFileSync('./file.txt', 'utf-8');
console.log(fileContent);

// Leer archivo 'file2.txt'
console.log('\nLeyendo el segundo archivo ...');
const file2Content = fs.readFileSync('./file2.txt', 'utf-8');
console.log(file2Content);
