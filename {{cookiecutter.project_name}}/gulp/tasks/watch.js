var gulp = require('gulp');
var paths = require('../paths')

function reportChange(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

gulp.task('watch', function () {
        gulp.watch(paths.bowerJson, ['wiredep']).on('change', reportChange);
    }
);