var gulp        = require('gulp');
var sourcemaps  = require('gulp-sourcemaps');
var sass        = require('gulp-sass');
var concatCss   = require('gulp-concat-css');

gulp.task('sass', function() {
  return gulp.src('./public/css/src/**/*.scss')
    //.pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    //.pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./public/css/dist/compiled'))
    .pipe(concatCss('bundle.css'))
    .pipe(gulp.dest('./public/css/dist'));
});
