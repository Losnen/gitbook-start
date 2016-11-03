#! /usr/bin/env node
var argv = require('minimist')(process.argv.slice(2));
var fs = require('fs-extended');
var path = require('path');
var fs2 = require('fs');
var shell = require('shelljs/global');
var github = require('octonode');
const readline = require('readline');
var exec = require('child_process').exec;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


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

} else if (argv.u){
    var answer=argv.u;
    //rl.question('Indique cual es su nombre de usuario, luego pulse enter y escriba su password(se veráde forma oculta): ', (answer) => {
  // TODO: Log the answer in a database
  //console.log('Thank you for your valuable feedback:', answer);
function puts(error, stdout, stderr) {
      if(stdout){
        rl.close();
        //var json= JSON.stringify(stdout);
        //console.log(json)
        var respuesta = JSON.parse(stdout)
        //console.log(respuesta['token'])
        fs.writeFile('./token.txt', stdout, function(err) {
            if( err ){
                //console.log( err );
            }
            else{
                //console.log('Se ha escrito correctamente');
            }
        });
        //console.log(respuesta)
        //var response = stdout.token
        //console.log(stdout.token)
        //console.log(response);
      }
      if(stderr){
        rl.close();
        //console.log(stderr);
      }
      
    }
var id = Math.floor((Math.random() * 10000) + 1)
var prueba = exec("curl -u " + answer + " -d '{\"scopes\": [\"repo\", \"user\"], \"note\":"+id+"}' https://api.github.com/authorizations",puts);
//console.log(prueba)
  rl.close();
//});


} else {

    console.log("Añada un comando correcto");
    console.log("-> -n [NOMBRE DE DIR] (Crea la estructura de directorios)");
}
