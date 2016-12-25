'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.template = undefined;

var _fsExtended = require('fs-extended');

var _fsExtended2 = _interopRequireDefault(_fsExtended);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _ejs = require('ejs');

var _ejs2 = _interopRequireDefault(_ejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var template = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(libro, autor, email) {
        var data, secondPath, files, i, dir, isDir, file;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        if (_fs2.default.existsSync(process.cwd() + '/' + libro)) {
                            _context.next = 18;
                            break;
                        }

                        data = {
                            author: autor || 'TODO: nombre',
                            email: email || 'TODO: email',
                            repo: 'TODO: Link del repo',
                            pagina: 'TODO: Pagina del libro',
                            name: libro
                        };
                        secondPath = _path2.default.resolve(__dirname, "../template");
                        files = _fs2.default.readdirSync(secondPath);


                        _fs2.default.mkdirSync(process.cwd() + '/' + libro);

                        i = 0;

                    case 6:
                        if (!(i < files.length)) {
                            _context.next = 15;
                            break;
                        }

                        dir = secondPath + '/' + files[i];
                        _context.next = 10;
                        return fileOrDirectory(dir);

                    case 10:
                        isDir = _context.sent;

                        if (!isDir) {
                            file = _fs2.default.readFileSync(dir, "utf8");


                            if (_path2.default.extname(files[i]) == '.ejs') {
                                files[i] = files[i].slice(0, -4);
                                file = _ejs2.default.render(file, data);
                            }

                            _fs2.default.writeFileSync(process.cwd() + '/' + libro + '/' + files[i], file);
                        } else {

                            _fsExtended2.default.copyDirSync(secondPath + '/' + files[i], "./" + libro + '/' + files[i]);
                        }

                    case 12:
                        i++;
                        _context.next = 6;
                        break;

                    case 15:

                        console.log("Estructura de directorios generada con éxito.");

                        _context.next = 19;
                        break;

                    case 18:

                        console.log("Ya se ha creado el libro " + libro + " en este directorio.");

                    case 19:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function template(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
}();

function fileRead(dir) {
    return _fs2.default.readFileSync(dir, "utf8");
}

function fileOrDirectory(dir) {
    return new Promise(function (resolve, reject) {
        _fs2.default.stat(dir, function (err, stats) {

            if (stats.isFile()) {
                resolve(false);
            }
            if (stats.isDirectory()) {
                resolve(true);
            }
        });
    });
}

exports.template = template;