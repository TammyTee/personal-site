var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('../config.json');

var sass = function() {
  return gulp.src(config.root.src + '/scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest(config.root.dest + '/css'))
};

gulp.task('sass', sass);
