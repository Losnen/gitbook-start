(() => {
"use strict";

var exec = require('child_process').exec;
const deploy = (ipiaas,pathiaas) => {
  function puts(error, stdout, stderr) { console.log(stdout) }
  exec("#ssh usuario@" + ipiaas + " 'cd " + pathiaas + "; git pull'", puts);
};

module.exports = deploy;
})();
