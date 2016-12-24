import fs from 'fs-extended';
import Fs from 'fs';
import path from 'path';

const template = (nameDir) => {

  let second_path = path.resolve(__dirname, "../template");
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
}

export { template };
