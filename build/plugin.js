'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.plugin = undefined;

require('babel-polyfill');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _npmInstallPackage = require('npm-install-package');

var _npmInstallPackage2 = _interopRequireDefault(_npmInstallPackage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var plugin = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(nombrePlugin, pOption) {
        var aInstalar, nombres, plugin, opts;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        aInstalar = "gitbook-start-";
                        nombres = "-aitor-joshua-samuel";
                        plugin = aInstalar + nombrePlugin + nombres;
                        opts = {
                            save: true
                        };


                        console.log("Instalando el plugin " + plugin + "...");

                        (0, _npmInstallPackage2.default)(plugin, opts, function (err) {
                            if (err) {
                                console.log(err);
                            }
                            console.log(plugin + " instalado correctamente.");

                            try {
                                var dirPlugin = _path2.default.resolve(process.cwd(), 'node_modules', plugin);
                                var req = require(dirPlugin);
                                req.initialize(pOption);
                            } catch (err) {
                                console.log(err);
                                console.log("Error al cargar las dependencia: " + plugin);
                            }
                        });

                    case 6:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function plugin(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

exports.plugin = plugin;