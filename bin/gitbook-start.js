#! /usr/bin/env node

const argv = require('minimist')(process.argv.slice(2));
const cli = require('../build');

if (argv.n) {

    cli.template(argv.n, argv.a, argv.e);

} else if (argv.d) {

    cli.plugin();

} else if (argv.i) {

    cli.init();

} else if (argv.r) {

    cli.repo(argv.r);

} else if (argv.v) {

    console.log(' ');
    console.log('Versión: ' + require('../package.json').version);
    console.log(' ');

} else if (argv.h) {

    console.log(' ');
    console.log('Usage: gitbook-start [options]');
    console.log(' ');
    console.log('Options:');
    console.log(' ');
    console.log('gitbook-start -h                                             \t Opción de ayuda');
    console.log('gitbook-start -v                                             \t Versión del paquete');
    console.log('gitbook-start -n [Nombre del Proyecto] -a [Autor] -e [Email] \t Despliega un directorio con todo lo necesario para comenzar a escribir el libro');
    console.log('gitbook-start -d                                             \t Te añade un servidor express para desplegar tu libro');
    console.log('gitbook-start -i                                             \t Crea el token de github');
    console.log('gitbook-start -r [NOMBRE REPO]                               \t Crea tu repositorio en github');
    console.log(' ');
    console.log('Tareas');
    console.log('gulp deploy-github || npm run deploy                         \t Sube los archivos al repo de gitub');
    console.log('gulp deploy-gh-pages || npm run gh-pages                     \t Sube la carpeta de los HTML a la rama gh-pages');
    console.log('gulp serve || npm run serve                                  \t Crea un servidor para ver el libro');
    console.log('gulp build || npm run build                                  \t Genera los HTML del libro.');
    console.log(' ');

} else {

  console.log(' ');
  console.log('Opción inválida, introduca gitbook-start -h para ver los comandos válidos');
  console.log(' ');

}
