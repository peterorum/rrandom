'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;

gulp.task('styles', function () {

  return gulp.src([
    path.join(conf.paths.src, '/index.scss')
  ])
    .pipe($.sourcemaps.init())
    .pipe($.sass()).on('error', conf.errorHandler('SASS'))
    .pipe($.autoprefixer()).on('error', conf.errorHandler('Autoprefixer'))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app/')))
    .pipe(browserSync.reload({ stream: true }));
});
