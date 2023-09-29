const gulp = require('gulp');

gulp.task('html', () => {
    return gulp.src('app/*.html')
    .pipe(gulp.dest('dist'))
});

gulp.task('watch', () => {
    gulp.watch('app/*.html', gulp.parallel('html'));
})

gulp.task('default', gulp.series('html', 'watch'));
