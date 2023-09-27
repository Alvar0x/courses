import process from 'node:process';

// Process es un objeto global que proporciona información
// y control sobre el proceso actual de ejecución.

// Argumentos de entrada
console.log('Argumentos de entrada:');
process.argv.forEach(arg => {
    console.log(arg);
});

// Controlar eventos del proceso
process.on('exit', (code) => {
    if (code === 0) console.log('\n¡Adios!');
    else console.error('\n¡Error!');
});

// Current Working Directory - Directorio actual del proceso
console.log('\nCWD: ' + process.cwd());

// Variables de entorno
console.log('Valor de variable: ' + process.env.ENV_VAR_TEST);

// Controlar salida del proceso (Código 0: Ok, Código 1: Error)
process.exit(0);
