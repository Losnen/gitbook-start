const gulp = require('gulp');
const shell = require('gulp-shell');
const ghPages = require('gulp-gh-pages');

gulp.task('deploy-gh-pages', () => {
  return gulp.src(['_book/*/*/*','_book/*/*','_book/*'])
    .pipe(ghPages());
});

gulp.task('deploy-github', () => {
  require('simple-git')()
          .add('.')
          .commit("commit")
          .push(['origin', 'master'], () => {});
});

gulp.task('build', shell.task([
  'gitbook build'
]));

gulp.task('serve', shell.task([
  'gitbook serve'
]));
