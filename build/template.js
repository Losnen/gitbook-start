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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var template = function template(nameDir) {

    var second_path = _path2.default.resolve(__dirname, "../template");
    _fsExtended2.default.copyDir(second_path, "./" + nameDir, function (err) {
        if (err) {
            console.error(err);
        }
        _fs2.default.appendFile(nameDir + '/.gitignore', "DS_Store\nnode_modules\n.gitbook-start\n", function (err) {
            if (err) {
                console.error(err);
            }
        });
    });

    console.log("Estructura de directorios generada con éxito.");
};

exports.template = template;