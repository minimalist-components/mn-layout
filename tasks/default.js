import gulp from 'gulp'

let tasks = [
  'lint',
  'styles',
  'stylesDemo',
  'views',
  'browser-sync',
  'watch',
]

gulp.task('default', tasks)
