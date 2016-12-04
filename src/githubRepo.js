var inquirer = require('inquirer');
var github = require('octonode');
var fs = require('fs-extended');
var Fs = require('fs');

exports.createRepo = (nameRepo) => {

    var entrada = new Promise((resolve, reject) => {
        var questions = [{
            type: 'input',
            name: 'usr',
            message: 'Nombre de usuario en github'
        }, {
            type: 'password',
            message: 'Contraseña de github',
            name: 'passwd'
        }];

        inquirer.prompt(questions).then((answers) => {
            resolve(answers);
        });
    });

    entrada.then((data) => {

        var token_;
        var username_;

        var promise = new Promise((resolve, reject) => {
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

        promise.then((data) => {
            fs.createDirSync('./.gitbook-start');
            fs.writeFile('./.gitbook-start/token.txt', data, (err) => {});

            var client = github.client(data);
            var ghme = client.me();

            client.get('/user', {}, (err, status, body, headers) => {
                console.log("Email: " + body.email);
                console.log("Nombre: " + body.name);
                console.log("Usuario: " + body.login);
                require('simple-git')()
                    .init()
                    .addRemote('origin', 'git@github.com:' + body.login + '/' + nameRepo + '.git');
            });

            ghme.repo({
                "name": nameRepo,
                "description": "Reposotorio para el libro" + nameRepo,
            }, (err, status, body, headers) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Su repo se ha creado con éxito");
                }
            });

        }, (error) => {
            console.log(error);

        });

    }, (error) => {
        console.log(error);

    });

};
