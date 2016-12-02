import browserSync from 'browser-sync'

module.exports = {
  views: {
    src: './sources/views/*.jade',
    watch: './sources/views/**/*.jade',
    dest: './public/',
  },
  styles: {
    src: './sources/styles/app/*.scss',
    watch: './sources/styles/app/**/*.scss',
    dest: './dist/',
  },
  demo: {
    src: './sources/styles/demo/*.scss',
    watch: './sources/styles/demo/**/*.scss',
    dest: './public/',
  },
  lintScripts: [
    './gulpfile.js',
    './tasks/**/*.js',
  ],
  browserSync: browserSync.create(),
  browserSyncOptions: {
    server: {
      baseDir: [
        './public',
        './dist',
      ],
    },
    notify: false,
    reloadDelay: 100,
    open: false,
  },
}
