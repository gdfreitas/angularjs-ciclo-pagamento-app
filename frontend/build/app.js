const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin')
const concat = require('gulp-concat')
const uglifycss = require('gulp-uglifycss')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const less = require('gulp-less')
const angularFileSorter = require('gulp-angular-filesort')

gulp.task('app', ['app.html', 'app.css', 'app.less', 'app.js', 'app.assets'])

// html
gulp.task('app.html', () => {
   gulp.src('app/**/*.html')
      .pipe(htmlmin({
         collapseWhitespace: true
      }))
      .pipe(gulp.dest('public'))
})

// estilos css
gulp.task('app.css', () => {
   gulp.src('assets/styles/*.css')
      .pipe(uglifycss({
         'uglyComments': true
      }))
      .pipe(concat('app.min.css'))
      .pipe(gulp.dest('public/assets/css'))
})

// less css preprocessor (somente aprendizado)
gulp.task('app.less', () => {
   gulp.src('assets/styles/*.less')
      .pipe(less())
      .pipe(uglifycss({
         'uglyComments': true
      }))
      .pipe(concat('less.min.css'))
      .pipe(gulp.dest('public/assets/css'));
})

// sequência obrigatória de injeção dos arquivos javascript: 
// modules, constants, config, factories, states, controllers, components
gulp.task('app.js', () => {
   return gulp.src('app/**/*.js')
      .pipe(babel({ presets: ['env'] }))
      .pipe(angularFileSorter())
      .pipe(uglify())
      .pipe(concat('app.min.js'))
      .pipe(gulp.dest('public/assets/js'))
})

// assets
gulp.task('app.assets', () => {
   gulp.src('assets/imgs/*.*')
      .pipe(gulp.dest('public/assets/imgs'))

   gulp.src('assets/*.ico')
      .pipe(gulp.dest('public/assets'))
})