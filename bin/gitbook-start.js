#! /usr/bin/env node

var argv = require('minimist')(process.argv.slice(2));
var cli = require('../src');

if (argv.n) {

  cli.deploy.deployTemplate(argv.n);

} else if (argv.d) {

  cli.plugin.deployPlugin(argv.d);

} else if (argv.u) {

  cli.githubRepo.createRepo(argv.u);

} else {

    console.log("Comandos válidos:");
    console.log("gitbook-start -h --> Opción de ayuda");
    console.log("gitbook-start -n [NOMBRE PROYECTO] --> Despliega una serie de directorios");
    console.log("gitbook-start -d [PLUGIN] -->  Te añade el plugin para el despliegue del libro (Ver la documentación sobre plugins)");
    console.log("gitbook-start -u [NOMBRE REPO] -> Crea tu repositorio en github");
}
