import gulp from 'gulp';

let tasks = [
  'lint',
  'styles',
  'views',
  'browser-sync',
  'watch',
];

gulp.task('default', tasks);
