'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

// var $ = require('gulp-load-plugins')();

gulp.task('html', function () {

  return gulp.src([
    path.join(conf.paths.src, "/index.html")
  ])
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/')))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('html:watch', ['html']);
