import gulp from 'gulp'
import {browserSync, browserSyncOptions as options} from './config.js'
import gzip from 'compression'

gulp.task('browser-sync', browserSyncTask)

function browserSyncTask() {
  options.middleware = [
    gzip(),
  ]
  browserSync.init(options)
}
