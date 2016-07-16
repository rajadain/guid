"use strict";

var browserify = require('browserify'),
    gulp       = require('gulp'),
    concat     = require('gulp-concat'),
    jshint     = require('gulp-jshint'),
    minifyCSS  = require('gulp-minify-css'),
    sass       = require('gulp-sass'),
    uglify     = require('gulp-uglify'),
    transform  = require('vinyl-transform');

gulp.task('build', ['vendor-styles', 'jshint', 'sass', 'browserify']);
gulp.task('default', ['watch']);

gulp.task('browserify', function() {
    var browserified = transform(function(filename) {
        var b = browserify(filename);
        return b.bundle();
    });

    return gulp.src('./src/js/**/*.js')
        .pipe(browserified)
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('jshint', function() {
    return gulp.src('./src/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('vendor-styles', function() {
    return gulp.src([
        './node_modules/bootstrap/dist/css/bootstrap.min.css',
        './node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
        ])
        .pipe(concat('vendor.min.css'))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass', function() {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function() {
    gulp.watch('./src/js/**/*.js', ['jshint', 'browserify']);
    gulp.watch('./src/scss/**/*.scss', ['sass']);
});
