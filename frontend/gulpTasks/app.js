const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin')
const concat = require('gulp-concat')
const uglifycss = require('gulp-uglifycss')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const less = require('gulp-less')

gulp.task('app', ['app.html','app.less', 'app.css', 'app.js', 'app.assets'])

// html
gulp.task('app.html', () => {
    gulp.src('app/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('public'))
})

// css
gulp.task('app.css', () => {
    gulp.src('app/**/*.css')
        .pipe(uglifycss({ 'uglyComments': true }))
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('public/assets/css'))
})

// less
gulp.task('app.less', () => {
    gulp.src('app/**/*.less')
        .pipe(less())
        .pipe(uglifycss({ 'uglyComments': true }))
        .pipe(concat('less.min.css'))
        .pipe(gulp.dest('public/assets/css'));
})

// javascripts
gulp.task('app.js', () => {
    gulp.src('app/**/*.js')
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('public/assets/js'))
})

// imagens, fonts, docs, etc
gulp.task('app.assets', () => {
    gulp.src('assets/**/*.*')
        .pipe(gulp.dest('public/assets'))
})