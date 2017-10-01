const gulp = require('gulp')
const util = require('gulp-util')

require('./build/app')
require('./build/deps')
require('./build/server')

gulp.task('default', () => {
    if (util.env.production) {
        gulp.start('deps', 'app')
    } else {
        gulp.start('deps', 'app', 'server')
    }
})