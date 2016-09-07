var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('pre-commit', () => {
  return gulp.src(['./src/**/*.js'])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});
