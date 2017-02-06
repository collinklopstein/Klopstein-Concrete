var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


gulp.task('styles', function () {
	gulp.src('./css/style.css')
	.pipe(sass())
	.pipe(gulp.dest('./css'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('serve', function() {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
	gulp.watch('./css/*.css', ['styles']);
	gulp.watch('./**/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['styles', 'serve']);

