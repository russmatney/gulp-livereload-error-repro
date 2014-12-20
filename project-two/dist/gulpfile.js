var gulp = require('gulp'),
    livereload = require('gulp-livereload');

gulp.task('dist', function() {
  gulp.src('./*.js')
    .pipe(gulp.dest('dist'))
    .pipe(livereload());
    console.log(livereload.server);
});

gulp.task('default', function() {
  livereload.listen(35730);
  gulp.watch('./*.js', ['dist']);
});
