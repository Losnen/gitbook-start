'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.plugin = undefined;

require('babel-polyfill');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _fsExtended = require('fs-extended');

var _fsExtended2 = _interopRequireDefault(_fsExtended);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _npmInstallPackage = require('npm-install-package');

var _npmInstallPackage2 = _interopRequireDefault(_npmInstallPackage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var plugin = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var secondPath, deps, opts;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        secondPath = _path2.default.resolve(__dirname, "../server");
                        deps = ["express"];
                        opts = {
                            save: true
                        };


                        console.log("Desplegando el servidor e instalando dependencias...");

                        (0, _npmInstallPackage2.default)(deps, opts, function (err) {
                            if (err) {
                                console.log(err);
                            }
                            console.log("Dependencias instaladas");
                            console.log(secondPath);
                            _fsExtended2.default.copyFileSync(secondPath + '/server.js', process.cwd() + '/server.js');
                            console.log("Servidor desplegado");
                            console.log("Ejecute node server.js para correr el servidor");
                        });

                    case 5:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function plugin() {
        return _ref.apply(this, arguments);
    };
}();

exports.plugin = plugin;