const gulp = require('gulp')
const util = require('gulp-util')
const runSequence = require('run-sequence')

require('./build/app')
require('./build/deps')
require('./build/server')

gulp.task('default', () => {
   if (util.env.production) {
      runSequence('deps', 'app')
   } else {
      runSequence('deps', 'app', 'server')
   }
})