import path from 'node:path';

// Ver el separador de rutas de nuestro sistema operativo
console.log('Separador de rutas: ' + path.sep);

// Unir rutas para que no importe el separador de casa sistema operativo
const joinedPath = path.join(path.sep + 'folder', 'subfolder', 'test.txt');
console.log('Ruta unida: ' + joinedPath);

// Obtener nombre de fichero en una ruta completa
const fileName = path.basename(joinedPath);
console.log('Nombre del fichero: ' + fileName);

// Obtener extensión de un fichero
const fileExtension = path.extname(joinedPath);
console.log('Extensión del fichero: ' + fileExtension);

// Obtener el nombre del fichero sin extensión
const fileNameWithoutExt = path.basename(joinedPath, fileExtension);
console.log('Nombre del fichero sin extensión: ' + fileNameWithoutExt);
