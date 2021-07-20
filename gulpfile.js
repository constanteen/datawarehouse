'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));

gulp.task('sass', () => {
    return gulp.src('sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/'));
    });

gulp.task('watch', function () {
    gulp.watch('sass/*.scss', gulp.series('sass'));
});