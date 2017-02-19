var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	cssnano = require('gulp-cssnano'),
	sourcemaps = require('gulp-sourcemaps'),
	useref = require('gulp-useref'),					// Used to combine js or stylesheets files
	gulpif = require('gulp-if'),						// Used for conditional check to pipe assets through correct plugins e.g css => autoprefixer
	browserSync = require('browser-sync');

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: 'app'
		}
	});
	
});

gulp.task('sass', function() {
	gulp.src('app/sass/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(cssnano())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('watch', ['sass', 'browserSync'], function() {
	gulp.watch('app/scss/**/*.scss', ['sass']);
	// gulp.watch('app/js/*.js', 'uglify');
	gulp.watch('app/index.html', browserSync.reload);

})