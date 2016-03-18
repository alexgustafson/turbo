var special = require('gulp-special-html');
var gulp = require('gulp');
var paths = require('../paths');

function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}

gulp.task('special', function () {
    return gulp.src(paths.dest + '**/*.html')
        .pipe(special())
        .on('error', handleError)
        .pipe(gulp.dest(paths.dest))
});