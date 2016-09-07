var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', done => {
  runSequence('clean', 'build', done);
});
