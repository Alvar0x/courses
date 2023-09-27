import fs from 'node:fs/promises';

// Si algún módulo no tiene el /promises, puedes convertirlo
// importando promisify de node:utils:
    // import promisify from 'node:utils';
    // const readFile = promisify(fs.readFile);

// Obtener estadísticas del archivo 'file.txt'
fs.stat('./file.txt')
    .then(stats => {
        console.log('Mostrando estadísticas de \'file.txt\':');
        console.log('Es archivo: ' + stats.isFile());
        console.log('Es directorio: ' + stats.isDirectory());
        console.log('Es enlace simbólico: ' + stats.isSymbolicLink());
        console.log('Tamaño: ' + stats.size);
    })
    .catch(error => {
        console.error(error);
    });

// Leer archivo 'file.txt'
fs.readFile('./file.txt', 'utf-8')
    .then(data => {
        console.log('\nMostrando contenido de \'file.txt\' ...');
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });

// Leer archivo 'file2.txt'
fs.readFile('./file2.txt', 'utf-8')
    .then(data => {
        console.log('\nMostrando contenido de \'file2.txt\' ...');
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
