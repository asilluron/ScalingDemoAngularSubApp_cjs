var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('default', function () {

});

gulp.task('deploy', function () {
	return browserify('./src/blog-content/app.js')
		.external("blog-resources/exports/blog-resources")
		.bundle({standalone: "blog-content"})
		.pipe(source('blog-content.js'))
		.pipe(gulp.dest('./exports/'));
});