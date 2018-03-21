var gulp = require('gulp'),
  sass = require('gulp-sass'),
  cssnano = require('gulp-cssnano'),
  sourcemaps = require('gulp-sourcemaps'),
  prefix = require('gulp-autoprefixer'),
  plumber = require('gulp-plumber'),
  changed = require('gulp-changed'),
  rename = require('gulp-rename');

var scssSrc = './src/assets/scss/**/*.scss',
    cssDir = './src/assets/css';

var prefixerOptions = {
    browsers: ['last 2 versions']
};

gulp.task('sass', function() {
  return gulp.src(scssSrc)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(prefix(prefixerOptions))
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(cssDir))
});

gulp.task('watch', function() {
  gulp.watch(scssSrc, ['sass']);
});

gulp.task('default', ['watch']);
