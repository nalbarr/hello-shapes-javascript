var gulp = require('gulp');
var istanbul = require('gulp-istanbul');
var mocha = require('gulp-mocha');
var isparta = require('isparta');

gulp.task('pre-test', () => {
  return gulp.src(['./src/**/*.js'])
    // Covering files
    .pipe(istanbul({
      instrumenter: isparta.Instrumenter,
      includeUntested: true
    }))
    .on('error', err => {
      console.log(err);
    })
    // Force `require` to return covered files
    .pipe(istanbul.hookRequire());
});

function handleError (err) {
  console.log(err.toString());
  this.emit('end');
}

gulp.task('test', ['pre-test'], () => {
  return gulp.src(['./tests/**/*.js'], {read: false})
    .pipe(mocha({
      reporter: 'spec',
      ui: 'bdd',
      require: ['./tests/helper.test.js'],
      timeout: 15000
    }))
    .on('error', handleError)
    .pipe(istanbul.writeReports({
      dir: './coverage',
      reporters: ['text-summary'],
      reportOpts: {dir: './coverage'}
    })
  );
});

gulp.task('test:watch', ['test'], () => {
  gulp.watch(['src/**', 'tests/**'], ['test']);
});

gulp.task('coverage', ['pre-test'], () => {
  return gulp.src(['./tests/**/*.js'], {read: false})
    .pipe(mocha({
      reporter: 'spec',
      ui: 'bdd',
      require: ['./tests/helper.test.js'],
      timeout: 15000
    }))
    .on('error', handleError)
    .pipe(istanbul.writeReports({
      dir: './reports/coverage',
      reporters: ['html'],
      reportOpts: {dir: './reports/coverage'}
    })
  );
});
