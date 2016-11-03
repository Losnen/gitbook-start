const readline = require('readline');
var fs = require('fs')
var exec = require('child_process').exec;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Indique cual es su nombre de usuario, luego pulse enter y escriba su password(se veráde forma oculta): ', (answer) => {
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
});
