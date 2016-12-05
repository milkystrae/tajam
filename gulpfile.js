var gulp 			= require('gulp'),
	sass 			= require('gulp-sass');
	browserSync		= require('browser-sync');


gulp.task('sass', function(){
	return gulp.src(['app/sass/**/*.sass', 'app/sass/**/*.scss'])
	.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('watch',['browser-sync'],function(){
	gulp.watch('app/sass/**/*.sass',['sass']);
	gulp.watch('app/*.html', browserSync.reload);
});

gulp.task('browser-sync',function(){
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});