const gulp = require('gulp')
const watch = require('gulp-watch')
const webserver = require('gulp-webserver')

gulp.task('server', ['watch'], () => {
   gulp.src('public')
      .pipe(webserver({
         livereload: true,
         port: 3000,
         open: true
      }))
})

gulp.task('watch', () => {
   watch('app/**/*.html', () => gulp.start('app.html'))
   watch('app/**/*.js', () => gulp.start('app.js'))
   watch('assets/imgs/**/*.*', () => gulp.start('app.assets'))
   watch('assets/styles/*.css', () => gulp.start('app.css'))
   watch('assets/styles/*.less', () => gulp.start('app.less'))
})