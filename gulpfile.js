var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('default', function() {


});

gulp.task('develop', function() {
    return browserify('./src/viewAPI/app.js')
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./exports/test/'));
});

gulp.task('browserify', function() {
    return browserify('./src/viewAPI/app.js')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./exports/'));
});