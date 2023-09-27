import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import picocolors from 'picocolors';

// Método para leer los archivos que hay en el directorio proporcionado
async function ls(folderPath) {
    let files;

    try {
        files = await fs.readdir(folderPath);
    } catch (error) {
        console.error(picocolors.red(error));
        process.exit(1);
    }

    const filesPromises = files.map(async file => {
        const filePath = path.join(folderPath, file);
        let fileStats;

        try {
            fileStats = await fs.stat(filePath);
        } catch (error) {
            console.error(picocolors.red(error));
            process.exit(1);
        }

        const fileType = fileStats.isDirectory() ? '[D]' : '[F]';
        const fileSize = fileStats.size;
        const fileModified = fileStats.mtime.toLocaleString();

        return `${picocolors.magenta(fileType)} ${picocolors.blue(file.padEnd(35))} ${picocolors.green(fileSize.toString().padStart(10))} ${picocolors.yellow(fileModified.padStart(30))}`;
    });

    const filesInfo = await Promise.all(filesPromises);
    console.log(picocolors.bgWhite(picocolors.black('Lista de archivos en el directorio proporcionado:')));
    filesInfo.forEach(fileInfo => {
        console.log(fileInfo);
    });
}

// Obtenemos ruta de los argumentos de entrada
const folderPath = process.argv[2] ?? '.';
ls(folderPath);
