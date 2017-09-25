const gulp = require('gulp')
const util = require('gulp-util')

require('./gulpTasks/app')
require('./gulpTasks/deps')
require('./gulpTasks/server')

gulp.task('default', () => {
    if (util.env.production) {
        gulp.start('deps', 'app')
    } else {
        gulp.start('deps', 'app', 'server')
    }
})