// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var del = require('del');
var vinylPaths = require('vinyl-paths');
var sourcemaps = require('gulp-sourcemaps');

var jsFiles = [
    'src/js/modules/**/*.js',
    'src/js/app.js'
];

gulp.task('clean', function() {
    return gulp.src(['js/all.js'], {read: false})
        .pipe(vinylPaths(del))
});

gulp.task('lint', function() {
    return gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('minify', ['lint'], function() {
    return gulp.src(jsFiles)
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('all.min.js'))
        .pipe(gulp.dest('js/'));
});

gulp.task('watch', ['default'], function() {
    gulp.watch(jsFiles, ['default']);
});

// Default Task
gulp.task('default', ['minify', 'clean']);
