import gulp from 'gulp';
import {views, styles, browserSync} from './gulp.config.js';

gulp.task('watch', watchTask);

function watchTask() {
  gulp.watch(views.watch, [
    'views',
    browserSync.reload,
  ]);

  gulp.watch(styles.watch, ['styles']);
}
