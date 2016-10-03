import browserSync from 'browser-sync';

module.exports = {
  views: {
    src: './sources/views/*.jade',
    watch: './sources/views/**/*.jade',
    dest: './public/',
  },
  styles: {
    src: './sources/styles/*.scss',
    watch: './sources/styles/**/*.scss',
    dest: './dist/',
    sourcemaps: '/sources/styles',
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
};
