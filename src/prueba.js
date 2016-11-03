var github = require('octonode');
var fs = require('fs')
fs.readFile('./.ghtoken', 'utf8', function (err,token) {
  if (err) {
    console.log(err);
  }
  var client = github.client(token.trim());

  client.get('/user', {}, function (err, status, body, headers) {
    console.log(body); //json object
  });
});
