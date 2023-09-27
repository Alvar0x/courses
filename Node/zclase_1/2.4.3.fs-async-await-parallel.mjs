import fs from 'node:fs/promises';

// En paralelo es, básicamente, hacerlo todo a la vez

Promise.all([
    fs.stat('./file.txt'),
    fs.readFile('./file.txt', 'utf-8'),
    fs.readFile('./file2.txt', 'utf-8')
]).then(([stats, data1, data2]) => {
    // Mostrar estadísticas del archivo 'file.txt'
    console.log('Mostrando estadísticas de \'file.txt\':');
    console.log('Es archivo: ' + stats.isFile());
    console.log('Es directorio: ' + stats.isDirectory());
    console.log('Es enlace simbólico: ' + stats.isSymbolicLink());
    console.log('Tamaño: ' + stats.size);

    // Mostrar contenido de 'file.txt'
    console.log('\nMostrando contenido de \'file.txt\' ...');
    console.log(data1);

    // Mostrar contenido de 'file2.txt'
    console.log('\nMostrando contenido de \'file2.txt\' ...');
    console.log(data2);
});
