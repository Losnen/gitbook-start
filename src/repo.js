import "babel-polyfill";
import github from 'octonode';
import inquirer from 'inquirer';
import fs from 'fs';

const repo = async(datos) => {

    if (!fs.existsSync(process.env.HOME + '/.gitbook-start/token.json')) {
        console.log(' ');
        console.log('Todavía no ha generado su token, primero ejecute gitbook-start -t');
        console.log(' ');
        console.log('Para mas información, ejecute gitbook-start -h');
        console.log(' ');
    } else {
        let token = readToken();
        await createRepo(datos, token);
    }
}

function createRepo(datos, token) {
    console.log(datos + " token: " + token);
    return new Promise((resolve, reject) => {

        let client = github.client(token);
        let ghme = client.me();
        ghme.repo({
            "name": datos,
            "description": "Repo created by gitbook-start",
        }, (err, status, body, headers) => {
            if (err) {
                if (err) console.log("Error: " + err.statusCode + ": " + err.message);
                reject(err);
            } else {

                require('simple-git')()
                    .init()
                    .addRemote('origin', 'git@github.com:' + body.login + '/' + datos.r + '.git');

                console.log("Su repo se ha creado con éxito");
                resolve(body);
            }
        });
    });
}

function readToken() {

    let file = fs.readFileSync(process.env.HOME + '/.gitbook-start/token.json', "utf8");
    file = JSON.parse(file);
    return (file.token);
}

export { repo };
