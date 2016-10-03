import gulp from 'gulp';

let tasks = [
  'styles',
  'views',
  'browser-sync',
  'watch',
];

gulp.task('default', tasks);
