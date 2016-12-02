import gulp from 'gulp'
import {demo} from './config.js'
import sass from 'gulp-sass'
import sourcemaps from 'gulp-sourcemaps'
import autoprefixer from 'gulp-autoprefixer'
import {browserSync} from './config.js'
import plumber from 'gulp-plumber'
import gutil from 'gulp-util'

let outputStyle = 'compressed'

gulp.task('stylesDemo', stylesDemoTask)

function stylesDemoTask() {
  gulp
    .src(demo.src)
    .pipe(plumber({errorHandler}))
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle}))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(demo.dest))
    .pipe(browserSync.stream({match: '**/*.css'}))
}

function errorHandler(err) {
  let message = new gutil.PluginError('gulp-sass', err.messageFormatted).toString()
  process.stderr.write(message + '\n')
  gutil.beep()
}
