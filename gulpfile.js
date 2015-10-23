var gulp = require('gulp');
var compass = require('gulp-compass');
var path = path = require('path');
var minifyCSS = require('gulp-minify-css');
var browserSync = require('browser-sync');
var reload = browserSync.reload;


gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      notify: false,
      baseDir: './'
    }
  });
});


gulp.task('bs-reload', function () {
  browserSync.reload();
});


gulp.task('compass', function() {
  gulp.src('./assets/sass/*.scss')
  .pipe(compass({
    css: 'assets/css',
    sass: 'assets/sass',
    image: 'assets/img'
  }))
  //.pipe(minifyCSS())
  .pipe(gulp.dest('./assets/css'))
  .pipe(browserSync.reload({stream:true}));
});


gulp.task('default', ['browser-sync'], function() {
  gulp.watch(['./*.html'], ['bs-reload']);
  gulp.watch(['./assets/sass/*.scss'], ['compass']);
});











