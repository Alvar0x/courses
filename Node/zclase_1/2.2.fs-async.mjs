import fs from 'node:fs';

// Obtener estadísticas del archivo 'file.txt'
fs.stat('./file.txt', (error, stats) => {
    if (error) {
        console.error(error.message);
        return;
    }

    console.log('Mostrando estadísticas de \'file.txt\':');
    console.log('Es archivo: ' + stats.isFile());
    console.log('Es directorio: ' + stats.isDirectory());
    console.log('Es enlace simbólico: ' + stats.isSymbolicLink());
    console.log('Tamaño: ' + stats.size);
});

// Leer archivo 'file.txt'
fs.readFile('./file.txt', 'utf-8', (error, data) => {
    if (error) {
        console.error(error.message);
        return;
    }

    console.log('\nMostrando contenido de \'file.txt\' ...');
    console.log(data);
});

// Leer archivo 'file2.txt'
fs.readFile('./file2.txt', 'utf-8', (error, data) => {
    if (error) {
        console.error(error.message);
        return;
    }

    console.log('\nMostrando contenido de \'file2.txt\' ...');
    console.log(data);
});
