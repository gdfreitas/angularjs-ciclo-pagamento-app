const gulp = require('gulp')
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

gulp.task('deps', ['deps.js', 'deps.css', 'deps.fonts'])

// javascripts
gulp.task('deps.js', () => {
    gulp.src([
        'node_modules/angular/angular.min.js',
        'node_modules/@uirouter/angularjs/release/angular-ui-router.js',
        'node_modules/angular-animate/angular-animate.min.js',
        'node_modules/angular-toastr/dist/angular-toastr.tpls.min.js',
        'node_modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js',
        'node_modules/admin-lte/bootstrap/js/bootstrap.min.js',
        'node_modules/admin-lte/plugins/slimScroll/jquery.slimscroll.min.js',
        'node_modules/admin-lte/dist/js/app.min.js',
    ])
        .pipe(uglify())
        .pipe(concat('deps.min.js'))
        .pipe(gulp.dest('public/assets/js'))
})

// css
gulp.task('deps.css', () => {
    gulp.src([
        'node_modules/angular-toastr/dist/angular-toastr.min.css',
        'node_modules/font-awesome/css/font-awesome.min.css',
        'node_modules/admin-lte/bootstrap/css/bootstrap.min.css',
        'node_modules/admin-lte/dist/css/AdminLTE.min.css',
        'node_modules/admin-lte/dist/css/skins/_all-skins.min.css',
    ])
        .pipe(uglifycss({
            'uglyComments': true
        }))
        .pipe(concat('deps.min.css'))
        .pipe(gulp.dest('public/assets/css'))
})

// fonts
gulp.task('deps.fonts', () => {
    gulp.src([
        'node_modules/font-awesome/fonts/*.*',
        'node_modules/admin-lte/bootstrap/fonts/*.*'
    ])
        .pipe(gulp.dest('public/assets/fonts'))
})
