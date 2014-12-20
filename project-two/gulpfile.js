var gulp = require('gulp'),
    livereload = require('gulp-livereload');

gulp.task('dist', function() {
  gulp.src('./*.js')
    .pipe(gulp.dest('dist'))
    .pipe(livereload());
});

gulp.task('default', function() {
  livereload.listen(1234);
  gulp.watch('./*.js', ['dist']);
});
