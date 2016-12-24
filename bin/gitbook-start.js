#! /usr/bin/env node

const argv = require('minimist')(process.argv.slice(2));
const cli = require('../build');

if (argv.n) {

  cli.template(argv.n);

} else if (argv.d) {

  cli.plugin(argv.d,argv.p);

} else if (argv.i) {

  cli.init();

} else if (argv.i) {

  cli.repo(argv.u);

} else {

    console.log("Comandos válidos:");
    console.log("gitbook-start -h --> Opción de ayuda");
    console.log("gitbook-start -n [NOMBRE PROYECTO] --> Despliega una serie de directorios");
    console.log("gitbook-start -d [PLUGIN] -->  Te añade el plugin para el despliegue del libro (Ver la documentación sobre plugins)");
    console.log("gitbook-start -u [NOMBRE REPO] -> Crea tu repositorio en github");
}
