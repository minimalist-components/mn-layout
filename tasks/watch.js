import gulp from 'gulp'
import {
  views,
  styles,
  demo,
  browserSync,
} from './config.js'

gulp.task('watch', watchTask)

function watchTask() {
  gulp.watch(views.watch, [
    'views',
    browserSync.reload,
  ])

  gulp.watch(styles.watch, ['styles'])
  gulp.watch(demo.watch, ['stylesDemo'])
}
