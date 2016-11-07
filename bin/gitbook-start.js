#! /usr/bin/env node

var argv = require('minimist')(process.argv.slice(2));
var fs = require('fs-extended');
var path = require('path');
var fs2 = require('fs');
var shell = require('shelljs');
var github = require('octonode');
const readline = require('readline');
var exec = require('child_process').exec;

/*const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});*/


if (argv.n) {

    var second_path = path.resolve(__dirname, "../template")
    fs.copyDir(second_path, "./" + argv.n, function(err) {
        if (err)
            console.error(err)
    });

} else if (argv.d) {
    var dependencias = ls('./node_modules/').stdout.split("\n");
    var expresion = /gitbook-start-*/;

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

        console.log(data.usr);
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
                    reject(Error(err)); // status is not 200 OK, so reject
                } else {
                    resolve(token);
                }
            });
        });


        promise.then(function(data) {
            fs.writeFile('./token.txt', data, function(err) {});


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

    console.log("Añada un comando correcto");
    console.log("-> -n [NOMBRE DE DIR] (Crea la estructura de directorios)");
}
