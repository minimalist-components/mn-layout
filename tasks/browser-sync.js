import gulp from 'gulp'
import {browserSync, browserSyncOptions as options} from './config.js'
import historyApi from 'connect-history-api-fallback'
import gzip from 'compression'

gulp.task('browser-sync', browserSyncTask)

function browserSyncTask() {
  options.middleware = [
    historyApi(),
    gzip(),
  ]
  browserSync.init(options)
}
