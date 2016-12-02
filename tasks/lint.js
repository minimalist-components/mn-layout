import gulp from 'gulp'
import {lintScripts} from './config.js'
import eslint from 'gulp-eslint'
import gutil from 'gulp-util'

gulp.task('lint', lintTask)

function lintTask() {
  return gulp
    .src(lintScripts)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .on('error', beep)
}

function beep() {
  gutil.beep()
}
