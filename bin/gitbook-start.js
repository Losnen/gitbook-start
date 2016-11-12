#! /usr/bin/env node

var argv = require('minimist')(process.argv.slice(2));
var fs = require('fs-extended');
var path = require('path');
var shell = require('shelljs/global');
var github = require('octonode');


if (argv.n) {

    var second_path = path.resolve(__dirname, "../template")
    fs.copyDir(second_path, "./" + argv.n, function(err) {
        if (err)
            console.error(err)
    });

} else if (argv.d) {

    var aInstalar = "gitbook-start-"
    var nombres = "-aitor-joshua-samuel"
    console.log(aInstalar + argv.d + nombres);

    try {
        var req = require(aInstalar + argv.d + nombres);
        req.initialize();
    } catch (err) {
        console.log("Error al cargar las dependencia: " + aInstalar + argv.d + nombres);
    }

} else if (argv.u) {

    var inquirer = require('inquirer');

    var entrada = new Promise(function(resolve, reject) {
        var questions = [{
            type: 'input',
            name: 'usr',
            message: 'Nombre de usuario en github'
        }, {
            type: 'password',
            message: 'Contraseña degithub',
            name: 'passwd'
        }];

        inquirer.prompt(questions).then(function(answers) {
            resolve(answers);
        });
    });

    entrada.then(function(data) {

        var token_;
        var promise = new Promise(function(resolve, reject) {
            github.auth.config({
                username: data.usr,
                password: data.passwd
            }).login({
                scopes: ['user', 'repo'],
                note: 'Token repo Gitbook'
            }, (err, id, token) => {
                if (err) {
                    reject(Error(err));
                } else {
                    resolve(token);
                }
            });
        });


        promise.then(function(data) {
            fs.createDirSync('./.gitbook-start');
            fs.writeFile('./.gitbook-start/token.txt', data, function(err) {});

            var client = github.client(data);
            var ghme = client.me();

            client.get('/user', {}, function(err, status, body, headers) {
                console.log("Email: " + body.email);
                console.log("Nombre: " + body.name);
            });

            ghme.repo({
                "name": argv.u,
                "description": "This is your first repo",
            }, function(err, status, body, headers) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Su repo se ha creado con éxito");
                }
            });

        }, function(error) {
            console.log(error);

        });


    }, function(error) {
        console.log(error);

    });



} else {

    console.log("Comandos válidos:");
    console.log("gitbook-start -h --> Opción de ayuda");
    console.log("gitbook-start -n [NOMBRE PROYECTO] --> Despliega una serie de directorios");
    console.log("gitbook-start -d [PLUGIN] -->  Te añade el plugin para el despliegue del libro (Ver la documentación sobre plugins)");
    console.log("gitbook-stard -u [NOMBRE REPO] -> Crea tu repositorio en github");
}
