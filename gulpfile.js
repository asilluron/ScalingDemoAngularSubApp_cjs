var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('default', function () {


});

gulp.task('deploy', function () {
	return browserify('./src/blog-content/app.js')
		.external("angular")
		.bundle()
		.pipe(source('blog-content.js'))
		.pipe(gulp.dest('./exports/'));
});