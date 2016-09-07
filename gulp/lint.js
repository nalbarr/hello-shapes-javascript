var gulp = require('gulp');
var path = require('path');
var eslint = require('gulp-eslint');
var eslintReporter = require('eslint-html-reporter');
var fs = require('fs');
var open = require('gulp-open');

gulp.task('lint', () => {
  var reportFile = path.join(__dirname, '..', 'reports', 'eslint', 'report-results.html');
  var reportsFolder = path.join(__dirname, '..', 'reports');
  var eslintFolder = path.join(__dirname, '..', 'reports', 'eslint');

  return gulp.src(['./src/**/*.js'])
  .pipe(eslint())
  .pipe(eslint.format(eslintReporter, results => {
    if (!fs.existsSync(reportsFolder)){
      fs.mkdirSync(reportsFolder);
    }

    if (!fs.existsSync(eslintFolder)){
      fs.mkdirSync(eslintFolder);
    }

    fs.writeFile(reportFile, results, (err) => {
      if(err) {
        console.log(err);
      } else {
        console.log('Done Linting.');

        gulp.src(reportFile).pipe(open());
      }
    });
  }));
});
