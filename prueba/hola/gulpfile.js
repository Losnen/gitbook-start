//Dependencias
var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var shell = require('gulp-shell');
var json = ('./package.json');

gulp.task('deploy', function() {
  return gulp.src(['_book/*/*/*','_book/*/*','_book/*'])
    .pipe(ghPages());
});

gulp.task('deploy-github', shell.task([
  'git add .',
  'git commit -m "modificando"',
  'git push origin master'
]));
var iaas = require('/usr/local/lib/node_modules/gitbook-start-iaas-aitor-joshua-samuel/lib/lib.js'); var json = require('./package.json'); gulp.task('deploy-iaas', function() {console.log(json.iaasip);console.log(json.iaaspath);iaas(json.iaasip,json.iaaspath);});