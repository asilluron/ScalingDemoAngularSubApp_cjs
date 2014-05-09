var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('default', function () {


});

gulp.task('deploy', function () {
	return browserify('./src/viewAPI/app.js')
		.external("angular")
		.bundle()
		.pipe(source('viewAPI.js'))
		.pipe(gulp.dest('./exports/'));
});