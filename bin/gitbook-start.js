#! /usr/bin/env node

const argv = require('minimist')(process.argv.slice(2));
const cli = require('../build');

if (argv.n) {

    cli.template(argv.n);

} else if (argv.d) {

    cli.plugin(argv.d, argv.p);

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
    console.log("gitbook-start -h                   \t Opción de ayuda");
    console.log("gitbook-start -n [NOMBRE PROYECTO] \t Despliega un directorio con todo lo necesario para comenzar a escribir el libro");
    console.log("gitbook-start -d [PLUGIN]          \t Te añade el plugin para el despliegue del libro (Ver la documentación sobre plugins)");
    console.log("gitbook-start -i                   \t Crea el token de github");
    console.log("gitbook-start -r [NOMBRE REPO]     \t Crea tu repositorio en github");
    console.log(' ');

} else {

  console.log(' ');
  console.log('Opción inválida, introduca gitbook-start -h para ver los comandos válidos');
  console.log(' ');

}
