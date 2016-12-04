var fs = require('fs-extended');
var Fs = require('fs');
var path = require('path');

exports.deployTemplate = (nameDir) => {
    var second_path = path.resolve(__dirname, "../template");
    fs.copyDir(second_path, "./" + nameDir, function(err) {
        if (err) {
            console.error(err);
        }
        Fs.appendFile(nameDir + '/.gitignore', "DS_Store\nnode_modules\n.gitbook-start\n", (err) => {
            if (err) {
                console.error(err);
            }
        });
    });

    console.log("Estructura de directorios generada con éxito.");
};
