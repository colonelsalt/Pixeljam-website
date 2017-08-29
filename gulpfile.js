var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var coffee = require('gulp-coffee');

gulp.task('coffee', function () {
    return gulp.src('src/coffee/*.coffee')
	.pipe(coffee({bare: true}))
    	.pipe(gulp.dest('./dist/js'));
});

gulp.task('sass', function() {
	return sass('src/scss/*.scss')
	    .on('error', sass.logError)
	    .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function() {
    gulp.watch('src/scss/*.scss', ['sass']);
	gulp.watch('src/coffee/*.coffee', ['coffee']);
});

gulp.task('default', ['sass', 'coffee']);