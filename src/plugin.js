import "babel-polyfill";
import fs from 'fs';
import Fs from 'fs-extended';
import path from 'path';
import npmInstallPackage from 'npm-install-package';

const plugin = async() => {

  let secondPath = path.resolve(__dirname, "../server");
  let deps = ["express"];
  let opts = {
      save: true
  };

  console.log("Desplegando el servidor e instalando dependencias...");

  npmInstallPackage(deps, opts, (err) => {
      if (err) {
          console.log(err);
      }
      console.log("Dependencias instaladas");
      console.log(secondPath);
      Fs.copyFileSync(secondPath + '/server.js', process.cwd() + '/server.js');
      console.log("Servidor desplegado");
      console.log("Ejecute node server.js para correr el servidor")
  });
}

export { plugin };
