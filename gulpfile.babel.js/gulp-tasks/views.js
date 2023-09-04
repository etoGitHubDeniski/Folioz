'use strict';

import { paths, props } from '../config';
import { dest, src, task } from 'gulp';
import fileinclude from 'gulp-file-include';
import gulpIf from 'gulp-if';
import htmlmin from 'gulp-htmlmin';
import prettier from 'gulp-prettier';
import replace from 'gulp-replace';

task('views', () => {
  return src(paths.views.src)
    .pipe(fileinclude(props.fileinclude))
    .pipe(gulpIf(props.production, replace('.css', '.min.css')))
    .pipe(gulpIf(props.production, replace('.js', '.min.js')))
    .pipe(gulpIf(!props.production, prettier()))
    .pipe(gulpIf(props.production, htmlmin(props.htmlmin)))
    .pipe(dest(paths.views.dest));
});
