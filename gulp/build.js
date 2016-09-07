var gulp = require('gulp');
var webpack = require('webpack-stream');
var webpackConfig = require('../webpack.config.js');
var filesToMove = ['./public/*.*','./public/scripts/*.*','./public/styles/*.*','./public/template/*.*','./public/docs/*.*'];

gulp.task('move', () => {
  gulp.src(filesToMove, { base: './' })
    .pipe(gulp.dest('build/'));
});

gulp.task('build', ['move'], () => {
  return gulp.src('src/server.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('build/'));
});
