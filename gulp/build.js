'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});


gulp.task('build', [], function () {

  // var htmlFilter = $.filter('*.html', { restore: true });
  // var jsFilter = $.filter('**/*.js', { restore: true });
  // var cssFilter = $.filter('**/*.css', { restore: true });

  return gulp.src([
    path.join(conf.paths.tmp, '/serve/index.html'),
    path.join(conf.paths.tmp, '/serve/**/*.css'),
    path.join(conf.paths.tmp, '/serve/**/*.')
    ])
    .pipe($.debug({title: 'all'}))
    .pipe(gulp.dest(path.join(conf.paths.dist, '/')));
  });

gulp.task('clean', function () {
  return $.del([path.join(conf.paths.dist, '/'), path.join(conf.paths.tmp, '/')]);
});

