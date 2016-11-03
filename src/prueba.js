var github = require('octonode');
var fs = require('fs')
fs.readFile('./.ghtoken', 'utf8', function(err, token) {
    if (err) {
        console.log(err);
    }

    var client = github.client(token.trim());
    var ghme = client.me();

    client.get('/user', {}, function(err, status, body, headers) {
        console.log("Email: " + body.email);
        console.log("Nombre: " + body.name);
    });

    ghme.repo({
        "name": "MyRepo",
        "description": "This is your first repo",
    }, function(err, status, body, headers) {
        if (err) {
            console.log(err);
        } else {
            console.log("Su repo se ha creado con éxito");
        }
    });
});
