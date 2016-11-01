#! /usr/bin/env node

var argv = require('minimist')(process.argv.slice(2));
var fs = require('fs-extended');
var path = require('path');
var fs2 = require('fs');
var shell = require('shelljs/global');
var dependencias = ls('./node_modules/').stdout.split("\n");
var expresion = /gitbook-start-*/;

if (argv.n) {

    var second_path = path.resolve(__dirname, "../template")
    fs.copyDir(second_path, "./" + argv.n, function(err) {
        if (err)
            console.error(err)
    });

} else if (argv.d) {
  
    for (i = 0; i < dependencias.length; i++) {

        try {
            if (dependencias[i].match(expresion)) {
                console.log(dependencias[i]);
                var req = require(dependencias[i]);
                console.log(dependencias[i]);
                req.initialize();
            }
        } catch (err) {
            console.log("Error al cargar las dependencia: " + dependencias[i]);
        }
    }

} else {

    console.log("Añada un comando correcto");
    console.log("-> -n [NOMBRE DE DIR] (Crea la estructura de directorios)");
}
