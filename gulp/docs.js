var gulp = require('gulp');
var bootprint = require('bootprint');

gulp.task('docs', () => {
  bootprint.load(require('bootprint-openapi'))
    .build('./api-swagger.json', './public/docs').generate();
});
