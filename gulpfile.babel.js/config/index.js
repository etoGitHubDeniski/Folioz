'use strict';

export const paths = {
  root: './dist',

  views: {
    src: './src/views/*.html',
    dest: './dist',
    watch: ['./src/views/**/*.html', './src/blocks/**/*.html'],
  },

  styles: {
    src: './src/scss/main.scss',
    dest: './dist/css',
    watch: ['./src/scss/**/*.scss', './src/blocks/**/*.scss'],
  },

  scripts: {
    src: './src/js/main.js',
    dest: './dist/js',
    watch: ['./src/js/**/*.js', './src/blocks/**/*.js'],
  },

  misc: {
    src: './src/misc/**',
    dest: './dist',
    watch: './src/misc/**',
  },
};

const production = process.argv.includes('--production');

export const props = {
  production: production,

  browserSync: {
    server: paths.root,
    host: '192.168.167.233',
    watch: true,
    open: false,
  },

  rename: {
    suffix: '.min',
  },

  fileinclude: {
    prefix: '@',
    basepath: '@file',
  },

  htmlmin: {
    collapseWhitespace: true,
  },

  sass: {
    outputStyle: 'compressed',
  },
};
