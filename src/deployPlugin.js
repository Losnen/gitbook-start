var npmInstallPackage = require('npm-install-package');
var path = require('path');

exports.deployPlugin = (nombrePlugin, pOption) => {
    var param = "local";
    var aInstalar = "gitbook-start-";
    var nombres = "-aitor-joshua-samuel";
    var plugin = aInstalar + nombrePlugin + nombres;
    if (pOption) {
        param = pOption;
    }

    var opts = {
        save: true,
        cache: true
    };

    console.log("Instalando el plugin " + plugin + "...");

    npmInstallPackage(plugin, opts, (err) => {
        if (err) {
            console.log(err);
        }
        console.log(plugin + " instalado correctamente.");

        try {
            var dirPlugin = path.resolve(process.cwd(), 'node_modules', plugin);
            var req = require(dirPlugin);
            req.initialize(param);
        } catch (err) {
            console.log(err);
            console.log("Error al cargar las dependencia: " + plugin);
        }
    });
};
