import "babel-polyfill";
import fs from 'fs';
import path from 'path';
import npmInstallPackage from 'npm-install-package';

const plugin = async(nombrePlugin, pOption) => {

  let aInstalar = "gitbook-start-";
  let nombres = "-aitor-joshua-samuel";
  let plugin = aInstalar + nombrePlugin + nombres;


  let opts = {
      save: true
  };

  console.log("Instalando el plugin " + plugin + "...");

  npmInstallPackage(plugin, opts, (err) => {
      if (err) {
          console.log(err);
      }
      console.log(plugin + " instalado correctamente.");

      try {
          let dirPlugin = path.resolve(process.cwd(), 'node_modules', plugin);
          let req = require(dirPlugin);
          req.initialize(pOption);
      } catch (err) {
          console.log(err);
          console.log("Error al cargar las dependencia: " + plugin);
      }
  });
}

export { plugin };
