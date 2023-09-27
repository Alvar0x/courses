import fs from 'node:fs/promises';

fs.readdir('.')
    .then(files => {
        console.log('Archivos en la carpeta actual:');
        files.forEach(file => {
            console.log(file);
        });
    })
    .catch(error => {
        console.error(error.message);
    });
