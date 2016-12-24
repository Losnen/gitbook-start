import "babel-polyfill";
import github from 'octonode';
import inquirer from 'inquirer';
import fs from 'fs';

const init = async() => {

    if (fs.existsSync(process.env.HOME + '/.gitbook-start/token.json')) {
        console.log('Su token ya se ha generado y se encuentra en ' + process.env.HOME + '/.gitbook-start/token.json')
    } else {
        let datos = await readCmdLine();
        let token = await createToken(datos);
        fs.mkdirSync(process.env.HOME + '/.gitbook-start');
        fs.writeFileSync(process.env.HOME + '/.gitbook-start/token.json', '{ "token": "' + token + '" }');
        console.log('Token guardado con éxito en' + process.env.HOME + '/.gitbook-start/token.json');
    }
}

function createToken(data) {

    return new Promise((resolve, reject) => {
        github.auth.config({
            username: data.usr,
            password: data.passwd
        }).login({
            scopes: ['user', 'repo'],
            note: 'gitbook-start'
        }, (err, id, token) => {
            if (err) {
                if (err) console.log("Error: " + err.statusCode + ": " + err.message);
                reject(err);
            } else {
                resolve(token);
            }
        });
    });
}

function readCmdLine() {

    return new Promise((resolve, reject) => {
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
}

export { init };
