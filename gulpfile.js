var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('connect',function(){
    connect.server({
        root:'vueStu',
        livereload:true
    });
});

gulp.task('html',function(){
    gulp.src('./*.html')
        .pipe(connect.reload());
});

gulp.task('watch',function(){
    gulp.watch(['./*.html','./*.js','./*.css'],['html']);
});

gulp.task('default',['connect','watch']);