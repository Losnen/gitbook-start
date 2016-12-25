import Fs from 'fs-extended';
import fs from 'fs';
import path from 'path';
import ejs from 'ejs';

const template = async(libro, autor, email) => {

    if (!fs.existsSync(process.cwd() + '/' + libro)) {
        let data = {
            author: autor || 'TODO: nombre',
            email: email || 'TODO: email',
            repo: 'TODO: Link del repo',
            pagina: 'TODO: Pagina del libro',
            name: libro
        }

        let secondPath = path.resolve(__dirname, "../template");
        let files = fs.readdirSync(secondPath);

        fs.mkdirSync(process.cwd() + '/' + libro);

        for (let i = 0; i < files.length; i++) {
            let dir = secondPath + '/' + files[i];
            let isDir = await fileOrDirectory(dir);
            if (!isDir) {
                let file = fs.readFileSync(dir, "utf8");

                if (path.extname(files[i]) == '.ejs') {
                    files[i] = files[i].slice(0, -4);
                    file = ejs.render(file, data);
                }

                fs.writeFileSync(process.cwd() + '/' + libro + '/' + files[i], file);

            } else {

                Fs.copyDirSync(secondPath + '/' + files[i], "./" + libro + '/' + files[i]);
            }
        }

        console.log("Estructura de directorios generada con éxito.");

    } else {

      console.log("Ya se ha creado el libro " + libro + " en este directorio." );

    }

}

function fileRead(dir) {
    return (fs.readFileSync(dir, "utf8"));
}

function fileOrDirectory(dir) {
    return new Promise((resolve, reject) => {
        fs.stat(dir, (err, stats) => {

            if (stats.isFile()) {
                resolve(false);
            }
            if (stats.isDirectory()) {
                resolve(true);
            }

        });
    });

}

export { template };
