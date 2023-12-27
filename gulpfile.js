const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const watch = require('gulp-watch');

// Define a task to compile Sass to CSS
gulp.task('css', function () {
    return gulp.src('src/scss/**/*.scss') // Adjust the source path accordingly
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css')); // Adjust the destination path accordingly
});

// Define a default task
gulp.task('default', gulp.series('css'));

// Define a watch task
gulp.task('watch', function () {
    gulp.watch("./src/scss/**/*.scss", gulp.series('css'));
    // Add additional watch tasks for other source files if needed
});